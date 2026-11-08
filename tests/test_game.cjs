const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');
const catalogCode = fs.readFileSync(path.join(__dirname, '..', 'content', 'catalog.js'), 'utf8');
const code = fs.readFileSync(path.join(__dirname, '..', 'game.js'), 'utf8');
class FakeNode {
  constructor(tag='div') { this.tagName=tag; this.children=[]; this.listeners={}; this.dataset={}; this.className=''; this._innerHTML=''; this.textContent=''; this.parentNode=null; this.id=''; this.files=[]; this.style={}; }
  set innerHTML(v) { this._innerHTML=String(v); this.children=[]; }
  get innerHTML() { return this._innerHTML; }
  appendChild(n) { n.parentNode=this; this.children.push(n); return n; }
  remove() { if(this.parentNode) this.parentNode.children=this.parentNode.children.filter(x=>x!==this); this.parentNode=null; }
  addEventListener(k,fn) { this.listeners[k]=fn; }
  closest(sel) {
    if(sel==='[data-action]' && this.dataset.action) return this;
    if(sel==='[data-tab]' && this.dataset.tab) return this;
    if(sel==='.modal-backdrop') return this.modalBackdrop || (this.className==='modal-backdrop'?this:null);
    return null;
  }
  click() { this._clicked=true; }
}
class Storage {
 constructor(seed={}){this.map=new Map(Object.entries(seed));}
 getItem(k){return this.map.has(k)?this.map.get(k):null;}
 setItem(k,v){this.map.set(k,String(v));}
 removeItem(k){this.map.delete(k);}
}
class FD {
 constructor(form){this.form=form;}
 entries(){return Object.entries(this.form.fields||{});}
}
function makeContext(seed={}) {
 const app=new FakeNode('div');
 const body=new FakeNode('body');
 const doc={
   body,
   querySelector(sel){
     if(sel==='#app') return app;
     if(sel==='.modal-backdrop') return [...app.children].reverse().find(x=>x.className==='modal-backdrop')||null;
     if(sel==='.toast') return [...body.children].reverse().find(x=>x.className==='toast')||null;
     return null;
   },
   getElementById(id){ return id==='app'?app:null; },
   createElement(tag){ return new FakeNode(tag); }
 };
 const win={listeners:{},addEventListener(k,fn){this.listeners[k]=fn;}};
 const math=Object.create(Math); math.random=()=>0.2;
 const sandbox={document:doc,window:win,navigator:{},location:{protocol:'http:'},localStorage:new Storage(seed),FormData:FD,console:{log(){},warn(){},error(){}},Math:math,Date,Intl,URL,Blob,FileReader:function(){},setTimeout(){return 1;},clearTimeout(){},Map,Set,Object,Array,String,Number,Boolean,JSON,Promise,parseInt,parseFloat};
 vm.createContext(sandbox);
 vm.runInContext(catalogCode,sandbox,{timeout:5000});
 vm.runInContext(code,sandbox,{timeout:5000});
 function clickAction(action,id){
   const target=new FakeNode('button');target.dataset={action,id};
   target.closest=FakeNode.prototype.closest;
   app.listeners.click({target});
 }
 function clickTab(tab){const target=new FakeNode('button');target.dataset={tab};app.listeners.click({target});}
 function submit(id,fields={}){const f=new FakeNode('form');f.id=id;f.fields=fields;app.listeners.submit({target:f,preventDefault(){}});}
 return {app,body,doc,win,storage:sandbox.localStorage,clickAction,clickTab,submit,context:sandbox};
}
const tests=[];
function check(name,fn){ try{fn();tests.push({name,ok:true});}catch(e){tests.push({name,ok:false,error:e.stack||String(e)});}}
// New character, birth state and local save.
let c=makeContext();
check('New game setup displays birth-to-life identity',()=>assert(c.app.innerHTML.includes('Begin at birth')));
c.submit('new-game-form',{name:'Aarav Test',city:'Hyderabad',background:'middle',trait:'curious',presentation:'boy',appearance:'classic',sibling:'yes'});
let state=JSON.parse(c.storage.getItem('life-and-empire-save-v6'));
check('New life starts at age zero with three quarterly decisions',()=>{assert.equal(state.player.age,0);assert.equal(state.time.actionPoints,3);assert.equal(state.time.quarter,1);});
check('Identity, needs and family initialize',()=>{for(const k of ['health','energy','stress','happiness','smarts','fitness','creativity','discipline','charisma','confidence','social','resilience'])assert(Number.isFinite(state.player[k]));assert.equal(state.family.parents.length,2);assert.equal(state.family.siblings.length,1);});
check('Eight sections render without runtime exceptions',()=>{for(const tab of ['home','identity','career','bank','market','economy','business','world']){c.clickTab(tab);assert(c.app.innerHTML.length>500,tab);}});
check('Child bank blocks investment and leaves cash transfers available',()=>{c.clickTab('bank');assert(c.app.innerHTML.includes('PERSONAL BANKING'));assert(c.app.innerHTML.includes('Bank actions'));assert(c.app.innerHTML.includes('Establish your first bank'));});
check('Three actions can be taken within the same quarter',()=>{c.clickTab('home');c.clickAction('life-action','bond');c.clickAction('life-action','sensory');c.clickAction('life-action','story');const s=JSON.parse(c.storage.getItem('life-and-empire-save-v6'));assert.equal(s.time.actionPoints,0);assert.equal(s.time.quarter,1);});
check('Fourth action is not possible before quarter settlement',()=>{c.clickAction('life-action','bond');const s=JSON.parse(c.storage.getItem('life-and-empire-save-v6'));assert.equal(s.time.actionPoints,0);});
check('End-quarter settlement advances quarter and refills decisions',()=>{c.clickAction('end-quarter');c.clickAction('confirm-end-quarter');const s=JSON.parse(c.storage.getItem('life-and-empire-save-v6'));assert.equal(s.time.quarter,2);assert.equal(s.time.actionPoints,3);});
check('Rest restores energy without advancing time',()=>{const before=JSON.parse(c.storage.getItem('life-and-empire-save-v6'));c.clickAction('life-action','sleep');const after=JSON.parse(c.storage.getItem('life-and-empire-save-v6'));assert.equal(after.time.quarter,before.time.quarter);assert(after.player.energy>=before.player.energy);});
// Advance to age six and verify schooling.
for(let i=0;i<23;i++){c.clickAction('end-quarter');c.clickAction('confirm-end-quarter');}
let childState=JSON.parse(c.storage.getItem('life-and-empire-save-v6'));
check('Birth-to-school timeline reaches age six after 24 quarter settlements',()=>{assert.equal(childState.player.age,6);assert.equal(childState.school.grade,1);assert.equal(childState.school.enrolled,true);});
check('School and study actions update attendance, effort and smarts',()=>{const before=JSON.parse(c.storage.getItem('life-and-empire-save-v6'));c.clickAction('life-action','school');c.clickAction('life-action','study');const after=JSON.parse(c.storage.getItem('life-and-empire-save-v6'));assert.equal(after.school.attendance,before.school.attendance+1);assert(after.school.effort>=before.school.effort+2);assert(after.player.smarts>before.player.smarts);});
// Adult save fixture for markets, loans, business, relocation, real estate and relationships.
let adultSeed=JSON.parse(c.storage.getItem('life-and-empire-save-v6'));
adultSeed.player.age=25;adultSeed.player.background='middle';adultSeed.player.energy=100;adultSeed.player.stress=10;adultSeed.school.completed=true;adultSeed.school.marks=85;adultSeed.school.graduation='Passed';adultSeed.career.education=3;adultSeed.career.skills={tech:90,business:90,finance:90,communication:90,science:70,arts:70};adultSeed.wallet.INR=5000000;adultSeed.bank.current=1000000;adultSeed.bank.savings=500000;adultSeed.time.actionPoints=3;adultSeed.time.quarter=1;adultSeed.time.year=2044;adultSeed.time.actionsUsed=0;adultSeed.player.city='Hyderabad';adultSeed.businesses=[];adultSeed.properties=[];adultSeed.player.partner={name:'Meera',age:25,affection:85,trust:85};adultSeed.player.maritalStatus='Married';adultSeed.player.children=[];
let a=makeContext({'life-and-empire-save-v6':JSON.stringify(adultSeed)});
check('Adult save loads and displays adult options',()=>{assert(a.app.innerHTML.includes('LIFE & EMPIRE')||a.app.innerHTML.includes('Building your future'));assert(a.app.innerHTML.includes('Temporary work'));assert(a.app.innerHTML.includes('Building your future'));});
check('Fixed deposit consumes one quarterly decision and is recorded',()=>{a.clickAction('banking');a.submit('bank-fd-form',{amount:'25000',term:'4'});const s=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));assert.equal(s.bank.fixedDeposits.length,1);assert.equal(s.time.actionPoints,2);});
check('Personal loan has a valid term and consumes a decision',()=>{a.submit('bank-loan-form',{amount:'50000',term:'4'});const s=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));assert.equal(s.bank.loans.length,1);assert.equal(s.bank.loans[0].remaining,4);assert.equal(s.time.actionPoints,1);});
check('Market share purchase consumes a decision and tracks shares',()=>{a.clickAction('trade','DMT');a.submit('stock-buy-form',{id:'DMT',qty:'10'});const s=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));assert.equal(s.portfolio.stocks.DMT,10);assert.equal(s.time.actionPoints,0);});
check('Quarter settlement accrues interest and advances loan schedule safely',()=>{a.clickAction('end-quarter');a.clickAction('confirm-end-quarter');const s=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));assert(s.bank.loans[0].balance>50000);assert.equal(s.bank.loans[0].remaining,4);assert.equal(s.time.actionPoints,3);});
check('Next quarter loan repayment reduces loan balance and scheduled term',()=>{const before=JSON.parse(a.storage.getItem('life-and-empire-save-v6')).bank.loans[0].balance;a.clickAction('end-quarter');a.clickAction('confirm-end-quarter');const s=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));assert(s.bank.loans[0].balance<before);assert.equal(s.bank.loans[0].remaining,3);});
check('Mutual fund purchase is recorded and has NAV valuation',()=>{a.clickAction('invest-fund');a.submit('fund-buy-form',{amount:'10000'});const s=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));assert(s.portfolio.fundUnits>0);assert(s.portfolio.fundValue>0);});
check('Digital gold purchase is recorded by grams and current value',()=>{a.clickAction('invest-gold');a.submit('gold-buy-form',{amount:'10000'});const s=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));assert(s.portfolio.goldGrams>0);assert(s.portfolio.goldValue>0);});
check('Currency exchange applies the spread and uses one decision',()=>{const pre=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));a.clickAction('exchange');a.submit('exchange-form',{from:'INR',to:'USD',amount:'8400'});const s=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));assert(s.wallet.USD>0);assert(s.wallet.INR<pre.wallet.INR);});
check('Business startup costs include setup and working capital',()=>{a.clickAction('end-quarter');a.clickAction('confirm-end-quarter');a.clickTab('business');a.clickAction('new-business');a.clickAction('found-business','farm');const s=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));assert.equal(s.businesses.length,1);assert.equal(s.businesses[0].cash,65000);assert.equal(s.businesses[0].employees,2);});
check('Business market supports separate mill and grocery firms',()=>{a.clickAction('end-quarter');a.clickAction('confirm-end-quarter');a.clickAction('new-business');a.clickAction('found-business','mill');a.clickAction('end-quarter');a.clickAction('confirm-end-quarter');a.clickAction('new-business');a.clickAction('found-business','grocery');const s=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));assert.deepEqual(s.businesses.map(x=>x.type),['farm','mill','grocery']);});
check('Quarterly integrated production settles with finite P&L and inventory',()=>{a.clickAction('end-quarter');a.clickAction('confirm-end-quarter');const s=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));for(const b of s.businesses){assert(Number.isFinite(b.cash));assert(Number.isFinite(b.profit));assert(Number.isFinite(b.revenue));assert(Number.isFinite(b.costs));assert(Number.isFinite(b.inventory));assert(b.inventory>=0);assert(b.history.length>0);}assert(s.businesses.some(b=>b.lastUnits>0));});
check('Company price/hire/quality actions are decision-limited',()=>{const s0=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));a.clickAction('manage-business',s0.businesses[0].id);a.clickAction('hire',s0.businesses[0].id);const s=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));assert.equal(s.businesses[0].employees,3);assert.equal(s.time.actionPoints,2);});
check('Property purchase consumes a slot and creates rental asset',()=>{a.clickAction('property-market');a.clickAction('buy-property','studio');const s=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));assert.equal(s.properties.length,1);assert.equal(s.time.actionPoints,1);});
check('Relocation consumes a slot but leaves company registered cities unchanged',()=>{const before=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));a.clickAction('move-city','Mumbai');const s=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));assert.equal(s.player.city,'Mumbai');assert.equal(s.businesses[0].city,before.businesses[0].city);});
check('Married character can have a child with a valid financial/action cost',()=>{a.clickAction('end-quarter');a.clickAction('confirm-end-quarter');const before=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));a.clickAction('have-child');const s=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));assert.equal(s.player.children.length,1);assert.equal(s.player.children[0].age,0);assert(s.time.actionPoints<before.time.actionPoints);});
check('Save validation rejects malformed imported structure',()=>{const raw=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));raw.player.age=-4;const c2=makeContext({'life-and-empire-save-v6':JSON.stringify(raw)});assert(c2.app.innerHTML.includes('Begin at birth'));});
check('Export/save controls and Android install guide are reachable',()=>{a.clickAction('settings');let modal=a.app.children.find(x=>x.className==='modal-backdrop');assert(modal&&modal.innerHTML.includes('Export save'));assert(modal.innerHTML.includes('Install on Android'));a.clickAction('install-guide');assert(a.app.children.some(x=>x.className==='modal-backdrop'));});

check('Postgraduate qualification route supports senior career eligibility',()=>{
  let x=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));
  x.career.education=2;x.career.college=null;x.career.collegeProgress=0;x.career.collegeTarget=12;x.time.actionPoints=3;x.player.energy=100;
  a.storage.setItem('life-and-empire-save-v6',JSON.stringify(x));
  // Reinitialize the app context from its durable save to test the real load route.
  const b=makeContext({'life-and-empire-save-v6':JSON.stringify(x)});
  b.clickAction('postgrad');b.submit('postgrad-form',{course:'Master of Business Administration'});
  let y=JSON.parse(b.storage.getItem('life-and-empire-save-v6'));
  assert.equal(y.career.collegeTarget,8);assert.equal(y.career.collegeLevel,3);assert.equal(y.time.actionPoints,2);
  y.career.collegeProgress=8;y.time.actionPoints=3;b.storage.setItem('life-and-empire-save-v6',JSON.stringify(y));
  const z=makeContext({'life-and-empire-save-v6':JSON.stringify(y)});z.clickTab('career');z.clickAction('finish-college');
  const done=JSON.parse(z.storage.getItem('life-and-empire-save-v6'));
  assert.equal(done.career.education,3);assert.equal(done.career.college,null);
});
check('Thirty-quarter economic stress run preserves numeric and balance invariants',()=>{
  for(let i=0;i<30;i++){
    a.clickAction('end-quarter');a.clickAction('confirm-end-quarter');
    const s=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));
    assert(Number.isFinite(s.market.index)&&s.market.index>0);
    assert(Number.isFinite(s.market.priceIndex)&&s.market.priceIndex>0);
    assert(Number.isFinite(s.market.inflation));
    assert(Number.isFinite(s.player.energy)&&s.player.energy>=0&&s.player.energy<=100);
    assert(Number.isFinite(s.player.stress)&&s.player.stress>=0&&s.player.stress<=100);
    assert(Number.isFinite(s.bank.savings)&&s.bank.savings>=0);
    assert(s.bank.loans.every(l=>Number.isFinite(l.balance)&&l.balance>=0));
    assert(s.businesses.every(b=>Number.isFinite(b.cash)&&b.cash>=0&&Number.isFinite(b.profit)&&Number.isFinite(b.inventory)&&b.inventory>=0));
  }
  const s=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));
  assert.equal(s.time.actionPoints,3);
  assert(s.stats.quarters>=30);
});

// v0.4 economic report, market filters and owner-bank balance sheet tests.
check('Economic view separates earned income, expenses, asset purchases and financing',()=>{
  a.clickTab('economy');
  assert(a.app.innerHTML.includes('Money in · Money out'));
  assert(a.app.innerHTML.includes('Asset purchases / investment'));
  assert(a.app.innerHTML.includes('Financing / loans'));
});
check('Market view provides sort filters and per-security trade entry',()=>{
  a.clickTab('market');
  assert(a.app.innerHTML.includes('Movers'));
  assert(a.app.innerHTML.includes('Dividend'));
  assert(a.app.innerHTML.includes('Trade'));
  a.clickAction('market-sort','dividend');
  assert(a.app.innerHTML.includes('data-id="dividend" class="active"'));
});
let bankSeed=JSON.parse(a.storage.getItem('life-and-empire-save-v6'));
bankSeed.player.age=30;bankSeed.wallet.INR=22000000;bankSeed.bank.current=1000000;bankSeed.bank.savings=500000;bankSeed.time.actionPoints=3;bankSeed.time.actionsUsed=0;bankSeed.time.quarter=1;bankSeed.player.energy=100;
let ob=makeContext({'life-and-empire-save-v6':JSON.stringify(bankSeed)});
check('Player can establish a bank with paid-up capital',()=>{
  ob.clickTab('bank');ob.clickAction('establish-bank');
  ob.submit('establish-bank-form',{name:'Blackstone Bank',city:'Hyderabad'});
  const s=JSON.parse(ob.storage.getItem('life-and-empire-save-v6'));
  assert.equal(s.bank.ownedBanks.length,1);assert.equal(s.bank.ownedBanks[0].capital,5000000);assert.equal(s.bank.ownedBanks[0].cash,5000000);assert.equal(s.bank.ownedBanks[0].name,'Blackstone Bank');
});
check('Owner bank lends cash and records personal liability plus bank asset',()=>{
  const before=JSON.parse(ob.storage.getItem('life-and-empire-save-v6'));const id=before.bank.ownedBanks[0].id;const cash=before.bank.ownedBanks[0].cash;
  ob.clickAction('manage-owned-bank',id);ob.submit('own-bank-loan-form',{bankId:id,amount:'500000',term:'8'});
  const s=JSON.parse(ob.storage.getItem('life-and-empire-save-v6'));
  assert.equal(s.bank.ownedBanks[0].playerLoans.length,1);assert.equal(s.bank.ownedBanks[0].playerLoans[0].balance,500000);assert.equal(s.bank.ownedBanks[0].cash,cash-500000);assert(s.economy.quarter.financing>=500000);
});
check('Deposits in the owned bank are reflected as player assets and bank liabilities',()=>{
  const before=JSON.parse(ob.storage.getItem('life-and-empire-save-v6'));const id=before.bank.ownedBanks[0].id;const cash=before.bank.ownedBanks[0].cash;const personal=before.bank.ownedBanks[0].playerDeposits;
  ob.clickAction('manage-owned-bank',id);ob.submit('own-bank-deposit-form',{bankId:id,amount:'125000'});
  const s=JSON.parse(ob.storage.getItem('life-and-empire-save-v6'));
  assert.equal(s.bank.ownedBanks[0].playerDeposits,personal+125000);assert.equal(s.bank.ownedBanks[0].deposits,125000);assert.equal(s.bank.ownedBanks[0].cash,cash+125000);
  ob.clickAction('end-quarter');ob.clickAction('confirm-end-quarter');
});
check('Owned-bank deposit-rate setting accepts percentage input and uses a decision',()=>{
  const id=JSON.parse(ob.storage.getItem('life-and-empire-save-v6')).bank.ownedBanks[0].id;
  ob.clickAction('manage-owned-bank',id);ob.submit('own-bank-deposit-rate-form',{bankId:id,rate:'4.5'});
  const s=JSON.parse(ob.storage.getItem('life-and-empire-save-v6'));
  assert.equal(s.bank.ownedBanks[0].depositRate,.045);assert.equal(s.time.actionPoints,2);
});
check('Bank settlement keeps liquidity, deposit interest and loan balances valid',()=>{
  ob.clickAction('end-quarter');ob.clickAction('confirm-end-quarter');const s=JSON.parse(ob.storage.getItem('life-and-empire-save-v6'));
  const bank=s.bank.ownedBanks[0];assert(bank.cash>=0);assert(bank.playerLoans.every(l=>Number.isFinite(l.balance)&&l.balance>=0));assert(Number.isFinite(bank.profit));assert(Number.isFinite(bank.deposits));assert(bank.deposits>=0);
  const assets=bank.cash+(bank.fixedAssets||0)+(bank.publicLoanBook||0)+bank.playerLoans.reduce((v,l)=>v+l.balance,0);const equity=assets-bank.deposits;assert(Number.isFinite(equity));assert(equity>0);
});
check('Owned-bank withdrawal is an internal transfer, not new income or asset-sale revenue',()=>{
  const before=JSON.parse(ob.storage.getItem('life-and-empire-save-v6'));const id=before.bank.ownedBanks[0].id;const nw=before.stats.bestNetWorth;const income=before.economy.quarter.income;const sales=before.economy.quarter.assetSales;const personal=before.bank.ownedBanks[0].playerDeposits;
  ob.clickAction('manage-owned-bank',id);ob.submit('own-bank-withdraw-form',{bankId:id,amount:'25000'});const after=JSON.parse(ob.storage.getItem('life-and-empire-save-v6'));
  assert.equal(after.bank.ownedBanks[0].playerDeposits,personal-25000);assert.equal(after.economy.quarter.income,income);assert.equal(after.economy.quarter.assetSales,sales);assert.equal(after.time.actionPoints,2);
});
check('Owner-bank lending rate is adjustable with a quarterly decision',()=>{
  const id=JSON.parse(ob.storage.getItem('life-and-empire-save-v6')).bank.ownedBanks[0].id;ob.clickAction('manage-owned-bank',id);ob.submit('own-bank-rate-form',{bankId:id,rate:'2.4'});
  const s=JSON.parse(ob.storage.getItem('life-and-empire-save-v6'));assert.equal(s.bank.ownedBanks[0].loanRate,.024);assert.equal(s.time.actionPoints,1);
});
check('Owner can make an early repayment to their bank',()=>{
  const before=JSON.parse(ob.storage.getItem('life-and-empire-save-v6'));const id=before.bank.ownedBanks[0].id;const loan=before.bank.ownedBanks[0].playerLoans[0];const balance=loan.balance;
  ob.clickAction('repay-own-bank',loan.id);ob.submit('own-bank-repay-form',{bankId:id,loanId:loan.id,amount:'100000'});const after=JSON.parse(ob.storage.getItem('life-and-empire-save-v6'));
  assert.equal(after.bank.ownedBanks[0].playerLoans[0].balance,balance-100000);assert.equal(after.time.actionPoints,0);
});
check('Owned bank can expand a branch using bank cash and capitalise the branch asset',()=>{
  ob.clickAction('end-quarter');ob.clickAction('confirm-end-quarter');const before=JSON.parse(ob.storage.getItem('life-and-empire-save-v6'));const id=before.bank.ownedBanks[0].id;const cash=before.bank.ownedBanks[0].cash;
  ob.clickAction('expand-bank',id);ob.submit('own-bank-branch-form',{bankId:id});const after=JSON.parse(ob.storage.getItem('life-and-empire-save-v6'));
  assert.equal(after.bank.ownedBanks[0].branches,2);assert.equal(after.bank.ownedBanks[0].fixedAssets,1250000);assert.equal(after.bank.ownedBanks[0].cash,cash-1250000);
});
check('Player can establish a second bank while below three-bank ownership cap',()=>{
  const s0=JSON.parse(ob.storage.getItem('life-and-empire-save-v6'));assert(s0.wallet.INR+s0.bank.current+s0.bank.savings>=8500000);
  ob.clickAction('establish-bank');ob.submit('establish-bank-form',{name:'Blackstone Finance Bank',city:'Mumbai'});const s=JSON.parse(ob.storage.getItem('life-and-empire-save-v6'));
  assert.equal(s.bank.ownedBanks.length,2);assert.equal(s.bank.ownedBanks[1].name,'Blackstone Finance Bank');
});
check('Owned-bank portfolio survives 30 quarters without invalid bank balances',()=>{
  for(let i=0;i<30;i++){ob.clickAction('end-quarter');ob.clickAction('confirm-end-quarter');const s=JSON.parse(ob.storage.getItem('life-and-empire-save-v6'));for(const bank of s.bank.ownedBanks){assert(Number.isFinite(bank.cash)&&bank.cash>=0);assert(Number.isFinite(bank.deposits)&&bank.deposits>=0);assert(Number.isFinite(bank.publicLoanBook||0)&&(bank.publicLoanBook||0)>=0);assert(bank.playerLoans.every(l=>Number.isFinite(l.balance)&&l.balance>=0));const assets=bank.cash+(bank.fixedAssets||0)+(bank.publicLoanBook||0)+bank.playerLoans.reduce((v,l)=>v+l.balance,0);assert(Number.isFinite(assets-bank.deposits));}}
  const s=JSON.parse(ob.storage.getItem('life-and-empire-save-v6'));assert.equal(s.bank.ownedBanks.length,2);assert(s.stats.quarters>=30);
});
check('v0.2 save migrates to v0.6 without losing its character',()=>{
  const old=JSON.parse(ob.storage.getItem('life-and-empire-save-v6'));old.version=2;delete old.economy;delete old.bank.ownedBanks;
  const migrated=makeContext({'life-and-empire-save-v2':JSON.stringify(old)});
  const loaded=JSON.parse(migrated.storage.getItem('life-and-empire-save-v6'));
  assert.equal(loaded.version,6);assert.equal(loaded.player.name,old.player.name);assert(loaded.economy&&Array.isArray(loaded.economy.history));assert.deepEqual(loaded.bank.ownedBanks,[]);
});
check('Fixed game frame and action dock are configured without page scrolling',()=>{
  const css=fs.readFileSync(path.join(__dirname,'..','styles.css'),'utf8');
  assert(css.includes('.game-frame{'));assert(css.includes('height:100dvh'));assert(css.includes('.action-dock{'));assert(css.includes('overflow:hidden'));assert(css.includes('--hud-h:15vh'));assert(css.includes('--dock-h:20vh'));assert(css.includes('.bank-card-grid'));
});

const passed=tests.filter(t=>t.ok).length;
console.log(JSON.stringify({passed,total:tests.length,tests},null,2));
if(passed!==tests.length) process.exit(1);
