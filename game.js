(() => {
  'use strict';

  const BUILD = '0.3.0';
  const SAVE_KEY = 'life-and-empire-save-v3';
  const LEGACY_KEY = 'life-and-empire-save-v2';
  const START_YEAR = 2026;
  const ACTIONS_PER_QUARTER = 3;
  const $ = (s, root = document) => root.querySelector(s);
  const app = $('#app');
  let game = null;
  let activeTab = 'home';
  let deferredInstallPrompt = null;
  let toastTimer = null;
  let marketSort = 'movers';

  const CURRENCIES = {
    INR: { name: 'Indian Rupee', symbol: '₹', rate: 1 },
    USD: { name: 'US Dollar', symbol: '$', rate: 84 },
    AED: { name: 'UAE Dirham', symbol: 'د.إ', rate: 22.9 },
    SGD: { name: 'Singapore Dollar', symbol: 'S$', rate: 63 },
    GBP: { name: 'British Pound', symbol: '£', rate: 107 },
    EUR: { name: 'Euro', symbol: '€', rate: 91 }
  };
  const CITIES = {
    Hyderabad: { state: 'Telangana', cost: 1.00, demand: 1.02, wage: 1.00, emoji: '🌆' },
    Bengaluru: { state: 'Karnataka', cost: 1.24, demand: 1.16, wage: 1.18, emoji: '💻' },
    Mumbai: { state: 'Maharashtra', cost: 1.48, demand: 1.30, wage: 1.30, emoji: '🌃' },
    Delhi: { state: 'Delhi NCR', cost: 1.22, demand: 1.22, wage: 1.18, emoji: '🏛️' },
    Chennai: { state: 'Tamil Nadu', cost: 1.08, demand: 1.08, wage: 1.08, emoji: '⚓' },
    Pune: { state: 'Maharashtra', cost: 1.15, demand: 1.10, wage: 1.10, emoji: '🎓' },
    Kolkata: { state: 'West Bengal', cost: .96, demand: .96, wage: .92, emoji: '🎭' },
    Jaipur: { state: 'Rajasthan', cost: .91, demand: .89, wage: .87, emoji: '🏰' },
    Ahmedabad: { state: 'Gujarat', cost: .94, demand: 1.00, wage: .93, emoji: '🏭' }
  };
  const TRAITS = {
    curious: { name: 'Curious', emoji: '🔎', desc: 'Learns faster; study actions give extra smarts.', study: 1.25 },
    disciplined: { name: 'Disciplined', emoji: '🎯', desc: 'Recovers stress faster and earns more from focused work.', recovery: 1.25, work: 1.15 },
    creative: { name: 'Creative', emoji: '🎨', desc: 'Creative and social activities give larger happiness gains.', creative: 1.3 },
    resilient: { name: 'Resilient', emoji: '🛡️', desc: 'Stress affects performance less and health recovers faster.', resilience: 1.3 },
    social: { name: 'Social', emoji: '🤝', desc: 'Builds friendships and relationships faster.', social: 1.3 },
    cautious: { name: 'Cautious', emoji: '🧭', desc: 'Gets a small advantage in financial decisions and avoids impulsive losses.', finance: 1.12 }
  };
  const BACKGROUNDS = {
    working: { label: 'Working class', funds: 480000, income: 54000, expense: 40500, school: 1200, pocket: 300, adultGrant: 35000 },
    middle: { label: 'Middle class', funds: 1800000, income: 96000, expense: 69000, school: 4200, pocket: 700, adultGrant: 85000 },
    affluent: { label: 'Affluent', funds: 8500000, income: 225000, expense: 142000, school: 12500, pocket: 1800, adultGrant: 220000 }
  };
  const JOBS = [
    { id: 'retail', title: 'Retail Associate', firm: 'Urban Retail Group', salary: 240000, education: 0, skill: 'communication', need: 8, field: 'communication' },
    { id: 'support', title: 'Customer Support Associate', firm: 'Connect Services', salary: 360000, education: 0, skill: 'communication', need: 15, field: 'communication' },
    { id: 'sales', title: 'Sales Executive', firm: 'Northstar Commerce', salary: 420000, education: 0, skill: 'business', need: 16, field: 'business' },
    { id: 'developer', title: 'Junior Software Developer', firm: 'BlueGrid Technologies', salary: 600000, education: 1, skill: 'tech', need: 22, field: 'tech' },
    { id: 'analyst', title: 'Junior Data Analyst', firm: 'MetricWorks', salary: 570000, education: 1, skill: 'finance', need: 22, field: 'finance' },
    { id: 'business_analyst', title: 'Business Analyst', firm: 'Summit Consulting', salary: 840000, education: 2, skill: 'finance', need: 35, field: 'finance' },
    { id: 'manager', title: 'Operations Manager', firm: 'Apex Industries', salary: 1080000, education: 2, skill: 'business', need: 42, field: 'business' },
    { id: 'director', title: 'Regional Director', firm: 'Meridian Holdings', salary: 1800000, education: 3, skill: 'business', need: 62, field: 'business' }
  ];
  const SECURITIES = [
    { id: 'DMT', name: 'Deccan Mobility', sector: 'Automotive', price: 248, change: 0, growth: .012, volatility: .075, dividend: .012 },
    { id: 'BGE', name: 'Bharat Grid Energy', sector: 'Energy', price: 186, change: 0, growth: .009, volatility: .045, dividend: .018 },
    { id: 'AHL', name: 'Aster Health Labs', sector: 'Healthcare', price: 412, change: 0, growth: .015, volatility: .065, dividend: .008 },
    { id: 'NFC', name: 'Narmada Consumer', sector: 'Consumer goods', price: 132, change: 0, growth: .010, volatility: .05, dividend: .014 },
    { id: 'TBF', name: 'Trident Banking & Finance', sector: 'Banking', price: 326, change: 0, growth: .013, volatility: .08, dividend: .02 },
    { id: 'SCT', name: 'Skyline Communications', sector: 'Telecom', price: 98, change: 0, growth: .008, volatility: .055, dividend: .016 },
    { id: 'MIR', name: 'Metro Infra Projects', sector: 'Infrastructure', price: 274, change: 0, growth: .014, volatility: .09, dividend: .006 },
    { id: 'QST', name: 'Quanta Software Systems', sector: 'Technology', price: 538, change: 0, growth: .019, volatility: .11, dividend: .004 }
  ];
  const BUSINESS_TYPES = [
    { id: 'farm', name: 'Paddy Farm', industry: 'Agriculture', setup: 150000, capital: 65000, output: 'Paddy', unitCost: 8, basePrice: 22, capacity: 650, demand: 720, wage: 6500, overhead: 4500, emoji: '🌾', desc: 'Grow paddy and sell to mills or the wholesale market.' },
    { id: 'mill', name: 'Rice Mill', industry: 'Manufacturing', setup: 360000, capital: 110000, input: 'Paddy', inputCost: 22, inputRatio: 2, output: 'Rice', unitCost: 8, basePrice: 58, capacity: 420, demand: 430, wage: 8500, overhead: 9000, emoji: '🏭', desc: 'Procure paddy, process rice and sell wholesale.' },
    { id: 'grocery', name: 'Grocery Store', industry: 'Retail', setup: 190000, capital: 75000, input: 'Rice', inputCost: 39, inputRatio: 1, output: 'Retail basket', unitCost: 0, basePrice: 62, capacity: 480, demand: 360, wage: 7500, overhead: 7000, emoji: '🛒', desc: 'Buy stock from suppliers and sell to households.' },
    { id: 'electronics', name: 'Electronics Workshop', industry: 'Manufacturing', setup: 520000, capital: 160000, input: 'Components', inputCost: 2350, inputRatio: 1, output: 'Devices', unitCost: 850, basePrice: 4200, capacity: 95, demand: 78, wage: 11000, overhead: 18000, emoji: '🔌', desc: 'Assemble devices using components bought from suppliers.' },
    { id: 'software', name: 'Software Studio', industry: 'Technology services', setup: 420000, capital: 135000, output: 'Software contracts', unitCost: 12500, basePrice: 38000, capacity: 12, demand: 9, wage: 14000, overhead: 16500, emoji: '💻', desc: 'Deliver software projects to business customers.' }
  ];
  const PROPERTIES = [
    { id: 'studio', name: 'Starter Studio Apartment', price: 3200000, rent: 27000, maintenance: 5500, emoji: '🏢' },
    { id: 'family', name: 'Family Apartment', price: 6200000, rent: 48000, maintenance: 9500, emoji: '🏠' },
    { id: 'shop', name: 'Commercial Shop Unit', price: 4800000, rent: 44000, maintenance: 8500, emoji: '🏬' }
  ];
  const fmt = n => '₹' + Math.round(Number(n || 0)).toLocaleString('en-IN');
  const num = (n, d = 0) => Number(n || 0).toLocaleString('en-IN', { maximumFractionDigits: d, minimumFractionDigits: 0 });
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  const clamp = (n, min = 0, max = 100) => Math.max(min, Math.min(max, Number(n) || 0));
  const trait = () => TRAITS[game.player.trait] || TRAITS.curious;
  const city = () => CITIES[game.player.city] || CITIES.Hyderabad;
  const background = () => BACKGROUNDS[game.player.background] || BACKGROUNDS.middle;
  const ageStage = age => age < 3 ? 'Infant' : age < 6 ? 'Early childhood' : age < 13 ? 'Childhood' : age < 18 ? 'Adolescence' : age < 25 ? 'Young adult' : age < 60 ? 'Adult' : age < 75 ? 'Mature adult' : 'Senior';
  const schoolGrade = age => age >= 6 && age <= 17 ? age - 5 : 0;
  const accountTotal = () => (game.wallet.INR || 0) + (game.bank.current || 0) + (game.bank.savings || 0);
  const totalInvested = () => game.portfolio.fundValue + game.portfolio.goldValue + Object.entries(game.portfolio.stocks).reduce((s,[id,q]) => s + q * (stock(id)?.price || 0), 0) + game.bank.fixedDeposits.reduce((s,fd)=>s+fd.principal+(fd.accrued||0),0);
  const stock = id => game.market.stocks.find(s => s.id === id);
  const netWorth = () => accountTotal() + totalInvested() + game.businesses.reduce((s,b)=>s+b.value,0) + game.properties.reduce((s,p)=>s+p.value,0) + game.bank.ownedBanks.reduce((v,b)=>v+(b.playerDeposits||0)+Math.max(0,b.cash+(b.fixedAssets||0)+(b.publicLoanBook||0)+b.playerLoans.reduce((z,l)=>z+l.balance,0)-b.deposits),0) - game.bank.loans.reduce((s,l)=>s+l.balance,0) - game.bank.ownedBanks.reduce((v,b)=>v+b.playerLoans.reduce((z,l)=>z+l.balance,0),0);
  const toast = msg => { let el = $('.toast'); if (el) el.remove(); el = document.createElement('div'); el.className='toast'; el.textContent=msg; document.body.appendChild(el); clearTimeout(toastTimer); toastTimer=setTimeout(()=>el.remove(),2800); };
  const log = (text, type='life') => { game.journal.unshift({ year:game.time.year, quarter:game.time.quarter, text, type }); game.journal = game.journal.slice(0,120); };
  const save = () => { try { localStorage.setItem(SAVE_KEY, JSON.stringify(game)); return true; } catch(e) { console.error(e); toast('Save failed. Export your backup and check browser storage.'); return false; } };

  function createGame(data) {
    const bg = data.background in BACKGROUNDS ? data.background : 'middle';
    const b = BACKGROUNDS[bg];
    const initialCash = bg==='working'?900:bg==='middle'?1800:6000;
    game = {
      version:3,
      player:{ name:String(data.name).trim().slice(0,28), presentation:data.presentation||'neutral', appearance:data.appearance||'classic', trait:data.trait||'curious', city:data.city in CITIES?data.city:'Hyderabad', background:bg, age:0, health:86, energy:78, stress:12, happiness:78, smarts:52+(TRAITS[data.trait]?.study?2:0), fitness:35, creativity:48, discipline:45, charisma:42, confidence:42, social:48, resilience:50, alive:true, partner:null, maritalStatus:'Single', children:[] },
      time:{year:START_YEAR,quarter:1,actionPoints:ACTIONS_PER_QUARTER,actionsUsed:0},
      family:{funds:b.funds,quarterlyIncome:b.income,quarterlyExpense:b.expense,schoolFee:b.school,closeness:bg==='working'?60:bg==='middle'?68:74,parents:[{name:'Mother',role:'Mother',age:27+Math.floor(Math.random()*7),health:82},{name:'Father',role:'Father',age:29+Math.floor(Math.random()*8),health:80}],siblings:data.sibling==='yes'?[{name:'Younger sibling',age:-2,closeness:45}]:[],support:70,educationFund:b.funds*.08},
      wallet:{INR:initialCash,USD:0,AED:0,SGD:0,GBP:0,EUR:0},
      bank:{current:0,savings:0,fixedDeposits:[],creditScore:650,loans:[],insurance:false,insuranceQuarters:0,ownedBanks:[]},
      needs:{},
      school:{grade:0,attendance:0,effort:0,marks:50,schoolName:'Local Public School',enrolled:false,completed:false,graduation:null,stream:null},
      career:{education:0,educationProgress:0,college:null,collegeProgress:0,collegeEffort:0,collegeTarget:12,collegeLevel:2,job:null,experience:0,tenure:0,performance:50,skills:{tech:3,business:3,finance:2,communication:4,science:4,arts:4}},
      relationships:{parents:68,friends:22,network:0,partner:0},
      portfolio:{stocks:{},fundValue:0,fundUnits:0,goldValue:0,goldGrams:0},
      market:{index:1000,sentiment:0,inflation:5.2,repoRate:6.5,unemployment:7.4,priceIndex:1,fundNav:100,goldPrice:7200,stocks:SECURITIES.map(s=>({...s}))},
      businesses:[],properties:[],
      economy:{quarter:{income:0,expenses:0,investments:0,debtService:0,financing:0,assetSales:0,support:0,marketChange:0},history:[]},
      household:{monthlySpending:0,insurance:false},
      journal:[{year:START_YEAR,quarter:1,text:`${data.name} was born in ${data.city}. A new life begins.`,type:'birth'}],
      stats:{totalEarned:0,totalSpent:0,actions:0,quarters:0,businessesFounded:0,careerYears:0,bestNetWorth:initialCash}
    };
    activeTab='home';
    save();
    render();
    toast(`Welcome, ${game.player.name}. Your story begins at birth.`);
  }

  function validSave(s) {
    if (!s || s.version!==3 || !s.player || !s.time || !s.bank || !s.market || !Array.isArray(s.journal)) return false;
    const p=s.player,t=s.time,b=s.bank,c=s.career,w=s.wallet,m=s.market,school=s.school,portfolio=s.portfolio;
    const finite=(v,min=-Infinity,max=Infinity)=>Number.isFinite(v)&&v>=min&&v<=max;
    if(typeof p.name!=='string'||!p.name.trim()||p.name.length>28||!(p.city in CITIES)||!(p.background in BACKGROUNDS)||!(p.trait in TRAITS)) return false;
    if(!Number.isInteger(p.age)||p.age<0||p.age>110||!['health','energy','stress','happiness','smarts','fitness','creativity','discipline','charisma','confidence','social','resilience'].every(k=>finite(p[k],0,100))) return false;
    if(!['boy','girl','neutral'].includes(p.presentation)||!['classic','athletic','creative','scholar'].includes(p.appearance)||typeof p.alive!=='boolean'||!Array.isArray(p.children)||p.children.length>4) return false;
    if(p.partner!==null&&p.partner!==undefined&&(!Number.isFinite(p.partner.affection)||!Number.isFinite(p.partner.trust)||typeof p.partner.name!=='string')) return false;
    if(!['Single','Engaged','Married'].includes(p.maritalStatus)) return false;
    if(!Number.isInteger(t.year)||t.year<START_YEAR||!Number.isInteger(t.quarter)||t.quarter<1||t.quarter>4||!Number.isInteger(t.actionPoints)||t.actionPoints<0||t.actionPoints>3||!Number.isInteger(t.actionsUsed)||t.actionsUsed<0||t.actionsUsed>3) return false;
    if(!w||!['INR','USD','AED','SGD','GBP','EUR'].every(k=>finite(w[k],0))) return false;
    if(!finite(b.current,0)||!finite(b.savings,0)||!finite(b.creditScore,300,900)||!Array.isArray(b.fixedDeposits)||!Array.isArray(b.loans)||!Array.isArray(b.ownedBanks)) return false;
    if(!b.fixedDeposits.every(fd=>typeof fd.id==='string'&&finite(fd.principal,0)&&finite(fd.rate,0,.2)&&Number.isInteger(fd.remaining)&&fd.remaining>=1&&fd.remaining<=12&&finite(fd.accrued||0,0))) return false;
    if(!b.loans.every(l=>typeof l.id==='string'&&finite(l.balance,0)&&finite(l.principal,0)&&finite(l.rate,0,.2)&&Number.isInteger(l.remaining)&&l.remaining>=0&&l.remaining<=100&&Number.isInteger(l.term)&&l.term>=1&&l.term<=100)) return false;
    if(!school||!Number.isInteger(school.grade)||school.grade<0||school.grade>12||!finite(school.attendance,0,1000)||!finite(school.effort,0,1000)||!finite(school.marks,0,100)) return false;
    if(!c||!Number.isInteger(c.education)||c.education<0||c.education>3||!c.skills||!['tech','business','finance','communication','science','arts'].every(k=>finite(c.skills[k],0,100))||!finite(c.collegeProgress||0,0,100)||!finite(c.collegeEffort||0,0,100)) return false;
    if(!portfolio||!portfolio.stocks||typeof portfolio.stocks!=='object'||!finite(portfolio.fundUnits,0)||!finite(portfolio.fundValue,0)||!finite(portfolio.goldGrams,0)||!finite(portfolio.goldValue,0)) return false;
    if(!finite(m.index,0)||!finite(m.fundNav,0)||!finite(m.goldPrice,0)||!finite(m.inflation,0,20)||!finite(m.priceIndex,0)||!Array.isArray(m.stocks)||!m.stocks.every(x=>typeof x.id==='string'&&finite(x.price,0.01))) return false;
    if(!s.family||!Array.isArray(s.family.parents)||!Array.isArray(s.family.siblings)||!finite(s.family.funds,0)||!finite(s.family.educationFund,0)||!s.relationships||!['parents','friends','network','partner'].every(k=>finite(s.relationships[k],0,100))) return false;
    if(!Array.isArray(s.businesses)||s.businesses.length>5||s.businesses.some(x=>!BUSINESS_TYPES.some(t=>t.id===x.type)||typeof x.id!=='string'||!finite(x.cash,0)||!finite(x.price,1)||!finite(x.inventory,0)||!finite(x.employees,0,30)||!finite(x.capacity,1)||!finite(x.quality,0,100)||!Array.isArray(x.history))) return false;
    if(new Set(s.businesses.map(x=>x.type)).size!==s.businesses.length) return false;
    if(!s.economy||!s.economy.quarter||!['income','expenses','investments','debtService','financing','assetSales','support','marketChange'].every(k=>Number.isFinite(s.economy.quarter[k]))||!Array.isArray(s.economy.history)) return false;
    if(b.ownedBanks.length>3||!b.ownedBanks.every(x=>typeof x.id==='string'&&finite(x.cash,0)&&finite(x.fixedAssets||0,0)&&finite(x.capital,0)&&finite(x.deposits,0)&&finite(x.playerDeposits,0)&&finite(x.publicLoanBook||0,0)&&finite(x.loanRate,.008,.04)&&finite(x.depositRate,.005,.1)&&finite(x.branches,1,20)&&finite(x.trust,0,100)&&Array.isArray(x.playerLoans)&&x.playerLoans.every(l=>typeof l.id==='string'&&finite(l.balance,0)&&finite(l.principal,0)&&finite(l.rate,.008,.04)&&Number.isInteger(l.remaining)&&l.remaining>=0&&l.remaining<=100))) return false;
    if(!Array.isArray(s.properties)||s.properties.some(x=>!PROPERTIES.some(t=>t.id===x.type)||!finite(x.value,0)||!finite(x.rent,0)||!finite(x.maintenance,0))) return false;
    if(!s.stats||!finite(s.stats.totalEarned,0)||!finite(s.stats.totalSpent,0)||!finite(s.stats.quarters,0)) return false;
    return true;
  }

  function migrateSave(s) {
    if(!s || s.version!==2) return s;
    s.version=3;
    s.bank=s.bank||{}; s.bank.ownedBanks=s.bank.ownedBanks||[];
    s.economy=s.economy||{quarter:{income:0,expenses:0,investments:0,debtService:0,financing:0,assetSales:0,support:0,marketChange:0},history:[]};
    s.economy.quarter=s.economy.quarter||{income:0,expenses:0,investments:0,debtService:0,financing:0,assetSales:0,support:0,marketChange:0};
    ['income','expenses','investments','debtService','financing','assetSales','support','marketChange'].forEach(k=>{if(!Number.isFinite(s.economy.quarter[k]))s.economy.quarter[k]=0;});
    s.economy.history=s.economy.history||[];
    return s;
  }
  function loadGame() {
    try {
      let raw=localStorage.getItem(SAVE_KEY);
      if(!raw) raw=localStorage.getItem(LEGACY_KEY);
      if(!raw) return false;
      const parsed=migrateSave(JSON.parse(raw));
      if(!validSave(parsed)) throw new Error('Save data failed validation.');
      game=parsed; save(); return true;
    } catch(e) { console.warn('Save could not be loaded:',e); return false; }
  }
  function oldSaveExists() { try { return !!localStorage.getItem(LEGACY_KEY); } catch(_) { return false; } }
  function spend(amount, classification='expense') {
    amount=Math.ceil(Number(amount)); if(!Number.isFinite(amount)||amount<0||accountTotal()<amount) return false;
    let left=amount;
    const fromWallet=Math.min(game.wallet.INR,left); game.wallet.INR-=fromWallet; left-=fromWallet;
    const fromCurrent=Math.min(game.bank.current,left); game.bank.current-=fromCurrent; left-=fromCurrent;
    const fromSavings=Math.min(game.bank.savings,left); game.bank.savings-=fromSavings; left-=fromSavings;
    game.stats.totalSpent+=amount;
    if(game.economy&&game.economy.quarter) {
      if(classification==='investment') game.economy.quarter.investments+=amount;
      else if(classification==='debt') game.economy.quarter.debtService+=amount;
      else game.economy.quarter.expenses+=amount;
    }
    return true;
  }
  function credit(amount, account='current', classification='income') {
    amount=Math.round(Number(amount)); if(!Number.isFinite(amount)||amount<=0) return;
    if(account==='wallet') game.wallet.INR+=amount; else if(account==='savings') game.bank.savings+=amount; else game.bank.current+=amount;
    game.stats.totalEarned+=amount;
    if(game.economy&&game.economy.quarter) {
      if(classification==='financing') game.economy.quarter.financing+=amount;
      else if(classification==='assetSale') game.economy.quarter.assetSales+=amount;
      else if(classification==='support') game.economy.quarter.support+=amount;
      else game.economy.quarter.income+=amount;
    }
  }
  function transferOut(amount) {
    amount=Math.ceil(Number(amount)); if(!Number.isFinite(amount)||amount<=0||accountTotal()<amount) return false;
    let left=amount; const w=Math.min(game.wallet.INR,left);game.wallet.INR-=w;left-=w;
    const c=Math.min(game.bank.current,left);game.bank.current-=c;left-=c;
    const sv=Math.min(game.bank.savings,left);game.bank.savings-=sv;left-=sv;
    return true;
  }
  function quarterMarketValue() {
    return totalInvested() + game.businesses.reduce((v,b)=>v+(Number(b.value)||0),0) + game.properties.reduce((v,p)=>v+(Number(p.value)||0),0);
  }
  function consumeAction(cost=1, energy=0, stress=0) {
    if(game.time.actionPoints<cost) { toast('No decision slots left this quarter. End the quarter to continue.'); return false; }
    if(game.player.energy<energy) { toast('Your energy is too low. Rest or sleep first.'); return false; }
    game.time.actionPoints-=cost; game.time.actionsUsed+=cost; game.stats.actions+=cost;
    game.player.energy=clamp(game.player.energy-energy);
    game.player.stress=clamp(game.player.stress+stress/(trait().resilience||1));
    return true;
  }
  function skillUp(key, amount) { if(game.career.skills[key]===undefined) game.career.skills[key]=0; game.career.skills[key]=clamp(game.career.skills[key]+amount); }
  function canAdult() { return game.player.age>=18; }
  function relationshipUp(key,amount) { game.relationships[key]=clamp((game.relationships[key]||0)+amount); }

  function actionOptions() {
    const a=game.player.age;
    if(a<3) return [
      ['bond','🤱','Bond with family','Build attachment and security',5,0],
      ['sensory','🧸','Sensory play','Explore sounds, colours and movement',8,1],
      ['sleep','🌙','Sleep routine','Recover energy and support development',0,-8],
      ['checkup','🩺','Health check','Protect early health',3,1],
      ['story','📖','Listen to stories','Support language and smarts',5,0]
    ];
    if(a<6) return [
      ['play','🧩','Free play','Develop creativity and happiness',9,1],
      ['read','📚','Read together','Build language and smarts',7,1],
      ['social-child','🛝','Play with children','Build social confidence',8,2],
      ['chores','🧹','Simple responsibilities','Build discipline',5,2],
      ['sleep','🌙','Rest and sleep','Restore energy',0,-8],
      ['checkup','🩺','Health check','Protect health',3,1]
    ];
    if(a<13) return [
      ['school','🏫','Attend school','Improve attendance and academic progress',9,2],
      ['study','✏️','Study and homework','Improve smarts and school effort',13,3],
      ['sport','⚽','Play sports','Build fitness and teamwork',12,1],
      ['friends','🧑‍🤝‍🧑','Spend time with friends','Strengthen friendships',8,1],
      ['hobby','🎨','Develop a hobby','Grow creativity and confidence',8,1],
      ['family','🏠','Family time','Improve family bonds and happiness',4,-1],
      ['rest','🛌','Rest','Recover energy and reduce stress',0,-9]
    ];
    if(a<18) return [
      ['school','🏫','Attend school','Attendance and exam preparation',10,3],
      ['study','📖','Prepare for exams','Improve marks and intelligence',15,4],
      ['sport','🏃','Training / sports','Fitness, discipline and social wellbeing',13,1],
      ['club','🎭','Join a club','Grow communication and network',9,2],
      ['skill','💻','Learn a practical skill','Build career-ready skills',14,3],
      ['friends','🫂','Meet friends','Maintain your social life',8,1],
      ['family','🏠','Family time','Maintain family relationships',4,-1],
      ['rest','🛌','Rest','Recover energy and lower stress',0,-9]
    ];
    return [
      ['work','💼',game.career.job?'Work this quarter':'Temporary work','Income, experience and career performance',18,5],
      ['study','🎓','Study / upskill','Increase intelligence and a chosen skill',14,3],
      ['exercise','🏋️','Exercise','Health, fitness and mood',13,0],
      ['rest','🛌','Rest and recover','Restore energy and reduce stress',0,-10],
      ['family','🏠','Family time','Maintain family relationships',5,-2],
      ['friends','🍜','Socialise','Friendship and happiness',8,1],
      ['network','🤝','Professional networking','Build business skills and contacts',9,2],
      ['date','❤️','Meet / spend time with partner','Develop a romantic relationship',10,2],
      ['freelance','🧑‍💻','Freelance project','Earn project income and skills',20,5],
      ['volunteer','🌱','Volunteer','Build purpose, empathy and reputation',8,-1]
    ];
  }

  function perform(action, extra={}) {
    const p=game.player, age=p.age;
    const meta=actionOptions().find(x=>x[0]===action);
    if(!meta) return toast('That action is not available at this life stage.');
    if(action==='checkup'&&accountTotal()<900) return toast('Your family needs ₹900 available for a check-up.');
    if(!consumeAction(1,meta[4],meta[5])) return;
    let message='';
    switch(action) {
      case 'bond': p.happiness=clamp(p.happiness+5); game.family.closeness=clamp(game.family.closeness+5); game.relationships.parents=clamp(game.relationships.parents+5); p.resilience=clamp(p.resilience+1); message='You spent calm, attentive time with your parents. Your sense of security grew.'; break;
      case 'sensory': p.creativity=clamp(p.creativity+3*(trait().creative||1)); p.smarts=clamp(p.smarts+1); p.happiness=clamp(p.happiness+4); message='You explored toys, sounds and textures. Curiosity and coordination developed.'; break;
      case 'sleep': p.energy=clamp(p.energy+38); p.stress=clamp(p.stress-8); p.health=clamp(p.health+2); message='A consistent sleep routine restored energy and supported development.'; break;
      case 'checkup': if(accountTotal()<900) return toast('Your family needs ₹900 available for a check-up.'); spend(900); p.health=clamp(p.health+4); p.stress=clamp(p.stress-1); message='A routine health check helped keep you well.'; break;
      case 'story': p.smarts=clamp(p.smarts+2); p.creativity=clamp(p.creativity+1); p.happiness=clamp(p.happiness+2); message='Story time strengthened language, imagination and family bonding.'; break;
      case 'play': p.happiness=clamp(p.happiness+6); p.creativity=clamp(p.creativity+3*(trait().creative||1)); p.fitness=clamp(p.fitness+1); message='You learned through play and developed imagination.'; break;
      case 'read': p.smarts=clamp(p.smarts+3*(trait().study||1)); p.confidence=clamp(p.confidence+1); p.happiness=clamp(p.happiness+1); message='Reading improved language and understanding.'; break;
      case 'social-child': relationshipUp('friends',5*(trait().social||1)); p.social=clamp(p.social+3); p.happiness=clamp(p.happiness+4); message='You played with other children and practised sharing and cooperation.'; break;
      case 'chores': p.discipline=clamp(p.discipline+3); p.confidence=clamp(p.confidence+1); message='You helped at home and built responsibility.'; break;
      case 'school':
        if(age<6) return toast('School starts at age six.');
        game.school.enrolled=true; game.school.attendance+=1; game.school.effort+=1;
        p.smarts=clamp(p.smarts+1); skillUp('communication',1); p.discipline=clamp(p.discipline+1);
        message=`You attended ${game.school.schoolName}. Attendance and learning progress improved.`; break;
      case 'study': {
        if(age>=18 && game.career.college) { game.career.collegeEffort=(game.career.collegeEffort||0)+1; p.smarts=clamp(p.smarts+2*(trait().study||1)); skillUp(extra.skill||'tech',3); p.stress=clamp(p.stress+2); message=`You studied ${skillName(extra.skill||'tech')} for your ${game.career.college} course.`; }
        else if(age>=18) { p.smarts=clamp(p.smarts+2*(trait().study||1)); skillUp(extra.skill||'tech',3); message=`You practised ${skillName(extra.skill||'tech')} and improved your professional capability.`; }
        else { game.school.effort+=2; p.smarts=clamp(p.smarts+3*(trait().study||1)); p.discipline=clamp(p.discipline+2); p.stress=clamp(p.stress+2); message='Focused study improved your understanding and exam preparation.'; }
        break;
      }
      case 'sport': case 'exercise': p.fitness=clamp(p.fitness+4); p.health=clamp(p.health+2); p.happiness=clamp(p.happiness+2); p.stress=clamp(p.stress-3); p.discipline=clamp(p.discipline+1); message='Physical training improved fitness, health and mood.'; break;
      case 'friends': relationshipUp('friends',7*(trait().social||1)); p.social=clamp(p.social+3); p.happiness=clamp(p.happiness+4); p.stress=clamp(p.stress-1); message='You spent time with friends and strengthened your social support.'; break;
      case 'hobby': p.creativity=clamp(p.creativity+4*(trait().creative||1)); p.confidence=clamp(p.confidence+2); p.happiness=clamp(p.happiness+3); message='You practised a hobby and developed creative confidence.'; break;
      case 'family': game.family.closeness=clamp(game.family.closeness+5); relationshipUp('parents',5); p.happiness=clamp(p.happiness+3); p.stress=clamp(p.stress-2); message='You made time for family and strengthened those relationships.'; break;
      case 'rest': p.energy=clamp(p.energy+34); p.stress=clamp(p.stress-10*(trait().recovery||1)); p.health=clamp(p.health+2); p.happiness=clamp(p.happiness+2); message='You rested, recovered energy and reduced stress.'; break;
      case 'club': skillUp('communication',2); p.charisma=clamp(p.charisma+2); p.confidence=clamp(p.confidence+2); relationshipUp('friends',2); message='Your club activity improved communication, confidence and social connections.'; break;
      case 'skill': skillUp(extra.skill||'tech',4); p.smarts=clamp(p.smarts+1); p.confidence=clamp(p.confidence+1); message=`You developed your ${skillName(extra.skill||'tech')} skills.`; break;
      case 'work':
        if(game.career.job) { const workQuality=clamp(1+(p.energy-50)/220-p.stress/420,.65,1.2); game.career.experience+=1; game.career.performance=clamp(game.career.performance+4*(trait().work||1)*workQuality); skillUp(game.career.job.field||'business',2*(trait().work||1)); p.confidence=clamp(p.confidence+1); p.stress=clamp(p.stress+2); message=`You completed a productive work period at ${game.career.job.firm}.`; }
        else { credit(6500,'current'); skillUp('communication',2); skillUp('business',1); p.stress=clamp(p.stress+2); message='You completed temporary work and earned ₹6,500.'; }
        break;
      case 'network': relationshipUp('network',7); p.charisma=clamp(p.charisma+2); skillUp('business',2); p.confidence=clamp(p.confidence+1); message='You expanded your professional network and commercial knowledge.'; break;
      case 'date':
        if(!p.partner) { p.partner={name:randomName(),affection:42+(trait().social?4:0),trust:40+(trait().social?3:0),age:age}; game.relationships.partner=42; message=`You met ${p.partner.name}. A new relationship may develop over time.`; }
        else { p.partner.affection=clamp(p.partner.affection+8*(trait().social||1)); p.partner.trust=clamp(p.partner.trust+5*(trait().social||1)); game.relationships.partner=p.partner.affection; p.happiness=clamp(p.happiness+4); message=`You spent meaningful time with ${p.partner.name}.`; }
        break;
      case 'freelance': credit(12000,'current'); skillUp('tech',1); skillUp('business',1); p.stress=clamp(p.stress+4); message='You delivered a freelance project and earned ₹12,000.'; break;
      case 'volunteer': p.happiness=clamp(p.happiness+3); p.confidence=clamp(p.confidence+2); p.resilience=clamp(p.resilience+1); message='You volunteered and built a stronger sense of purpose.'; break;
      default: return;
    }
    log(message); save(); render();
  }
  function randomName() { return ['Aarav','Ananya','Ishaan','Meera','Kabir','Aadhya','Vihaan','Diya','Arjun','Saanvi'][Math.floor(Math.random()*10)]; }
  function skillName(key) { return ({tech:'technology',business:'business',finance:'finance',communication:'communication',science:'science',arts:'arts'})[key]||key; }

  function ownBankAvailableLoan(bank) {
    const reserve=Math.max(0,bank.deposits*0.18);
    // Outstanding owner loans have already left the cash vault; subtracting them again would double-count the liquidity use.
    return Math.max(0,Math.floor(bank.cash-reserve-1500000));
  }
  function ownBankAction(action, amount, extra={}) {
    const bank=game.bank.ownedBanks.find(x=>x.id===(extra.bankId||game.bank.ownedBanks[0]?.id));
    if(!bank) return toast('You do not own a bank yet. Establish one first.');
    amount=Math.round(Number(amount));
    if(!Number.isFinite(amount)||(amount<=0&&!['rate','deposit-rate'].includes(action))) return toast('Enter a valid amount.');
    if(action==='deposit') {
      if(accountTotal()<amount) return toast('Insufficient personal cash to deposit.');
      if(!consumeAction(1,1,1)) return;
      if(!transferOut(amount)) return toast('Insufficient personal cash to deposit.');
      bank.cash+=amount;bank.deposits+=amount;bank.playerDeposits+=amount;
      log(`Deposited ${fmt(amount)} into ${bank.name}. Your deposit is a bank liability and personal asset.`, 'bank');
    } else if(action==='withdraw') {
      if(amount>bank.playerDeposits||amount>bank.cash) return toast('The bank does not have enough withdrawable liquidity.');
      if(!consumeAction(1,1,1)) return;
      bank.cash-=amount;bank.deposits-=amount;bank.playerDeposits-=amount;game.bank.current+=amount;
      log(`Withdrew ${fmt(amount)} from ${bank.name}.`, 'bank');
    } else if(action==='loan') {
      if(!canAdult()) return toast('Bank loans unlock at age 18.');
      const limit=ownBankAvailableLoan(bank);
      if(amount>limit) return toast(`Your bank can lend up to ${fmt(limit)} now, after its liquidity reserve.`);
      const term=Number(extra.term||8);if(![4,8,12,16].includes(term))return toast('Choose a valid loan term.');
      if(!consumeAction(1,2,2))return;
      bank.cash-=amount;
      const loan={id:`obloan-${Date.now()}-${Math.random().toString(36).slice(2,5)}`,principal:amount,balance:amount,rate:bank.loanRate,term,remaining:term,createdAt:game.time.year*4+game.time.quarter};
      bank.playerLoans.push(loan);credit(amount,'current','financing');
      log(`You borrowed ${fmt(amount)} from your own ${bank.name} at ${(loan.rate*100).toFixed(2)}% per quarter. The loan is recorded as a personal liability and a bank asset.`, 'bank');
    } else if(action==='repay') {
      const loan=bank.playerLoans.find(x=>x.id===extra.loanId);if(!loan)return toast('Owned-bank loan not found.');
      amount=Math.min(amount,loan.balance);if(amount<1||accountTotal()<amount)return toast('Insufficient personal funds for repayment.');
      if(!consumeAction(1,1,1))return;
      spend(amount,'debt');bank.cash+=amount;loan.balance=Math.max(0,loan.balance-amount);
      if(loan.balance<1)bank.playerLoans=bank.playerLoans.filter(x=>x.id!==loan.id);
      log(`Repaid ${fmt(amount)} to ${bank.name}. The payment reduces personal debt and returns cash to your bank.`, 'bank');
    } else if(action==='rate') {
      const rate=Number(extra.rate);if(!Number.isFinite(rate)||rate<.008||rate>.04)return toast('Set a quarterly loan rate between 0.8% and 4%.');
      if(!consumeAction(1,1,1))return;bank.loanRate=rate;
      log(`Changed ${bank.name}'s quarterly lending rate to ${(rate*100).toFixed(2)}%.`, 'bank');
    } else if(action==='deposit-rate') {
      const rate=Number(extra.rate);if(!Number.isFinite(rate)||rate<.005||rate>.10)return toast('Set an annual deposit rate between 0.5% and 10%.');
      if(!consumeAction(1,1,1))return;bank.depositRate=rate;
      log(`Changed ${bank.name}'s annual deposit rate to ${(rate*100).toFixed(2)}%.`, 'bank');
    } else if(action==='branch') {
      const cost=1250000;if(bank.branches>=20)return toast('This bank has reached the branch limit.');if(bank.cash<cost)return toast(`The bank needs ${fmt(cost)} available vault cash.`);if(!consumeAction(1,3,2))return;bank.cash-=cost;bank.fixedAssets=(bank.fixedAssets||0)+cost;bank.branches++;bank.trust=clamp(bank.trust+2);log(`${bank.name} opened branch ${bank.branches} in ${bank.city}. Customer reach increased, with higher operating costs.`, 'bank');
    }
    save();render();toast('Owned-bank transaction completed.');
  }

  function bankAction(action, amount, extra={}) {
    amount=Math.round(Number(amount));
    if(!Number.isFinite(amount)||amount<=0) return toast('Enter a valid amount greater than zero.');
    const administrative=action==='deposit'||action==='withdraw';
    if(!administrative && !canAdult()) return toast('Credit products and fixed deposits unlock at age 18. Pocket and savings transfers remain available.');
    if(action==='deposit') {
      const depositable=game.wallet.INR+game.bank.current;
      if(amount>depositable) return toast('A deposit can only transfer pocket cash or current-account funds into savings.');
      let left=amount;const fromWallet=Math.min(game.wallet.INR,left);game.wallet.INR-=fromWallet;left-=fromWallet;game.bank.current-=left;game.bank.savings+=amount;
      log(`Transferred ${fmt(amount)} into your savings account.`, 'bank');
    } else if(action==='withdraw') {
      if(game.bank.savings<amount) return toast('Insufficient savings balance.');
      game.bank.savings-=amount; game.bank.current+=amount; log(`Transferred ${fmt(amount)} from savings to current account.`, 'bank');
    } else if(action==='fd') {
      const term=Number(extra.term||4); if(![4,8,12].includes(term)) return toast('Choose a valid deposit term.');
      if(accountTotal()<amount) return toast('Insufficient funds to open this deposit.');
      if(!consumeAction(1,2,1)) return;
      const rate=term===4?.062:term===8?.068:.058;
      spend(amount,'investment');
      game.bank.fixedDeposits.push({id:`fd-${Date.now()}-${Math.random().toString(36).slice(2,5)}`,principal:amount,rate,term,remaining:term,accrued:0,opened:`${game.time.year}-Q${game.time.quarter}`});
      log(`Opened a ${term}-quarter fixed deposit for ${fmt(amount)} at ${(rate*100).toFixed(1)}% annual interest.`, 'bank');
    } else if(action==='loan') {
      const max=Math.max(0,Math.min(500000,Math.round(game.bank.creditScore*450+(game.career.job?.salary||0)*.18)));
      if(amount>max) return toast(`Your current simulated loan limit is ${fmt(max)}.`);
      const term=Number(extra.term||8); if(![4,8,12].includes(term)) return toast('Choose a valid loan term.');
      if(!consumeAction(1,2,2)) return;
      game.bank.loans.push({id:`loan-${Date.now()}-${Math.random().toString(36).slice(2,5)}`,principal:amount,balance:amount,rate:.024,remaining:term,term,createdAt:game.time.year*4+game.time.quarter});
      game.bank.creditScore=clamp(game.bank.creditScore-4,300,900); credit(amount,'current','financing'); log(`You took a ${fmt(amount)} personal loan at 2.4% quarterly interest over ${term} quarters. Scheduled repayments begin at quarter settlement.`, 'bank');
    } else if(action==='repay-loan') {
      const loan=game.bank.loans.find(l=>l.id===extra.id); if(!loan) return toast('Loan not found.');
      amount=Math.min(amount,loan.balance); if(amount<=0||accountTotal()<amount) return toast('Insufficient funds for repayment.');
      if(!consumeAction(1,2,1)) return;
      spend(amount,'debt'); loan.balance=Math.max(0,loan.balance-amount);
      if(loan.balance<1) game.bank.loans=game.bank.loans.filter(l=>l.id!==loan.id);
      game.bank.creditScore=clamp(game.bank.creditScore+3,300,900); log(`You made an extra repayment of ${fmt(amount)} on a bank loan.`, 'bank');
    } else return toast('Unknown banking operation.');
    save(); render(); toast('Bank transaction completed.');
  }

  function marketTrade(action, data) {
    if(!canAdult()) return toast('Market investments unlock at age 18. Your family manages childhood finances.');
    const id=data.id, security=stock(id);
    let cost=0,qty=0,amount=0,units=0,grams=0;
    if(action==='buy-stock'||action==='sell-stock') {
      if(!security) return toast('Security not found.');
      qty=Math.floor(Number(data.qty)); if(!Number.isFinite(qty)||qty<1||qty>100000) return toast('Enter a valid whole share quantity.');
      if(action==='buy-stock') { cost=Math.ceil(qty*security.price*1.0015); if(accountTotal()<cost) return toast(`You need ${fmt(cost)} including brokerage.`); }
      else if(qty>(game.portfolio.stocks[id]||0)) return toast(`You own only ${game.portfolio.stocks[id]||0} shares.`);
    } else if(action==='fund-buy') {
      amount=Number(data.amount); if(!Number.isFinite(amount)||amount<500) return toast('Minimum mutual fund purchase is ₹500.'); if(accountTotal()<amount) return toast('Insufficient funds.');
    } else if(action==='fund-sell') {
      units=Number(data.units); if(!Number.isFinite(units)||units<=0||units>game.portfolio.fundUnits) return toast('Enter valid units to redeem.');
    } else if(action==='gold-buy') {
      amount=Number(data.amount); if(!Number.isFinite(amount)||amount<500) return toast('Minimum gold purchase is ₹500.'); if(accountTotal()<amount) return toast('Insufficient funds.');
    } else if(action==='gold-sell') {
      grams=Number(data.grams); if(!Number.isFinite(grams)||grams<=0||grams>game.portfolio.goldGrams) return toast('Enter valid gold quantity.');
    } else return toast('Unknown market order.');
    if(!consumeAction(1,2,1)) return;
    if(action==='buy-stock') {
      spend(cost,'investment'); game.portfolio.stocks[id]=(game.portfolio.stocks[id]||0)+qty; log(`Bought ${qty} shares of ${security.name} for ${fmt(cost)}.`, 'market');
    } else if(action==='sell-stock') {
      game.portfolio.stocks[id]-=qty; if(!game.portfolio.stocks[id]) delete game.portfolio.stocks[id];
      const proceeds=Math.floor(qty*security.price*.9985); credit(proceeds,'current','assetSale'); log(`Sold ${qty} shares of ${security.name} for ${fmt(proceeds)} net of brokerage.`, 'market');
    } else if(action==='fund-buy') {
      spend(amount,'investment'); game.portfolio.fundUnits+=amount/game.market.fundNav; game.portfolio.fundValue=game.portfolio.fundUnits*game.market.fundNav; log(`Invested ${fmt(amount)} in the diversified India Equity Fund.`, 'market');
    } else if(action==='fund-sell') {
      const proceeds=units*game.market.fundNav*.998; game.portfolio.fundUnits-=units; game.portfolio.fundValue=game.portfolio.fundUnits*game.market.fundNav; credit(proceeds,'current','assetSale'); log(`Redeemed mutual fund units for ${fmt(proceeds)} net of exit cost.`, 'market');
    } else if(action==='gold-buy') {
      spend(amount,'investment'); grams=amount/game.market.goldPrice; game.portfolio.goldGrams+=grams; game.portfolio.goldValue=game.portfolio.goldGrams*game.market.goldPrice; log(`Bought ${num(grams,2)} grams of simulated digital gold.`, 'market');
    } else if(action==='gold-sell') {
      const proceeds=grams*game.market.goldPrice*.997; game.portfolio.goldGrams-=grams; game.portfolio.goldValue=game.portfolio.goldGrams*game.market.goldPrice; credit(proceeds,'current','assetSale'); log(`Sold gold for ${fmt(proceeds)} net of spread.`, 'market');
    }
    save(); render(); toast('Market order completed. One quarterly decision was used.');
  }

  function applyJob(id) {
    if(!canAdult()) return toast('You can apply for jobs after age 18.');
    const job=JOBS.find(j=>j.id===id); if(!job) return;
    if(game.career.job) return toast('Resign from your current job before applying elsewhere.');
    if(game.career.education<job.education || game.career.skills[job.skill]<job.need) return toast('Your qualifications or skill level do not meet this role yet.');
    if(!consumeAction(1,8,3)) return;
    const fit=game.player.smarts*.18+game.player.confidence*.18+game.career.skills[job.skill]*.55+game.career.experience*1.2;
    const chance=clamp(48+fit-job.need*.45-game.market.unemployment*.65,12,92);
    if(Math.random()*100<chance) { game.career.job={...job,level:1}; game.career.tenure=0; game.career.performance=55; log(`You were hired as ${job.title} at ${job.firm}, with annual pay of ${fmt(job.salary)}.`, 'career'); toast('Congratulations — job offer accepted.'); }
    else { log(`Your application to ${job.firm} was unsuccessful. You decide to improve your profile.`, 'career'); toast('No offer this time. Build your skills and try again.'); }
    save(); render();
  }

  function careerAction(action, data={}) {
    if(!canAdult()) return toast('Career applications begin at age 18.');
    if(action==='enroll-college'||action==='enroll-postgrad') {
      if(game.career.college) return toast('You are already enrolled in a course.');
      const postgrad=action==='enroll-postgrad';
      if(postgrad) {
        if(game.career.education<2||game.player.age<21) return toast('Postgraduate study requires an undergraduate degree and age 21+.');
      } else if(!game.school.completed||game.school.marks<40) return toast('Complete Grade 12 with a pass result before enrolling.');
      const fee=Number(data.fee||(postgrad?35000:18000));
      if(!Number.isFinite(fee)||fee<=0||accountTotal()<fee) return toast(`You need ${fmt(fee)} for the first college instalment.`);
      if(!consumeAction(1,10,postgrad?4:3)) return;
      spend(fee,'expense'); game.career.college=data.course||(postgrad?'Postgraduate Diploma':'Bachelor of Commerce'); game.career.collegeProgress=0; game.career.collegeEffort=0; game.career.collegeTarget=postgrad?8:12; game.career.collegeLevel=postgrad?3:2;
      log(`You enrolled in ${game.career.college}. Tuition and study workload now apply.`, 'education');
    } else if(action==='finish-college') {
      const target=game.career.collegeTarget||12;
      if(!game.career.college||game.career.collegeProgress<target) return toast(`Complete ${target} study quarters to graduate.`);
      if(!consumeAction(1,2,1)) return;
      const level=game.career.collegeLevel||2; game.career.education=Math.max(game.career.education,level); const completed=game.career.college; game.career.college=null; game.career.collegeTarget=12; game.career.collegeLevel=2;
      log(`You completed ${completed}. Your education level is now ${game.career.education}.`, 'education');
    } else if(action==='apply') return applyJob(data.id);
    else if(action==='resign') { if(!game.career.job) return; if(!consumeAction(1,4,2)) return; log(`You resigned from ${game.career.job.firm}.`, 'career'); game.career.job=null; game.career.tenure=0; }
    else if(action==='promotion') { if(!game.career.job||game.career.tenure<8||game.career.performance<70) return toast('Promotion needs at least eight completed employment quarters and performance of 70.'); if(!consumeAction(1,4,1)) return; game.career.job.level++; game.career.job.salary=Math.round(game.career.job.salary*1.18); game.career.tenure=0; game.career.performance=58; log(`You received a promotion. New annual salary: ${fmt(game.career.job.salary)}.`, 'career'); }
    save(); render();
  }

  function businessStart(id) {
    const spec=BUSINESS_TYPES.find(x=>x.id===id); if(!spec) return;
    if(!canAdult()) return toast('You can establish a business from age 18.');
    if(game.businesses.length>=5) return toast('The current build supports five businesses per owner.');
    if(game.businesses.some(x=>x.type===id)) return toast('This starter build allows one company per industry. Expand this company instead.');
    const totalRequired=spec.setup+spec.capital;
    if(accountTotal()<totalRequired) return toast(`You need ${fmt(totalRequired)} for setup and initial working capital.`);
    if(!consumeAction(1,6,2)) return;
    spend(totalRequired,'investment');
    const b={id:`co-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,type:id,name:spec.name,city:game.player.city,level:1,employees:2,cash:spec.capital,inventory:0,price:spec.basePrice,capacity:spec.capacity,quality:50,brand:10,revenue:0,costs:0,profit:0,lastUnits:0,value:spec.setup*.75,history:[]};
    game.businesses.push(b); game.stats.businessesFounded++; log(`You founded ${spec.name} in ${game.player.city}. Setup cost ${fmt(spec.setup)} and initial working capital ${fmt(spec.capital)} were funded.`, 'business'); save(); render();
  }
  function manageBusiness(action,data={}) {
    const b=game.businesses.find(x=>x.id===data.id); if(!b) return toast('Company not found.');
    const spec=BUSINESS_TYPES.find(x=>x.id===b.type);
    if(action==='inject') { const amount=Number(data.amount); if(!Number.isFinite(amount)||amount<1000||accountTotal()<amount) return toast('Enter a valid amount and ensure personal funds are available.'); if(!consumeAction(1,2,1))return; spend(amount,'investment'); b.cash+=amount; log(`You injected ${fmt(amount)} into ${b.name} as working capital.`, 'business'); }
    if(action==='price') { const price=Number(data.price); if(!Number.isFinite(price)||price<1||price>1000000) return toast('Enter a valid selling price.'); if(!consumeAction(1,2,1))return; b.price=price; log(`You changed ${b.name}'s selling price to ${fmt(price)}.`, 'business'); }
    if(action==='hire') { if(b.employees>=30) return toast('Employee limit reached for this company.'); if(!consumeAction(1,3,1))return; b.employees++; log(`You hired an employee at ${b.name}. Payroll obligations increased.`, 'business'); }
    if(action==='fire') { if(b.employees<=0) return toast('The company has no employees to remove.'); if(!consumeAction(1,2,1))return; b.employees--; log(`You reduced staffing at ${b.name}.`, 'business'); }
    if(action==='quality') { const spendAmount=22000;if(b.cash<spendAmount)return toast(`Company needs ${fmt(spendAmount)} for staff training and quality systems.`);if(!consumeAction(1,3,1))return;b.cash-=spendAmount;b.quality=clamp((b.quality||50)+8,0,100);log(`${b.name} invested in quality systems. Product/service quality improved.`, 'business'); }
    if(action==='marketing') { const spendAmount=12000;if(b.cash<spendAmount)return toast(`Company needs ${fmt(spendAmount)} for a marketing campaign.`);if(!consumeAction(1,3,1))return;b.cash-=spendAmount;b.brand=clamp((b.brand||10)+8,0,100);log(`${b.name} spent ${fmt(spendAmount)} on marketing. Brand awareness improved.`, 'business'); }
    if(action==='withdraw') { const amount=Number(data.amount);if(!Number.isFinite(amount)||amount<1000||amount>b.cash)return toast('Enter a valid dividend/withdrawal up to company cash.');if(!consumeAction(1,2,1))return;b.cash-=amount;credit(amount,'current');log(`You withdrew ${fmt(amount)} from ${b.name} as an owner distribution.`, 'business'); }
    save(); render(); toast('Company settings updated.');
  }

  function buyProperty(id) {
    const spec=PROPERTIES.find(x=>x.id===id); if(!spec) return;
    if(!canAdult()) return toast('Property investment is available from age 18.');
    if(accountTotal()<spec.price) return toast(`You need ${fmt(spec.price)} to buy this property outright.`);
    if(!consumeAction(1,5,2)) return;
    spend(spec.price,'investment');
    game.properties.push({id:`prop-${Date.now()}`,type:id,name:spec.name,value:spec.price,rent:spec.rent,maintenance:spec.maintenance,city:game.player.city});
    log(`You purchased ${spec.name} in ${game.player.city} for ${fmt(spec.price)}.`, 'property'); save(); render();
  }

  function marryOrPropose() {
    if(!canAdult()) return toast('Relationships can become romantic at age 18.');
    if(!game.player.partner) return toast('Meet someone first using the relationship action.');
    if(game.player.partner.affection<70||game.player.partner.trust<60) return toast('Build more affection and trust before proposing.');
    if(game.player.maritalStatus==='Married') return toast('You are already married.');
    if(!consumeAction(1,4,1)) return;
    if(game.player.maritalStatus==='Engaged') { game.player.maritalStatus='Married'; log(`You married ${game.player.partner.name}. Your household is now shared.`, 'family'); toast('Congratulations — you are married.'); }
    else { game.player.maritalStatus='Engaged'; game.player.partner.affection=clamp(game.player.partner.affection+5); log(`You became engaged to ${game.player.partner.name}.`, 'family'); toast('Engagement! You can now plan the wedding.'); }
    save(); render();
  }
  function haveChild() {
    if(game.player.age<21||game.player.maritalStatus!=='Married') return toast('In this simulation, having a child requires marriage and age 21+.');
    if(game.player.children.length>=4) return toast('Your household has reached the four-child limit.');
    if(accountTotal()<35000) return toast('Your household needs ₹35,000 available for childbirth and early care costs.');
    if(!consumeAction(1,8,4)) return;
    spend(35000,'expense');
    const name=randomName(); game.player.children.push({name,age:0,health:85}); log(`${name} joined your family. You are now responsible for a new generation.`, 'family'); game.player.happiness=clamp(game.player.happiness+6); save(); render();
  }

  function doExchange(data) {
    const from=data.from,to=data.to,amount=Number(data.amount);
    if(!canAdult()) return toast('International currency exchange unlocks at age 18.');
    if(!(from in CURRENCIES)||!(to in CURRENCIES)||from===to||!Number.isFinite(amount)||amount<=0||amount>game.wallet[from]) return toast('Check the currency pair and available wallet balance.');
    if(!consumeAction(1,2,1))return;
    const converted=amount*CURRENCIES[from].rate/CURRENCIES[to].rate*.985;
    game.wallet[from]-=amount; game.wallet[to]=(game.wallet[to]||0)+converted; log(`Exchanged ${num(amount,2)} ${from} into ${num(converted,2)} ${to}. A 1.5% conversion fee applied.`, 'bank'); save(); render();
  }
  function moveCity(name) {
    if(!(name in CITIES)||name===game.player.city) return;
    if(!canAdult()) return toast('You can relocate independently from age 18.');
    if(accountTotal()<18000) return toast('You need ₹18,000 for relocation and setup costs.');
    if(!consumeAction(1,8,3)) return;
    spend(18000,'expense');
    const old=game.player.city; game.player.city=name; log(`You relocated from ${old} to ${name}. Personal living costs changed; existing companies remain in their registered cities.`, 'world'); save(); render();
  }

  function settleBusiness() {
    const byType=id=>game.businesses.find(b=>b.type===id);
    const farm=byType('farm'), mill=byType('mill'), grocery=byType('grocery');
    const order=['farm','mill','grocery','electronics','software'];
    const marketDemandFactor=1+game.market.sentiment/200;
    if(mill){const ms=BUSINESS_TYPES.find(x=>x.id==='mill');const mf=clamp(.45+mill.employees*.275,.25,1.7);mill._targetPaddyNeed=Math.floor((mill.capacity*mill.level*mf*(.65+Math.random()*.35)*ms.inputRatio)/ms.inputRatio)*ms.inputRatio;}
    if(grocery){const gf=clamp(.45+grocery.employees*.275,.25,1.7);grocery._targetStock=Math.round(grocery.capacity*grocery.level*gf*(.7+Math.random()*.35));}
    for(const id of order) {
      const b=game.businesses.find(x=>x.type===id); if(!b) continue;
      const spec=BUSINESS_TYPES.find(x=>x.id===id); const operatingCity=CITIES[b.city]||city(); const wage=Math.round(spec.wage*operatingCity.wage*b.employees*(game.market.priceIndex||1)); const overhead=Math.round(spec.overhead*operatingCity.cost*(game.market.priceIndex||1));
      let inputCost=0, produced=0, sold=0, revenue=0, cost=0;
      const operatingReserve=wage+overhead; const staffFactor=clamp(.45+b.employees*.275,.25,1.7);
      if(b.cash<operatingReserve) {
        b.costs=0;b.revenue=0;b.profit=0;b.lastUnits=0;
        b.value=Math.max(spec.setup*.15,b.value*.985); b.history.unshift({year:game.time.year,q:game.time.quarter,revenue:0,cost:0,profit:0,units:0}); b.history=b.history.slice(0,8); delete b._targetPaddyNeed;delete b._targetStock;delete b._internalPaddy;delete b._internalRice; continue;
      }
      b.cash-=operatingReserve; cost+=operatingReserve;
      const cityFactor=CITIES[b.city]?.demand||1;
      const competition= id==='software'?.78:id==='grocery'?.82:.9; const qualityFactor=.75+(b.quality||50)/200+(b.brand||10)/250;
      if(id==='farm') {
        const maxByCash=Math.floor(b.cash/Math.max(1,spec.unitCost)); produced=Math.max(0,Math.min(Math.round(b.capacity*b.level*staffFactor*(.65+Math.random()*.55)),maxByCash));
        inputCost=produced*spec.unitCost;b.cash-=inputCost;cost+=inputCost;b.inventory+=produced;
        const millSpec=BUSINESS_TYPES.find(x=>x.id==='mill');const millCity=mill?(CITIES[mill.city]||city()):city();const millReserve=mill?Math.round(millSpec.wage*millCity.wage*mill.employees*(game.market.priceIndex||1)+millSpec.overhead*millCity.cost*(game.market.priceIndex||1)):0;const millCashAfterReserve=mill?Math.max(0,mill.cash-millReserve):0;const millAffordable=mill?Math.floor(millCashAfterReserve/(millSpec.inputCost*millSpec.inputRatio+millSpec.unitCost))*millSpec.inputRatio:0;const internalNeed=mill?Math.floor(Math.min(b.inventory,mill._targetPaddyNeed||0,millAffordable)/millSpec.inputRatio)*millSpec.inputRatio:0;
        if(internalNeed>0) { const transfer=internalNeed*22; b.inventory-=internalNeed; b.cash+=transfer; revenue+=transfer; if(mill) mill._internalPaddy=(mill._internalPaddy||0)+internalNeed; }
        const demand=Math.round(spec.demand*cityFactor*marketDemandFactor*competition*qualityFactor*Math.pow(spec.basePrice/Math.max(1,b.price),.85));
        sold=Math.min(b.inventory,demand); revenue+=sold*b.price;b.inventory-=sold;
      } else if(id==='mill') {
        const needed=b._targetPaddyNeed||Math.round(b.capacity*b.level*staffFactor*(.65+Math.random()*.35)*spec.inputRatio);
        const maxAffordableOutputs=Math.floor(b.cash/(spec.inputCost*spec.inputRatio+spec.unitCost));const maxAffordablePaddy=maxAffordableOutputs*spec.inputRatio;
        const internalUsed=Math.floor(Math.min(needed,b._internalPaddy||0,maxAffordablePaddy)/spec.inputRatio)*spec.inputRatio;b._internalPaddy=Math.max(0,(b._internalPaddy||0)-internalUsed);
        const remaining=needed-internalUsed;const external=Math.floor(Math.min(remaining,Math.max(0,maxAffordablePaddy-internalUsed))/spec.inputRatio)*spec.inputRatio;
        const supplied=internalUsed+external;const internalTransferCost=internalUsed*spec.inputCost;const paidExternal=external*spec.inputCost;
        b.cash-=internalTransferCost+paidExternal;cost+=internalTransferCost+paidExternal;
        produced=Math.floor(supplied/spec.inputRatio);const processCost=produced*spec.unitCost;b.cash-=processCost;cost+=processCost;
        b.inventory+=produced;
        const grocerySpec=BUSINESS_TYPES.find(x=>x.id==='grocery');const groceryCity=grocery?(CITIES[grocery.city]||city()):city();const groceryReserve=grocery?Math.round(grocerySpec.wage*groceryCity.wage*grocery.employees*(game.market.priceIndex||1)+grocerySpec.overhead*groceryCity.cost*(game.market.priceIndex||1)):0;const groceryCashAfterReserve=grocery?Math.max(0,grocery.cash-groceryReserve):0;const groceryAffordable=grocery?Math.floor(groceryCashAfterReserve/grocerySpec.inputCost):0;const internalNeed=grocery?Math.min(b.inventory,grocery._targetStock||0,groceryAffordable):0;
        if(internalNeed>0){const transfer=internalNeed*39;b.inventory-=internalNeed;b.cash+=transfer;revenue+=transfer;grocery._internalRice=(grocery._internalRice||0)+internalNeed;}
        const demand=Math.round(spec.demand*cityFactor*marketDemandFactor*competition*qualityFactor*Math.pow(spec.basePrice/Math.max(1,b.price),1.15)); sold=Math.min(b.inventory,demand);revenue+=sold*b.price;b.inventory-=sold;
      } else if(id==='grocery') {
        const target=b._targetStock||Math.round(b.capacity*b.level*staffFactor*(.7+Math.random()*.35));
        let supplied=Math.min(target,b._internalRice||0,Math.floor(b.cash/spec.inputCost));b._internalRice=Math.max(0,(b._internalRice||0)-supplied);
        const internalRiceCost=supplied*spec.inputCost;b.cash-=internalRiceCost;cost+=internalRiceCost;
        const remaining=target-supplied;const affordable=Math.floor(b.cash/Math.max(1,spec.inputCost));const external=Math.min(remaining,affordable);
        const procurement=external*spec.inputCost;b.cash-=procurement;cost+=procurement;supplied+=external;b.inventory+=supplied;
        const demand=Math.round(spec.demand*cityFactor*marketDemandFactor*competition*qualityFactor*Math.pow(spec.basePrice/Math.max(1,b.price),1.35));
        sold=Math.min(b.inventory,demand);revenue=sold*b.price;b.inventory-=sold;
      } else if(id==='electronics') {
        const target=Math.round(b.capacity*b.level*staffFactor*(.6+Math.random()*.5)); const affordable=Math.floor(b.cash/(spec.inputCost+spec.unitCost));
        produced=Math.min(target,affordable);const variable=produced*(spec.inputCost+spec.unitCost);b.cash-=variable;cost+=variable;b.inventory+=produced;
        const demand=Math.round(spec.demand*cityFactor*marketDemandFactor*competition*qualityFactor*Math.pow(spec.basePrice/Math.max(1,b.price),1.3));sold=Math.min(b.inventory,demand);revenue=sold*b.price;b.inventory-=sold;
      } else if(id==='software') {
        const target=Math.round(b.capacity*b.level*staffFactor*(.65+Math.random()*.45));const affordable=Math.floor(b.cash/Math.max(1,spec.unitCost));produced=Math.min(target,affordable);const variable=produced*spec.unitCost;b.cash-=variable;cost+=variable;
        const demand=Math.max(0,Math.round(spec.demand*cityFactor*marketDemandFactor*competition*qualityFactor*Math.pow(spec.basePrice/Math.max(1,b.price),1.4)));sold=Math.min(produced,demand);revenue=sold*b.price;
      }
      b.cash+=revenue; cost+=0; b.revenue=Math.round(revenue); b.costs=Math.round(cost);b.profit=Math.round(revenue-cost);b.lastUnits=sold;
      b.value=Math.max(spec.setup*.18,Math.round(b.cash+spec.setup*.3+b.inventory*spec.unitCost+Math.max(0,b.profit)*3));
      b.history.unshift({year:game.time.year,q:game.time.quarter,revenue:b.revenue,cost:b.costs,profit:b.profit,units:sold});b.history=b.history.slice(0,8);
      delete b._internalPaddy;delete b._internalRice;delete b._targetPaddyNeed;delete b._targetStock;
    }
  }

  function settleQuarter() {
    const p=game.player, b=background();
    const marketValueAtOpen=totalInvested();
    // Family household funds carry childhood costs; after adulthood the player carries their own budget.
    if(p.age<18) {
      game.family.funds+=game.family.quarterlyIncome;
      const fee=game.family.schoolFee*(p.age>=6?1:.25);
      const householdCost=Math.round(game.family.quarterlyExpense*city().cost*(game.market.priceIndex||1));
      game.family.educationFund=Math.max(0,game.family.educationFund-fee);
      game.family.funds-=householdCost+fee;
      credit(b.pocket,'wallet','support');
      if(game.family.funds<0) { game.family.funds=0; game.family.support=clamp(game.family.support-4); p.stress=clamp(p.stress+3); log('Your household is under financial pressure. School resources and family support may be affected.', 'event'); }
    } else {
      if(game.career.job) { const salary=game.career.job.salary/4; credit(salary,'current'); game.career.performance=clamp(game.career.performance+1); game.career.tenure++; }
      if(game.career.college) { const tuition=8000;if(accountTotal()>=tuition){spend(tuition);if((game.career.collegeEffort||0)>0)game.career.collegeProgress++;else log('You missed a study quarter. Your degree progress did not advance.','education');}else{log('Your tuition payment was missed. Your degree progress was paused.','education');}game.career.collegeEffort=0; }
      const living=Math.round((p.background==='working'?16500:p.background==='affluent'?39000:24500)*city().cost*(game.market.priceIndex||1));
      const propertyRent=game.properties.reduce((sum,x)=>sum+x.rent,0); const propertyCosts=game.properties.reduce((sum,x)=>sum+x.maintenance,0);
      if(propertyRent>0) credit(propertyRent,'current'); if(propertyCosts>0) spend(Math.min(accountTotal(),propertyCosts));
      if(accountTotal()>=living) spend(living); else { const shortfall=living-accountTotal(); const available=accountTotal(); spend(available); game.bank.loans.push({id:`emergency-${Date.now()}`,principal:shortfall,balance:shortfall,rate:.03,remaining:4,term:4,emergency:true,createdAt:game.time.year*4+game.time.quarter}); log(`Your income could not cover living expenses. An emergency loan of ${fmt(shortfall)} was added.`, 'finance'); }
    }
    settleBusiness();
    // Owned-bank operations: customer growth, loan interest, deposit interest and running costs.
    game.bank.ownedBanks.forEach(ob=>{
      const depositGrowth=Math.round(Math.min(180000*ob.branches,Math.max(0,(ob.trust*1800-ob.publicLoanBook*.002)*ob.branches)));
      ob.publicDeposits=(ob.publicDeposits||0)+depositGrowth;ob.deposits+=depositGrowth;ob.cash+=depositGrowth;
      const publicNewLoan=Math.min(Math.round(ob.cash*.035),Math.max(0,ob.cash-ob.deposits*.18-1800000));
      if(publicNewLoan>0){ob.cash-=publicNewLoan;ob.publicLoanBook=(ob.publicLoanBook||0)+publicNewLoan;}
      const publicInterest=Math.round((ob.publicLoanBook||0)*.023);
      const publicPrincipalRecovery=Math.round((ob.publicLoanBook||0)*.055);
      ob.publicLoanBook=Math.max(0,(ob.publicLoanBook||0)-publicPrincipalRecovery);
      let ownerInterest=0;
      ob.playerLoans.forEach(l=>{
        const interest=Math.round(l.balance*l.rate);ownerInterest+=interest;
        const scheduledPrincipal=Math.min(l.balance,Math.ceil((l.principal||l.balance)/Math.max(1,l.remaining||1)));
        const due=interest+scheduledPrincipal;
        if(accountTotal()>=due){spend(due,'debt');ob.cash+=due;l.balance=Math.max(0,l.balance-scheduledPrincipal);l.remaining=Math.max(0,l.remaining-1);}
        else {l.balance+=interest;l.remaining=Math.max(1,l.remaining-1);l.missed=(l.missed||0)+1;ob.trust=clamp(ob.trust-2);log(`A repayment to ${ob.name} was missed. Interest was added to your loan balance.`, 'bank');}
      });
      ob.playerLoans=ob.playerLoans.filter(l=>l.balance>1);
      const depositCost=Math.round(ob.deposits*ob.depositRate/4);
      const playerDepositInterest=Math.round(ob.playerDeposits*ob.depositRate/4);
      ob.playerDeposits+=playerDepositInterest;ob.deposits+=playerDepositInterest;
      const cashDepositInterest=Math.max(0,depositCost-playerDepositInterest);
      const operatingCost=52000*ob.branches;
      const income=publicInterest+ownerInterest;
      const profit=income-depositCost-operatingCost;
      // Principal repayments return cash; public loan interest is collected in cash. Owner-loan interest is cash only when included in a paid instalment above. Owner deposit interest is capitalised into the owner's deposit liability rather than paid twice.
      ob.cash=Math.max(0,ob.cash+publicPrincipalRecovery+publicInterest-cashDepositInterest-operatingCost);
      ob.revenue=income;ob.costs=depositCost+operatingCost;ob.profit=profit;
      if(profit>=0)ob.trust=clamp(ob.trust+0.5);else ob.trust=clamp(ob.trust-1);
      ob.quarterHistory.unshift({year:game.time.year,quarter:game.time.quarter,revenue:income,costs:depositCost+operatingCost,profit});ob.quarterHistory=ob.quarterHistory.slice(0,8);
    });
    // Deposits and credit have transparent quarterly accrual.
    const savingsInterest=Math.round(game.bank.savings*.035/4);game.bank.savings+=savingsInterest;if(savingsInterest>0){game.stats.totalEarned+=savingsInterest;game.economy.quarter.income+=savingsInterest;}
    if(game.bank.insurance&&game.bank.insuranceQuarters>0){game.bank.insuranceQuarters--;if(game.bank.insuranceQuarters===0){game.bank.insurance=false;log('Your simulated health cover policy expired.','bank');}}
    game.bank.fixedDeposits.forEach(fd=>{fd.remaining--;fd.accrued=(fd.accrued||0)+fd.principal*fd.rate/4;});
    const matured=game.bank.fixedDeposits.filter(fd=>fd.remaining<=0);
    matured.forEach(fd=>{const maturity=fd.principal+(fd.accrued||0);game.bank.savings+=maturity;game.stats.totalEarned+=Math.round(fd.accrued||0);game.economy.quarter.income+=Math.round(fd.accrued||0);log(`A fixed deposit matured. ${fmt(maturity)} was returned to savings, including ${fmt(fd.accrued||0)} interest.`, 'bank');});
    game.bank.fixedDeposits=game.bank.fixedDeposits.filter(fd=>fd.remaining>0);
    game.bank.loans.forEach(l=>{
      const currentPeriod=game.time.year*4+game.time.quarter;
      if(l.createdAt===currentPeriod || l.skipFirstPayment) { l.skipFirstPayment=false; l.balance=Math.round(l.balance*(1+l.rate)); return; }
      const interest=Math.round(l.balance*l.rate);
      const scheduledPrincipal=Math.min(l.balance,l.remaining<=1?l.balance:Math.ceil((l.principal||l.balance)/Math.max(1,l.term||l.remaining)));
      const due=interest+scheduledPrincipal;
      const paid=Math.min(due,accountTotal()); if(paid>0) spend(paid,'debt');
      const interestPaid=Math.min(interest,paid);
      const principalPaid=Math.min(scheduledPrincipal,Math.max(0,paid-interestPaid));
      l.balance=Math.max(0,Math.round(l.balance-principalPaid+(interest-interestPaid)));
      l.remaining=Math.max(0,(l.remaining||0)-1);
      if(paid<due) { game.bank.creditScore=clamp(game.bank.creditScore-6,300,900); log(`A scheduled loan instalment was only partly paid. ${fmt(due-paid)} was carried forward and credit score declined.`, 'bank'); }
      else game.bank.creditScore=clamp(game.bank.creditScore+1,300,900);
    });
    game.bank.loans=game.bank.loans.filter(l=>l.balance>=1);
    game.market.sentiment=clamp(game.market.sentiment+(Math.random()*12-6),-35,35);
    game.market.priceIndex=(game.market.priceIndex||1)*(1+game.market.inflation/400);
    game.market.repoRate=clamp(game.market.repoRate+(game.market.inflation-5.5)*.012,4,10);
    game.market.inflation=clamp(game.market.inflation+(Math.random()-.49)*.35,2,10);
    game.market.unemployment=clamp(game.market.unemployment+(Math.random()-.5)*.3,3,14);
    let dividends=0;Object.entries(game.portfolio.stocks).forEach(([id,qty])=>{const sec=stock(id);if(sec)dividends+=qty*sec.price*sec.dividend/4;});if(dividends>0)credit(Math.round(dividends),'current');
    game.market.stocks.forEach(s=>{const prior=s.price;const noise=(Math.random()*2-1)*s.volatility;let pct=clamp(s.growth+game.market.sentiment/1000+noise,-.22,.22);if(pct<0&&trait().finance>1)pct*=.88;s.price=Math.max(8,Math.round(s.price*(1+pct)*100)/100);s.change=(s.price/prior)-1;});
    const indexBase=SECURITIES.reduce((sum,s)=>sum+s.price,0);game.market.index=Math.round(game.market.stocks.reduce((sum,s)=>sum+s.price,0)/indexBase*1000);
    game.market.fundNav=Math.max(20,(game.market.fundNav||100)*(1+game.market.sentiment/1800+(Math.random()-.48)*.06));
    game.portfolio.fundValue=game.portfolio.fundUnits*game.market.fundNav;
    game.market.goldPrice=Math.max(4000,(game.market.goldPrice||7200)*(1+(Math.random()-.48)*.035+(game.market.inflation-5.2)/1000));
    game.portfolio.goldValue=game.portfolio.goldGrams*game.market.goldPrice;
    game.economy.quarter.marketChange += Math.round(totalInvested()-marketValueAtOpen);
    // Needs and wellbeing recover at the change of quarter, but workload leaves a mark.
    const exhaustedAtSettlement=p.energy<12;
    const stressRecovery=trait().recovery||trait().resilience||1;
    p.energy=clamp(p.energy+26);p.stress=clamp(p.stress-7*stressRecovery);p.health=clamp(p.health+(p.stress<55?(trait().resilience?2:1):(trait().resilience?-1:-2)));
    p.social=clamp(p.social-1);p.happiness=clamp(p.happiness+(p.stress>80?-3:0)+(p.social<18?-1:0));
    if(p.happiness<20) p.confidence=clamp(p.confidence-1);
    if(p.stress>82 || exhaustedAtSettlement) {
      const risk=Math.random(); if(risk<.24/(trait().resilience||1)){p.health=clamp(p.health-8);p.stress=clamp(p.stress+5);if(!game.bank.insurance&&p.age>=18){const bill=8000;if(accountTotal()>=bill)spend(bill);else game.bank.loans.push({id:`medical-${Date.now()}`,principal:bill,balance:bill,rate:.02,remaining:4,term:4,emergency:true,createdAt:game.time.year*4+game.time.quarter});}log('Burnout or illness interrupted your quarter. Health declined and medical costs were incurred.', 'health');}
    }
    if(p.health<25) {p.energy=clamp(p.energy-4);p.happiness=clamp(p.happiness-3);}
    if(p.age>=18&&p.partner&&p.partner.affection>45&&Math.random()<.06){p.partner.trust=clamp(p.partner.trust+1);}
    const q=game.economy.quarter;
    const ownedBankProfit=game.bank.ownedBanks.reduce((v,x)=>v+(x.profit||0),0);
    const businessRevenue=game.businesses.reduce((v,x)=>v+(x.revenue||0),0);
    const businessCosts=game.businesses.reduce((v,x)=>v+(x.costs||0),0);
    const businessProfit=game.businesses.reduce((v,x)=>v+(x.profit||0),0);
    game.economy.history.unshift({year:game.time.year,quarter:game.time.quarter,income:q.income,expenses:q.expenses,investments:q.investments,debtService:q.debtService,financing:q.financing,assetSales:q.assetSales,support:q.support,marketChange:q.marketChange,businessRevenue,businessCosts,businessProfit,bankProfit:ownedBankProfit,net:q.income+q.support+q.assetSales+q.financing-q.expenses-q.investments-q.debtService+q.marketChange});
    game.economy.history=game.economy.history.slice(0,12);
    game.economy.quarter={income:0,expenses:0,investments:0,debtService:0,financing:0,assetSales:0,support:0,marketChange:0};
    game.stats.quarters++;
    game.time.quarter++;
    if(game.time.quarter>4) { game.time.quarter=1; game.time.year++; p.age++; annualLifeEvents(); }
    game.time.actionPoints=ACTIONS_PER_QUARTER; game.time.actionsUsed=0;
    game.stats.bestNetWorth=Math.max(game.stats.bestNetWorth,netWorth());
    log(`Quarter ${game.time.quarter===1?4:game.time.quarter-1} settled. Your next quarter begins.`, 'time');
    save();render();toast('New quarter started. Three decision slots restored.');
  }

  function annualLifeEvents() {
    const p=game.player;
    if(p.age===6) { game.school.grade=1; game.school.enrolled=true; log('You started Grade 1. School routines, attendance and study habits now shape your academic path.', 'education'); }
    if(p.age>=7&&p.age<=18) {
      const completedGrade=p.age-6;
      const score=clamp(48+game.school.effort*2+game.school.attendance*1.2+p.smarts*.18-p.stress*.16+Math.random()*12,20,98);
      game.school.marks=Math.round(score);game.school.effort=0;game.school.attendance=0;game.school.grade=Math.min(12,p.age-5);
      if(completedGrade===12){game.school.completed=true;game.school.graduation=game.school.marks>=40?'Passed':'Needs improvement';game.career.education=game.school.marks>=40?1:0;log(`You completed Grade 12. Final school result: ${game.school.graduation} (${game.school.marks}%).`, 'education');}
      else log(`You completed Grade ${completedGrade} with an estimated ${game.school.marks}% result.`, 'education');
    }
    if(p.age===18) {
      const grant=Math.min(background().adultGrant,Math.max(0,game.family.funds*.1));if(grant>0)credit(grant,'current');
      log(`You turned 18. You are now responsible for your own choices and household budget. Family transition support: ${fmt(grant)}.`, 'life');
    }
    if(p.age===21&&p.partner&&p.maritalStatus==='Married') p.happiness=clamp(p.happiness+2);
    if(p.age>=65) {p.health=clamp(p.health-(Math.random()*2));p.fitness=clamp(p.fitness-1);}
    if(p.age>=85) {
      const risk=Math.min(.28,.035+(p.age-85)*.018+(100-p.health)/350);
      if(Math.random()<risk) {p.alive=false;log(`At age ${p.age}, your life came to an end. Your legacy and estate remain.`, 'life');}
    }
    if(p.age>=18&&p.health<40) log('Your health needs attention. Consider rest, exercise and medical care.', 'health');
    if(p.age>=18&&game.career.job&&game.career.tenure>=8&&game.career.performance>=70) log('You are eligible to request a promotion from your employer.', 'career');
    game.family.parents.forEach(parent=>{parent.age++;if(parent.age>=60)parent.health=clamp(parent.health-(Math.random()*.8),0,100);});
    if(game.family.siblings.length) game.family.siblings.forEach(s=>s.age++);
    p.children.forEach(c=>c.age++);
  }

  function endQuarterConfirm() {
    showModal('End this quarter?', `<p class="muted">Unused decision slots are lost. Income, household costs, business operations, interest, markets and wellbeing will settle.</p><div class="button-row"><button class="button primary" data-action="confirm-end-quarter">Settle quarter</button><button class="button ghost" data-action="close-modal">Continue decisions</button></div>`);
  }

  function showModal(title, body) {
    $('.modal-backdrop')?.remove();
    const wrap=document.createElement('div');wrap.className='modal-backdrop';wrap.innerHTML=`<section class="modal" role="dialog" aria-modal="true"><div class="modal-head"><h3>${esc(title)}</h3><button class="icon-button" data-action="close-modal" aria-label="Close">×</button></div>${body}</section>`;app.appendChild(wrap);
  }
  function formModal(title, body) { showModal(title,body); }
  function establishBankModal() {
    const cost=8500000, bankNumber=game.bank.ownedBanks.length+1;
    formModal('Establish your own bank',`<div class="notice">A bank is a regulated financial business in this simulation. Initial paid-up capital: ${fmt(5000000)}. Licence, systems and launch costs: ${fmt(3500000)}. Total funding: ${fmt(cost)}. You can own up to three separate banks.</div><form id="establish-bank-form"><label>Bank name<input name="name" maxlength="28" required value="${esc((game.player.name.split(' ')[0]||'Dominion')+' Bank '+bankNumber)}"></label><label>Head office<select name="city">${Object.keys(CITIES).map(c=>`<option ${c===game.player.city?'selected':''}>${c}</option>`).join('')}</select></label><button class="button primary" ${!canAdult()||accountTotal()<cost||game.bank.ownedBanks.length>=3?'disabled':''}>Launch bank ${bankNumber}/3 · ${fmt(cost)}</button></form><p class="muted small">Each bank has its own capital, branches, deposits, loan book, interest income, liquidity and quarterly operating profit/loss. Loans to yourself appear as bank assets and personal liabilities.</p>`);
  }
  function ownBankBranchModal(bankId) {
    const b=game.bank.ownedBanks.find(x=>x.id===bankId); if(!b)return; const cost=1250000;
    formModal(`${esc(b.name)} · Open a branch`,`<div class="notice">A new branch expands customer reach and deposit potential, but adds quarterly operating costs. Existing bank vault cash funds the expansion.</div><form id="own-bank-branch-form"><input type="hidden" name="bankId" value="${b.id}"><div class="metric-grid">${stat('Current branches',b.branches)}${stat('Vault cash',fmt(b.cash))}${stat('Expansion cost',fmt(cost))}${stat('Next quarterly running cost',fmt(52000*(b.branches+1)))}</div><button class="button primary" ${b.cash<cost||b.branches>=20?'disabled':''}>Open branch</button></form>`);
  }
  function ownedBankModal(bankId) {
    const b=game.bank.ownedBanks.find(x=>x.id===bankId);if(!b)return;
    const limit=ownBankAvailableLoan(b);
    formModal(`${esc(b.name)} · Bank operations`,`<div class="metric-grid">${stat('Vault cash',fmt(b.cash),'Available liquidity')}${stat('Deposits',fmt(b.deposits),'Customer liabilities')}${stat('Public loan book',fmt(b.publicLoanBook||0),'Loans to other customers')}${stat('Quarter profit',fmt(b.profit||0),'Latest result')}${stat('Branches',b.branches,'Retail footprint')}${stat('Branch assets',fmt(b.fixedAssets||0),'Capitalised network investment')}</div><div class="notice">Loan rate ${(b.loanRate*100).toFixed(2)}% per quarter · Savings rate ${(b.depositRate*100).toFixed(2)}% annual · Reserve ratio 18% · Available related-party lending ${fmt(limit)}.</div><div class="form-grid"><form id="own-bank-deposit-form"><input type="hidden" name="bankId" value="${b.id}"><label>Deposit into your bank<input name="amount" type="number" min="1" required placeholder="100000"></label><button class="button primary">Deposit</button></form><form id="own-bank-withdraw-form"><input type="hidden" name="bankId" value="${b.id}"><label>Withdraw your deposit<input name="amount" type="number" min="1" max="${Math.floor(b.playerDeposits)}" required placeholder="25000"></label><button class="button secondary">Withdraw</button><small>Your deposits ${fmt(b.playerDeposits)}</small></form><form id="own-bank-loan-form"><input type="hidden" name="bankId" value="${b.id}"><label>Borrow from your own bank<input name="amount" type="number" min="1000" max="${limit}" required placeholder="500000"></label><label>Term<select name="term"><option value="4">1 year</option><option value="8" selected>2 years</option><option value="12">3 years</option><option value="16">4 years</option></select></label><button class="button primary" ${!canAdult()||limit<1000?'disabled':''}>Take bank loan</button></form><form id="own-bank-rate-form"><input type="hidden" name="bankId" value="${b.id}"><label>Quarterly lending rate (%)<input name="rate" type="number" min="0.8" max="4" step="0.1" value="${(b.loanRate*100).toFixed(2)}"></label><button class="button ghost">Update loan rate</button></form><form id="own-bank-deposit-rate-form"><input type="hidden" name="bankId" value="${b.id}"><label>Annual deposit rate (%)<input name="rate" type="number" min="0.5" max="10" step="0.1" value="${(b.depositRate*100).toFixed(2)}"></label><button class="button ghost">Update savings rate</button></form></div>${b.playerLoans.length?`<h4 class="subheading">Your loans from your bank</h4>${b.playerLoans.map(l=>`<div class="loan-row"><div><b>${fmt(l.balance)} outstanding</b><small>${(l.rate*100).toFixed(2)}% quarterly · ${l.remaining} quarters left</small></div><button class="button mini secondary" data-action="repay-own-bank" data-id="${l.id}" data-bank-id="${b.id}">Repay</button></div>`).join('')}`:'<p class="muted small">No owner loans are outstanding.</p>'}<div class="button-row"><button class="button secondary" data-action="expand-bank" data-id="${b.id}" ${b.branches>=20?'disabled':''}>＋ Open branch · ₹12.5 lakh</button></div>`);
  }
  function ownBankRepayModal(bankId,loanId) {
    const b=game.bank.ownedBanks.find(x=>x.id===bankId),l=b?.playerLoans.find(x=>x.id===loanId);if(!l)return;
    formModal('Repay your bank loan',`<form id="own-bank-repay-form"><input type="hidden" name="bankId" value="${b.id}"><input type="hidden" name="loanId" value="${l.id}"><label>Amount<input name="amount" type="number" min="1" max="${Math.floor(l.balance)}" required value="${Math.floor(l.balance)}"></label><p class="muted">Outstanding ${fmt(l.balance)} · This payment reduces your personal debt and increases your bank's cash.</p><button class="button primary">Repay loan</button></form>`);
  }
  function bankModal() {
    formModal('Banking operations',`<div class="form-grid"><form id="bank-deposit-form"><h4>Deposit into savings</h4><label>Amount (INR)<input name="amount" type="number" min="1" required placeholder="10000"></label><button class="button primary">Deposit funds</button></form><form id="bank-withdraw-form"><h4>Withdraw savings</h4><label>Amount (INR)<input name="amount" type="number" min="1" max="${Math.floor(game.bank.savings)}" required placeholder="5000"></label><button class="button secondary">Move to current</button></form><form id="bank-fd-form"><h4>Open fixed deposit</h4><label>Principal (INR)<input name="amount" type="number" min="1000" required placeholder="25000"></label><label>Term<select name="term"><option value="4">1 year · 6.2%</option><option value="8">2 years · 6.8%</option><option value="12">3 years · 5.8%</option></select></label><button class="button primary" ${!canAdult()?'disabled':''}>Open FD</button></form><form id="bank-loan-form"><h4>Apply for personal loan</h4><label>Amount (INR)<input name="amount" type="number" min="1000" required placeholder="50000"></label><label>Term<select name="term"><option value="4">4 quarters</option><option value="8">8 quarters</option><option value="12">12 quarters</option></select></label><button class="button secondary" ${!canAdult()?'disabled':''}>Apply for loan</button><small>Indicative limit based on credit profile; simulated rate 2.4% quarterly.</small></form></div>`);
  }
  function tradeModal(id) { const s=stock(id); if(!s)return; formModal(`Trade ${s.name}`,`<p class="muted">${s.id} · ${s.sector} · Current price ${fmt(s.price)} · 0.15% simulated brokerage.</p><div class="form-grid"><form id="stock-buy-form"><input type="hidden" name="id" value="${s.id}"><label>Shares to buy<input name="qty" type="number" min="1" step="1" required value="10"></label><button class="button primary">Buy shares</button></form><form id="stock-sell-form"><input type="hidden" name="id" value="${s.id}"><label>Shares to sell<input name="qty" type="number" min="1" max="${game.portfolio.stocks[id]||0}" step="1" required value="${Math.max(1,game.portfolio.stocks[id]||1)}"></label><button class="button secondary">Sell shares</button><small>You own ${game.portfolio.stocks[id]||0} shares.</small></form></div>`); }
  function investModal(kind) { const body=kind==='fund'?`<form id="fund-buy-form"><label>Investment amount (INR)<input name="amount" type="number" min="500" required placeholder="5000"></label><button class="button primary">Invest in fund</button></form><form id="fund-sell-form"><label>Units to redeem<input name="units" type="number" min="0.001" max="${game.portfolio.fundUnits}" step="0.001" required></label><button class="button secondary">Redeem units</button></form>`:`<form id="gold-buy-form"><label>Investment amount (INR)<input name="amount" type="number" min="500" required placeholder="5000"></label><button class="button primary">Buy digital gold</button></form><form id="gold-sell-form"><label>Gold quantity (grams)<input name="grams" type="number" min="0.01" max="${game.portfolio.goldGrams}" step="0.01" required></label><button class="button secondary">Sell gold</button></form>`;formModal(kind==='fund'?'Mutual fund investment':'Digital gold',`<div class="form-grid">${body}</div>`); }
  function businessModal() { const cards=BUSINESS_TYPES.map(t=>`<article class="choice-card"><div class="choice-icon">${t.emoji}</div><h4>${t.name}</h4><p>${t.desc}</p><div class="muted">Setup ${fmt(t.setup)} · Working capital ${fmt(t.capital)} · Total ${fmt(t.setup+t.capital)}</div><button class="button primary" data-action="found-business" data-id="${t.id}">Establish company</button></article>`).join('');formModal('Establish a business',`<p class="muted">Choose an industry. Each company has its own cash, stock, workers, operating costs, sales and quarterly profit or loss.</p><div class="choice-grid">${cards}</div>`); }
  function settingsModal() { formModal('Save, install & settings',`<div class="stack"><div class="notice">Your save stays in this browser on this device. Export a JSON backup regularly, especially before clearing browser data.</div><button class="button primary" data-action="export-save">Export save (.json)</button><label class="button secondary file-button">Import save (.json)<input id="import-save" type="file" accept="application/json,.json"></label><button class="button secondary" data-action="install-guide">Install on Android / iPhone</button><button class="button ghost" data-action="new-life">Start a new life</button><div class="muted small">Build ${BUILD} · Offline-capable PWA · No account or paid service.</div></div>`); }
  function jobApplyModal() { const cards=JOBS.map(j=>`<article class="list-card"><div><b>${j.title}</b><p>${j.firm} · ${fmt(j.salary)}/year</p><small>Education level ${j.education} · ${skillName(j.skill)} ${j.need}+</small></div><button class="button small ${game.career.education>=j.education&&game.career.skills[j.skill]>=j.need&&!game.career.job?'primary':'secondary'}" data-action="apply-job" data-id="${j.id}" ${game.career.education<j.education||game.career.skills[j.skill]<j.need||game.career.job?'disabled':''}>Apply</button></article>`).join('');formModal('Career opportunities',`<p class="muted">Applications take one decision slot and depend on qualifications, skill, intelligence and confidence.</p>${cards}`); }
  function studyFocusModal() { formModal('Choose a learning focus',`<form id="study-focus-form"><label>Skill to improve<select name="skill"><option value="tech">Technology</option><option value="business">Business</option><option value="finance">Finance</option><option value="communication">Communication</option><option value="science">Science</option><option value="arts">Arts</option></select></label><p class="muted">A focused study session improves smarts and the selected skill. If you are enrolled in college, it also adds one degree progress quarter.</p><button class="button primary">Study this quarter</button></form>`); }
  function collegeModal() { formModal('Enrol in college',`<form id="college-form"><label>Course<select name="course"><option>Bachelor of Commerce</option><option>Bachelor of Technology</option><option>Bachelor of Arts</option><option>Bachelor of Science</option><option>Bachelor of Business Administration</option></select></label><p class="muted">Illustrative first-quarter fee: ₹18,000. Complete 12 study quarters to graduate. You can study while also working, but energy and stress matter.</p><button class="button primary">Pay fees and enrol</button></form>`); }
  function businessManageModal(id) { const b=game.businesses.find(x=>x.id===id);if(!b)return;formModal(`${b.name} · Management`, `<div class="form-grid"><form id="biz-capital-form"><input type="hidden" name="id" value="${b.id}"><label>Inject working capital<input type="number" name="amount" min="1000" required placeholder="25000"></label><button class="button primary">Transfer capital</button></form><form id="biz-price-form"><input type="hidden" name="id" value="${b.id}"><label>Set selling price (INR)<input type="number" name="price" min="1" required value="${b.price}"></label><button class="button secondary">Update price</button></form><div class="notice">Employees: ${b.employees} · Company cash: ${fmt(b.cash)} · Quality ${Math.round(b.quality||50)} · Brand ${Math.round(b.brand||10)} · Management changes use a quarterly decision</div><form id="biz-withdraw-form"><input type="hidden" name="id" value="${b.id}"><label>Owner distribution from company cash<input type="number" name="amount" min="1000" max="${Math.floor(b.cash)}" required placeholder="10000"></label><button class="button secondary">Withdraw to current account</button></form><div class="button-row"><button class="button secondary" data-action="hire" data-id="${b.id}">Hire employee</button><button class="button ghost" data-action="fire" data-id="${b.id}">Release employee</button><button class="button secondary" data-action="marketing" data-id="${b.id}">Marketing campaign · ₹12,000</button><button class="button secondary" data-action="quality" data-id="${b.id}">Quality upgrade · ₹22,000</button></div></div>`); }
  function propertyModal() { const cards=PROPERTIES.map(p=>`<article class="choice-card"><div class="choice-icon">${p.emoji}</div><h4>${p.name}</h4><div class="muted">Price ${fmt(p.price)} · Rent ${fmt(p.rent)}/quarter · Maintenance ${fmt(p.maintenance)}</div><button class="button primary" data-action="buy-property" data-id="${p.id}">Buy outright</button></article>`).join('');formModal('Real estate market',`<p class="muted">Property is purchased outright in this starter version. Rent and maintenance settle quarterly. Mortgages and construction are planned later.</p><div class="choice-grid">${cards}</div>`); }
  function showExchangeModal() { formModal('Currency exchange',`<form id="exchange-form"><label>From<select name="from">${Object.keys(CURRENCIES).map(c=>`<option>${c}</option>`).join('')}</select></label><label>To<select name="to">${Object.keys(CURRENCIES).map(c=>`<option ${c==='USD'?'selected':''}>${c}</option>`).join('')}</select></label><label>Amount<input name="amount" type="number" min="0.01" step="0.01" required></label><p class="muted">Fixed simulation rates; 1.5% transaction fee. Not connected to live forex.</p><button class="button primary">Exchange</button></form>`); }

  function header() {
    return `<header class="compact-topbar"><div class="brand"><span class="brand-mark">L<span>&</span>E</span><span><b>LIFE & EMPIRE</b><small>INDIA · BUILD YOUR LEGACY</small></span></div><div class="top-actions"><button class="icon-button install-top" data-action="install-guide" title="Install app">⇩</button><button class="icon-button" data-action="settings" title="Save and settings">⚙</button></div></header>`;
  }
  function compactStat(label,value,tone='') { return `<div class="index-chip"><small>${label}</small><b class="${tone}">${value}</b></div>`; }
  function stat(label,value,small='') { return `<div class="stat-card"><span>${label}</span><strong>${value}</strong>${small?`<small>${small}</small>`:''}</div>`; }
  function hudStrip() {
    const p=game.player;const face=p.age<3?'👶':p.age<13?(p.presentation==='girl'?'👧':'🧒'):p.age<18?(p.presentation==='girl'?'👩':'🧑'):(p.presentation==='girl'?'👩':'🧑');
    const pnl=game.economy.quarter.income+game.economy.quarter.support+game.economy.quarter.assetSales-game.economy.quarter.expenses-game.economy.quarter.investments-game.economy.quarter.debtService+game.economy.quarter.financing;
    return `<section class="hud-strip"><div class="character-index"><div class="hud-avatar">${face}</div><div class="hud-person"><b>${esc(p.name)}</b><small>Age ${p.age} · ${ageStage(p.age)} · ${game.player.city}</small><div class="mini-meters"><i title="Health" class="health" style="width:${p.health}%"></i><i title="Energy" class="energy" style="width:${p.energy}%"></i><i title="Stress" class="stress" style="width:${p.stress}%"></i><i title="Happiness" class="happy" style="width:${p.happiness}%"></i></div></div></div><div class="finance-index"><div>${compactStat('CASH',fmt(accountTotal()))}${compactStat('NET WORTH',fmt(netWorth()))}${compactStat('Q FLOW',`${pnl>=0?'+':''}${fmt(pnl)}`,pnl>=0?'positive':'negative')}</div><small class="quarter-index">${game.time.year} · Q${game.time.quarter} · ${game.time.actionPoints}/${ACTIONS_PER_QUARTER} moves</small></div></section>`;
  }
  function compactNav() {
    const tabs=[['home','⌂','Life'],['identity','◉','Self'],['career','▤','School'],['bank','▣','Bank'],['market','↗','Market'],['economy','Σ','Economy'],['business','▦','Empire'],['world','◎','World']];
    return `<nav class="compact-tabbar" aria-label="Game sections">${tabs.map(([id,ic,l])=>`<button data-tab="${id}" class="compact-tab ${activeTab===id?'active':''}"><span>${ic}</span><small>${l}</small></button>`).join('')}</nav>`;
  }
  function actionDock() {
    const options=actionOptions();const featured=options.slice(0,4);
    return `<footer class="action-dock"><div class="dock-action-row">${featured.map(([id,ic,name,desc,en])=>`<button class="dock-action" data-action="life-action" data-id="${id}" ${game.time.actionPoints<1||game.player.energy<en?'disabled':''}><span>${ic}</span><b>${name}</b></button>`).join('')}<button class="dock-action more" data-action="more-actions"><span>＋</span><b>More</b></button><button class="dock-end" data-action="end-quarter"><span>Ⅱ</span><b>End Q</b></button></div><div class="dock-caption"><span>${game.time.actionPoints} decisions left</span><span>Actions affect energy · stress · skills</span><span>${game.time.year} / Q${game.time.quarter}</span></div>${compactNav()}</footer>`;
  }
  function meterTiny(label,val,cls='') { return `<div class="tiny-meter"><div><span>${label}</span><b>${Math.round(val)}</b></div><i><em class="${cls}" style="width:${clamp(val)}%"></em></i></div>`; }
  function latestEvents(n=5) { return game.journal.slice(0,n).map(e=>`<div class="event-line"><i class="${esc(e.type)}"></i><div><b>${esc(e.text)}</b><small>${e.year} · Q${e.quarter}</small></div></div>`).join('')||'<div class="empty-line">Your story starts here.</div>'; }
  function renderHome() {
    const p=game.player;const age=ageStage(p.age);const role=game.career.job?game.career.job.title:p.age<18?(p.age<6?'Early development':`Grade ${game.school.grade||1} student`):'Building a career';
    return `<div class="board-layout"><section class="board-main"><div class="board-heading"><div><span class="eyebrow">LIVE SIMULATION</span><h1>${p.age<3?'Early life':p.age<18?'Growing up':p.age<60?'Building your future':'Life & legacy'}</h1><p>${esc(p.name)} · ${age} · ${esc(role)}</p></div><span class="scene-badge">${p.age<6?'🏡 Home':p.age<18?'🏫 School':game.career.job?'💼 Work':'🌆 City life'}</span></div><div class="scene-panel"><span class="scene-date">${game.time.year} · QUARTER ${game.time.quarter}</span><h2>${game.journal[0]?esc(game.journal[0].text):'Your life is unfolding.'}</h2><p>${p.age<6?'Early experiences shape attachment, confidence and curiosity.':p.age<18?'School, friends, skills and family choices shape your future.':game.career.job?`${esc(game.career.job.firm)} · Annual salary ${fmt(game.career.job.salary)}.`:'Your decisions shape your income, assets and opportunities.'}</p><div class="scene-bottom"><span>🧠 Smarts ${Math.round(p.smarts)}</span><span>💪 Fitness ${Math.round(p.fitness)}</span><span>✨ Confidence ${Math.round(p.confidence)}</span></div></div><div class="wellbeing-row">${meterTiny('ENERGY',p.energy,'energy')}${meterTiny('STRESS',p.stress,'stress')}${meterTiny('HAPPINESS',p.happiness,'happy')}${meterTiny('HEALTH',p.health,'health')}</div></section><aside class="board-side"><div class="side-title"><b>Recent events</b><small>${game.journal.length} saved</small></div><div class="event-feed">${latestEvents(6)}</div><div class="side-note"><span>🏠 Household</span><b>${p.age<18?fmt(game.family.funds):fmt(accountTotal())}</b><small>${p.age<18?'Family reserve':'Available personal cash'}</small></div><div class="side-note"><span>🎓 Learning</span><b>${p.age<6?'Early years':p.age<18?`Grade ${game.school.grade||1}`:game.career.college|| (game.career.education>=2?'Graduate':'Skills')}</b><small>${p.age<18?`School marks ${game.school.marks}%`:'Career development'}</small></div></aside></div>`;
  }
  function renderIdentity() {
    const p=game.player;const relatives=game.family.parents.map(x=>`<div class="compact-person"><span>${x.role==='Mother'?'👩':'👨'}</span><div><b>${x.role}</b><small>Age ${x.age} · Health ${x.health}%</small></div></div>`).join('')+game.family.siblings.map(x=>`<div class="compact-person"><span>🧒</span><div><b>${esc(x.name)}</b><small>Sibling · Age ${Math.max(0,x.age)}</small></div></div>`).join('');
    return `<div class="compact-board"><div class="board-heading"><div><span class="eyebrow">CHARACTER PROFILE</span><h1>${esc(p.name)}</h1><p>${ageStage(p.age)} · ${BACKGROUND_LABEL(p.background)} · ${p.city}</p></div><span class="scene-badge">${p.presentation==='girl'?'👧':'🧒'} ${trait().emoji} ${trait().name}</span></div><div class="identity-grid"><div class="identity-attributes">${meterTiny('SMARTS',p.smarts)}${meterTiny('FITNESS',p.fitness)}${meterTiny('CREATIVITY',p.creativity)}${meterTiny('DISCIPLINE',p.discipline)}${meterTiny('CHARISMA',p.charisma)}${meterTiny('CONFIDENCE',p.confidence)}</div><div class="identity-family"><b>Family & relationships</b>${relatives}<div class="compact-person"><span>❤️</span><div><b>${p.partner?esc(p.partner.name):'No partner yet'}</b><small>${p.maritalStatus} · ${game.player.children.length} children</small></div></div><div class="family-score">Family bond <b>${Math.round(game.family.closeness)}%</b></div></div></div><div class="compact-footer-note">${trait().desc} · Family support ${Math.round(game.family.support)}%</div></div>`;
  }
  function BACKGROUND_LABEL(key) { return BACKGROUNDS[key]?.label||'Middle class'; }
  function renderCareer() {
    const p=game.player,c=game.career,sc=game.school;
    const grade=p.age<6?'Pre-school':p.age<18?`Grade ${sc.grade||1} · ${sc.schoolName}`:c.college||`Education level ${c.education}`;
    const skills=Object.entries(c.skills).map(([k,v])=>`<div class="skill-mini"><span>${skillName(k)}</span><b>${Math.round(v)}</b><i><em style="width:${v}%"></em></i></div>`).join('');
    return `<div class="compact-board"><div class="board-heading"><div><span class="eyebrow">EDUCATION & CAREER</span><h1>${p.age<6?'Learning foundations':p.age<18?'School journey':'Career & qualifications'}</h1><p>${grade}</p></div><span class="pill">${p.age<18?`Marks ${sc.marks}%`:c.job?'Employed':'Career path'}</span></div><div class="career-focus"><div><small>ACADEMIC PROGRESS</small><b>${p.age<6?'Early development':p.age<18?`${Math.round(sc.attendance)} attendance · ${Math.round(sc.effort)} study`:c.education>=2?'Graduate':c.college?`${c.collegeProgress}/${c.collegeTarget} college quarters`:'Skills & experience'}</b><p>${p.age<6?'Reading, play and bonding build future readiness.':p.age<18?'Attendance and focused study influence annual examination results.':c.job?`${esc(c.job.title)} · ${fmt(c.job.salary)} / year`:'Complete education, then apply for work.'}</p></div>${p.age>=18?`<button class="button small primary" data-action="jobs" ${c.job?'disabled':''}>Jobs</button>`:`<span class="grade-mark">${p.age<6?'👶':'📚'}</span>`}</div><div class="skills-compact">${skills}</div>${p.age>=18&&c.job?`<div class="career-stats"><span>Performance <b>${Math.round(c.performance)}%</b></span><span>Tenure <b>${c.tenure}Q</b></span><span>Experience <b>${c.experience}</b></span></div>`:''}</div>`;
  }
  function renderBank() {
    const b=game.bank,owned=b.ownedBanks||[];
    const bankCards=owned.map(x=>`<div class="owned-bank-card"><div class="owned-bank-title"><span>🏦</span><div><b>${esc(x.name)}</b><small>${x.city} · ${x.branches} branch${x.branches===1?'':'es'} · Trust ${Math.round(x.trust)}%</small></div><strong class="${x.profit>=0?'positive':'negative'}">${x.profit>=0?'+':''}${fmt(x.profit)}</strong></div><div class="owned-bank-metrics"><span>Vault <b>${fmt(x.cash)}</b></span><span>Deposits <b>${fmt(x.deposits)}</b></span><span>Loan book <b>${fmt((x.publicLoanBook||0)+x.playerLoans.reduce((v,l)=>v+l.balance,0))}</b></span></div><button class="button small secondary" data-action="manage-owned-bank" data-id="${x.id}">Open bank dashboard</button></div>`).join('');
    const bankLaunch=owned.length<3?`<div class="bank-opportunity"><span>🏛️</span><div><b>Establish another bank</b><small>₹85 lakh funding · Bank capital, lending and deposit strategy · ${3-owned.length} ownership slot(s) remaining</small></div><button class="button mini primary" data-action="establish-bank" ${!canAdult()||accountTotal()<8500000?'disabled':''}>＋ Bank</button></div>`:`<div class="small-footnote">You have reached the three-bank ownership limit for this build.</div>`;
    return `<div class="compact-board"><div class="board-heading"><div><span class="eyebrow">PERSONAL BANKING</span><h1>Bank & credit</h1><p>Control personal money, deposits, credit and owned banks.</p></div><span class="scene-badge">🏦 ${Math.round(b.creditScore)} credit</span></div><div class="bank-account-grid"><div><small>POCKET & CURRENT</small><b>${fmt((game.wallet.INR||0)+b.current)}</b></div><div><small>SAVINGS</small><b>${fmt(b.savings)}</b></div><div><small>FIXED DEPOSITS</small><b>${fmt(b.fixedDeposits.reduce((v,x)=>v+x.principal+(x.accrued||0),0))}</b></div><div><small>PERSONAL LOANS</small><b class="negative">${fmt(b.loans.reduce((v,x)=>v+x.balance,0)+owned.reduce((v,x)=>v+x.playerLoans.reduce((z,l)=>z+l.balance,0),0))}</b></div></div><div class="compact-button-row"><button class="button small primary" data-action="banking">Bank actions</button><button class="button small ghost" data-action="exchange" ${!canAdult()?'disabled':''}>FX exchange</button><button class="button small secondary" data-action="insurance" ${!canAdult()?'disabled':''}>Insurance</button></div><div class="bank-subsection"><div class="side-title"><b>Your financial institutions</b><small>${owned.length}/3 owned</small></div>${owned.length?`<div class="bank-card-grid">${bankCards}</div>`:`<div class="bank-opportunity"><span>🏛️</span><div><b>Establish your first bank</b><small>₹85 lakh funding · Deposits · Public lending · Owner credit · Branch expansion</small></div><button class="button mini primary" data-action="establish-bank" ${!canAdult()||accountTotal()<8500000?'disabled':''}>Establish</button></div>`}${owned.length?bankLaunch:''}<div class="small-footnote">Personal deposits are assets to you and liabilities to the bank. Loans from your own bank are recorded both as a bank loan asset and a personal debt. Your banks have separate cash, fixed assets, deposit liabilities, customer lending and retained equity.</div></div></div>`;
  }
  function renderMarket() {
    const holdings=Object.entries(game.portfolio.stocks).filter(x=>x[1]>0);const equityValue=holdings.reduce((a,[id,q])=>a+q*(stock(id)?.price||0),0);
    const marketRows=game.market.stocks.slice().sort(marketSort==='price'?((a,b)=>a.price-b.price):marketSort==='dividend'?((a,b)=>b.dividend-a.dividend):marketSort==='name'?((a,b)=>a.name.localeCompare(b.name)):((a,b)=>b.change-a.change));
    const rows=marketRows.map(s=>`<div class="market-row"><div class="ticker-avatar">${s.id.slice(0,1)}</div><div class="ticker-name"><b>${s.id}</b><small>${s.name} · ${s.sector}</small></div><div class="ticker-price"><b>${fmt(s.price)}</b><small class="${s.change>=0?'positive':'negative'}">${s.change>=0?'+':''}${(s.change*100).toFixed(2)}%</small></div><button class="button mini secondary" data-action="trade" data-id="${s.id}" ${!canAdult()?'disabled':''}>Trade</button></div>`).join('');
    return `<div class="compact-board market-board"><div class="board-heading"><div><span class="eyebrow">INVESTMENT EXCHANGE</span><h1>Markets</h1><p>Fictional listed companies · Simulated prices, not live trading.</p></div><div class="market-index"><small>INDEX</small><b>${num(game.market.index)}</b><span>Q ${game.market.sentiment>=0?'+':''}${game.market.sentiment.toFixed(1)}</span></div></div><div class="market-product-row"><div><small>SHARES</small><b>${fmt(equityValue)}</b></div><div><small>MUTUAL FUND</small><b>${fmt(game.portfolio.fundValue)}</b></div><div><small>GOLD</small><b>${fmt(game.portfolio.goldValue)}</b></div><div><small>GOLD RATE</small><b>${fmt(game.market.goldPrice)}/g</b></div></div><div class="market-sort"><div class="market-sort-chips"><button data-action="market-sort" data-id="movers" class="${marketSort==='movers'?'active':''}">Movers</button><button data-action="market-sort" data-id="price" class="${marketSort==='price'?'active':''}">Price</button><button data-action="market-sort" data-id="dividend" class="${marketSort==='dividend'?'active':''}">Dividend</button><button data-action="market-sort" data-id="name" class="${marketSort==='name'?'active':''}">Name</button></div><span>Brokerage 0.15% · ${holdings.length} positions</span></div><div class="market-list">${rows}</div><div class="market-trade-tools"><button class="button small primary" data-action="invest-fund" ${!canAdult()?'disabled':''}>Fund</button><button class="button small secondary" data-action="invest-gold" ${!canAdult()?'disabled':''}>Gold</button><button class="button small ghost" data-action="exchange" ${!canAdult()?'disabled':''}>Currency</button></div></div>`;
  }
  function renderEconomy() {
    const q=game.economy.quarter,h=game.economy.history[0]||{};const net=q.income+q.support+q.assetSales+q.financing-q.expenses-q.investments-q.debtService+q.marketChange;
    const businessRevenue=game.businesses.reduce((v,x)=>v+x.revenue,0),businessCosts=game.businesses.reduce((v,x)=>v+x.costs,0),businessProfit=game.businesses.reduce((v,x)=>v+x.profit,0),bankProfit=game.bank.ownedBanks.reduce((v,x)=>v+(x.profit||0),0);
    const rows=[['Earned income',q.income,'positive'],['Household support',q.support,'positive'],['Asset sales',q.assetSales,'positive'],['Financing / loans',q.financing,'positive'],['Living & operating expenses',-q.expenses,'negative'],['Asset purchases / investment',-q.investments,'neutral'],['Debt repayments',-q.debtService,'negative'],['Market valuation change',q.marketChange,q.marketChange>=0?'positive':'negative']];
    return `<div class="compact-board"><div class="board-heading"><div><span class="eyebrow">ECONOMIC VIEW</span><h1>Money in · Money out</h1><p>Personal cash flow is separated from investment purchases and business results.</p></div><span class="scene-badge">${game.time.year} · Q${game.time.quarter}</span></div><div class="economic-summary"><div><small>QUARTER NET CASH FLOW</small><b class="${net>=0?'positive':'negative'}">${net>=0?'+':''}${fmt(net)}</b></div><div><small>PERSONAL CASH FLOW</small><b>${fmt(q.income+q.support-q.expenses)}</b></div></div><div class="economic-columns"><div class="economic-ledger">${rows.map(([l,v,c])=>`<div class="ledger-row"><span>${l}</span><b class="${c==='neutral'?'':c}">${v>=0?'+':''}${fmt(v)}</b></div>`).join('')}</div><div class="economic-side"><div class="econ-mini"><small>COMPANY REVENUE</small><b>${fmt(businessRevenue)}</b></div><div class="econ-mini"><small>COMPANY COSTS</small><b>${fmt(businessCosts)}</b></div><div class="econ-mini"><small>COMPANY PROFIT</small><b class="${businessProfit>=0?'positive':'negative'}">${fmt(businessProfit)}</b></div><div class="econ-mini"><small>OWNED BANK PROFIT</small><b class="${bankProfit>=0?'positive':'negative'}">${fmt(bankProfit)}</b></div></div></div><div class="economy-history"><div class="side-title"><b>Last quarter result</b><small>${h.year?`${h.year} · Q${h.quarter}`:'No settled quarter yet'}</small></div><div class="history-pills"><span>Income ${fmt(h.income||0)}</span><span>Expenses ${fmt(h.expenses||0)}</span><span>Investments ${fmt(h.investments||0)}</span><span>Net ${fmt(h.net||0)}</span></div></div><div class="small-footnote">Purchasing stocks, gold, FDs, property or companies is classified as investment—not a consumption expense. Loan proceeds are financing, not earnings. Market changes are unrealised valuation changes.</div></div>`;
  }
  function renderBusiness() {
    const companies=game.businesses.map(b=>{const sp=BUSINESS_TYPES.find(x=>x.id===b.type);return `<div class="empire-row"><span>${sp.emoji}</span><div><b>${esc(b.name)}</b><small>${b.city} · ${b.employees} staff · ${num(b.inventory)} inventory</small></div><strong class="${b.profit>=0?'positive':'negative'}">${b.profit>=0?'+':''}${fmt(b.profit)}</strong><button class="button mini secondary" data-action="manage-business" data-id="${b.id}">Manage</button></div>`;}).join('');
    return `<div class="compact-board"><div class="board-heading"><div><span class="eyebrow">CORPORATE EMPIRE</span><h1>Companies & assets</h1><p>Operating businesses, real estate and banking ownership.</p></div><button class="button small primary" data-action="new-business" ${!canAdult()||game.businesses.length>=5?'disabled':''}>＋ Company</button></div><div class="empire-metrics"><div><small>COMPANIES</small><b>${game.businesses.length}</b></div><div><small>LAST PROFIT</small><b class="${game.businesses.reduce((v,x)=>v+x.profit,0)>=0?'positive':'negative'}">${fmt(game.businesses.reduce((v,x)=>v+x.profit,0))}</b></div><div><small>ASSET VALUE</small><b>${fmt(game.businesses.reduce((v,x)=>v+x.value,0)+game.properties.reduce((v,x)=>v+x.value,0))}</b></div></div><div class="empire-list">${companies||'<div class="empty-line">No companies yet. Establish your first company when you reach adulthood.</div>'}</div><div class="empire-bottom"><div class="supply-mini"><span>🌾 Farm</span><i>→</i><span>🏭 Mill</span><i>→</i><span>🛒 Retail</span></div><button class="button mini ghost" data-action="property-market" ${!canAdult()?'disabled':''}>Property market</button></div></div>`;
  }
  function renderWorld() {
    const cities=Object.entries(CITIES);return `<div class="compact-board"><div class="board-heading"><div><span class="eyebrow">WORLD & SOCIETY</span><h1>${city().emoji} ${game.player.city}</h1><p>${CITIES[game.player.city].state} · Cost ${city().cost.toFixed(2)} · Demand ${city().demand.toFixed(2)}</p></div><span class="scene-badge">🇮🇳 INDIA</span></div><div class="world-current"><div><small>HOUSEHOLD / FAMILY</small><b>${game.player.maritalStatus} · ${game.player.children.length} children</b></div><div><small>INFLATION</small><b>${game.market.inflation.toFixed(1)}%</b></div><div><small>WAGES INDEX</small><b>${city().wage.toFixed(2)}</b></div></div><div class="city-picker"><label for="city-select">Relocate to</label><select id="city-select">${cities.map(([n,c])=>`<option value="${n}" ${n===game.player.city?'selected':''}>${c.emoji} ${n} · ${c.state}</option>`).join('')}</select><button class="button small secondary" data-action="move-selected-city" ${!canAdult()?'disabled':''}>Move · ₹18,000</button></div><div class="world-family"><span>👪 Family bond <b>${Math.round(game.family.closeness)}%</b></span><span>❤️ Partner <b>${game.player.partner?Math.round(game.player.partner.affection):'—'}</b></span><span>👶 Children <b>${game.player.children.length}</b></span></div>${game.player.partner?`<div class="compact-button-row"><button class="button small secondary" data-action="marry">${game.player.maritalStatus==='Engaged'?'Wedding':'Relationship'}</button><button class="button small ghost" data-action="have-child" ${game.player.maritalStatus!=='Married'||game.player.age<21?'disabled':''}>Have child</button></div>`:''}</div>`;
  }
  function renderDead() { return `<div class="compact-board death-card"><div>🕯️</div><span class="eyebrow">LIFE COMPLETE</span><h1>${esc(game.player.name)}'s journey has ended.</h1><p>Your story lasted ${game.player.age} years. Your family, assets, companies and financial legacy remain recorded.</p><div class="metric-grid">${stat('Final net worth',fmt(netWorth()))}${stat('Companies',game.businesses.length)}${stat('Children',game.player.children.length)}${stat('Years lived',game.player.age)}</div><button class="button primary" data-action="new-life">Begin a new life</button><button class="button secondary" data-action="export-save">Export your legacy</button></div>`; }
  function render() {
    if(!game) return renderSetup();
    if(!game.player.alive) { app.innerHTML=`<div class="game-frame">${header()}${hudStrip()}<main class="stage-view">${renderDead()}</main>${actionDock()}</div>`;return; }
    const pages={home:renderHome,identity:renderIdentity,career:renderCareer,bank:renderBank,market:renderMarket,economy:renderEconomy,business:renderBusiness,world:renderWorld};
    const page=pages[activeTab]||renderHome;
    app.innerHTML=`<div class="game-frame">${header()}${hudStrip()}<main class="stage-view" aria-live="polite"><div class="stage-toolbar"><b>${({home:'Life dashboard',identity:'Character',career:'Education & career',bank:'Banking',market:'Stock market',economy:'Economic report',business:'Corporate empire',world:'World & society'})[activeTab]||'Life dashboard'}</b><span>${game.time.actionPoints} moves remaining</span></div><div class="stage-content">${page()}</div></main>${actionDock()}</div>`;
  }

  function renderSetup() {
    const old=oldSaveExists();
    app.innerHTML=`<main class="setup-shell"><div class="setup-brand"><div class="brand-mark big">L<span>&</span>E</div><span class="eyebrow">A LIFE SIMULATION</span><h1>LIFE <em>&</em> EMPIRE</h1><p>Born into a world. Shape a life. Build a legacy.</p></div><section class="setup-card"><div class="section-head"><div><span class="eyebrow">CREATE YOUR CHARACTER</span><h2>Begin at birth</h2></div><span class="pill">India · ${START_YEAR}</span></div><form id="new-game-form"><label>Character name<input name="name" maxlength="28" required placeholder="Your character's name"></label><div class="form-grid"><label>Character presentation<select name="presentation"><option value="neutral">Neutral</option><option value="boy">Boy / male presentation</option><option value="girl">Girl / female presentation</option></select></label><label>Appearance style<select name="appearance"><option value="classic">Classic</option><option value="athletic">Sporty</option><option value="creative">Creative</option><option value="scholar">Scholar</option></select></label></div><label>Starting city<select name="city">${Object.entries(CITIES).map(([n,c])=>`<option value="${n}" ${n==='Hyderabad'?'selected':''}>${n}, ${c.state}</option>`).join('')}</select></label><label>Family background<select name="background"><option value="working">Working class · modest household</option><option value="middle" selected>Middle class · stable household</option><option value="affluent">Affluent · well-resourced household</option></select></label><label>Innate personality trait<select name="trait">${Object.entries(TRAITS).map(([id,t])=>`<option value="${id}" ${id==='curious'?'selected':''}>${t.emoji} ${t.name} — ${t.desc}</option>`).join('')}</select></label><label>Sibling at birth<select name="sibling"><option value="no">No sibling in household</option><option value="yes">One younger sibling (arrives later)</option></select></label><div class="notice">You begin at age zero. Your parents manage the household while you grow. Decisions become age-appropriate as you progress through childhood, school, adulthood and later life.</div><button class="button primary full">Create character & begin life →</button></form>${old?`<div class="warning-box"><b>Existing save detected</b><p>Your previous save is stored separately and will not be overwritten by this new birth-to-legacy version. Export it from your old build before switching if you need a backup.</p></div>`:''}<p class="muted small center">Build ${BUILD} · Saves locally · Offline-capable · No account required</p></section><button class="button ghost" data-action="install-guide">Install this game on your phone</button></main>`;
  }

  function exportSave() { const blob=new Blob([JSON.stringify(game,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`life-and-empire-${game.player.name.toLowerCase().replace(/[^a-z0-9]+/g,'-')}-${game.time.year}-q${game.time.quarter}-v3.json`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);toast('Backup exported.'); }
  function importSave(file) { if(!file)return;const r=new FileReader();r.onload=()=>{try{const s=JSON.parse(String(r.result));if(!validSave(s))throw new Error('This backup is not a compatible LIFE & EMPIRE save.');game=s;save();$('.modal-backdrop')?.remove();activeTab='home';render();toast('Save restored.');}catch(e){toast(e.message||'Could not restore backup.');}};r.onerror=()=>toast('Could not read file.');r.readAsText(file); }
  function installGuide() {
    if(deferredInstallPrompt) { deferredInstallPrompt.prompt(); deferredInstallPrompt.userChoice.then(choice=>{if(choice.outcome==='accepted')toast('Installation accepted. Look for LIFE & EMPIRE on your home screen.');deferredInstallPrompt=null;});return; }
    showModal('Install LIFE & EMPIRE on Android',`<div class="install-steps"><div class="install-step"><b>1</b><div><strong>Publish the new folder to GitHub Pages</strong><p>Upload the contents of this project to the repository root and enable HTTPS Pages.</p></div></div><div class="install-step"><b>2</b><div><strong>Open the published link in Chrome</strong><p>Use the HTTPS GitHub Pages URL, not the GitHub repository page or the downloaded index.html file.</p></div></div><div class="install-step"><b>3</b><div><strong>Install / Add to Home screen</strong><p>Tap Chrome ⋮ → Install app. If Chrome says “Add to Home screen”, choose that. The game opens in its own app-like window.</p></div></div><div class="notice">The install option appears only after the website is served over HTTPS with a valid web app manifest, icons and service worker. This build includes those files. Browser/Android policy decides the exact menu label.</div></div>`);
  }
  function newLife() { showModal('Start a new life?',`<p class="muted">Your current save will remain available as a JSON export only if you export it first. This action replaces the v0.2 local save.</p><div class="button-row"><button class="button danger" data-action="confirm-new-life">Create new life</button><button class="button ghost" data-action="close-modal">Cancel</button></div>`); }

  app.addEventListener('click',event=>{
    const tab=event.target.closest('[data-tab]');if(tab){activeTab=tab.dataset.tab;render();return;}
    const btn=event.target.closest('[data-action]');if(!btn)return;
    const a=btn.dataset.action,id=btn.dataset.id;
    if(a==='settings')return settingsModal();if(a==='install-guide')return installGuide();if(a==='expand-bank')return ownBankBranchModal(id);if(a==='close-modal')return btn.closest('.modal-backdrop')?.remove();
    if(a==='export-save')return exportSave();if(a==='new-life')return newLife();if(a==='confirm-new-life'){game=null;localStorage.removeItem(SAVE_KEY);$('.modal-backdrop')?.remove();renderSetup();return;}
    if(a==='end-quarter')return endQuarterConfirm();if(a==='confirm-end-quarter'){ $('.modal-backdrop')?.remove();settleQuarter();return;}
    if(a==='life-action'){if(id==='study'&&game.player.age>=18)return studyFocusModal();return perform(id,{skill:btn.dataset.skill});}
    if(a==='jobs')return jobApplyModal();if(a==='apply-job')return applyJob(id);if(a==='college')return collegeModal();if(a==='postgrad')return showModal('Postgraduate study',`<form id="postgrad-form"><label>Course<select name="course"><option>Master of Business Administration</option><option>Master of Science</option><option>Master of Arts</option><option>Master of Technology</option></select></label><p class="muted">First instalment ₹35,000. Complete eight study quarters. This unlocks senior roles requiring education level 3.</p><button class="button primary">Enrol</button></form>`);if(a==='finish-college')return careerAction('finish-college');if(a==='promotion')return careerAction('promotion');if(a==='resign')return careerAction('resign');if(a==='marry')return marryOrPropose();if(a==='have-child')return haveChild();
    if(a==='more-actions')return showModal('Available actions',`<div class="quick-action-list">${actionOptions().map(x=>`<button class="quick-action" data-action="life-action" data-id="${x[0]}" ${game.time.actionPoints<1||game.player.energy<x[4]?'disabled':''}><span>${x[1]}</span><b>${x[2]}</b><small>⚡ ${x[4]} energy · ${x[3]}</small></button>`).join('')}</div>`);if(a==='banking')return bankModal();if(a==='establish-bank')return establishBankModal();if(a==='manage-owned-bank')return ownedBankModal(id);if(a==='repay-own-bank')return ownBankRepayModal(btn.dataset.bankId,id);if(a==='exchange')return showExchangeModal();if(a==='trade')return tradeModal(id);if(a==='market-sort'){marketSort=['movers','price','dividend','name'].includes(id)?id:'movers';render();return;}if(a==='invest-fund')return investModal('fund');if(a==='invest-gold')return investModal('gold');
    if(a==='found-business')return businessStart(id);if(a==='new-business')return businessModal();if(a==='manage-business')return businessManageModal(id);if(a==='hire'||a==='fire'||a==='marketing'||a==='quality')return manageBusiness(a,{id});
    if(a==='buy-property')return buyProperty(id);if(a==='property-market')return propertyModal();if(a==='move-city')return moveCity(id);if(a==='move-selected-city'){const n=$('#city-select')?.value;if(n)return moveCity(n);}
    if(a==='repay-loan'){const loan=game.bank.loans.find(x=>x.id===id);if(!loan)return;showModal('Repay loan',`<form id="loan-repay-form"><input type="hidden" name="id" value="${id}"><label>Repayment amount<input name="amount" type="number" min="1" max="${Math.floor(loan.balance)}" required value="${Math.floor(loan.balance)}"></label><p class="muted">Outstanding: ${fmt(loan.balance)}</p><button class="button primary">Make repayment</button></form>`);return;}
    if(a==='insurance'){if(!canAdult())return toast('Personal health cover unlocks at age 18.');if(game.bank.insurance)return toast('Health cover is already active.');const cost=18000;if(accountTotal()<cost)return toast(`Health cover costs ${fmt(cost)} for one simulated year.`);if(!consumeAction(1,2,1))return;spend(cost,'expense');game.bank.insurance=true;game.bank.insuranceQuarters=4;log('You purchased a basic health cover policy for the simulation year.','bank');save();render();return;}
  });
  app.addEventListener('submit',event=>{
    const f=event.target;event.preventDefault();const d=Object.fromEntries(new FormData(f).entries());
    if(f.id==='new-game-form')return createGame(d);
    if(f.id==='study-focus-form'){ $('.modal-backdrop')?.remove();return perform('study',{skill:d.skill}); }
    if(f.id==='establish-bank-form'){const cost=8500000;if(!canAdult())return toast('You can establish a bank from age 18.');if(game.bank.ownedBanks.length>=3)return toast('You can own up to three banks in this build.');if(accountTotal()<cost)return toast(`You need ${fmt(cost)} in personal funding.`);if(!consumeAction(1,6,3))return;spend(cost,'investment');game.bank.ownedBanks.push({id:`ownbank-${Date.now()}`,name:String(d.name||'Dominion Bank').trim().slice(0,28),city:d.city||game.player.city,capital:5000000,cash:5000000,deposits:0,playerDeposits:0,publicLoanBook:0,playerLoans:[],loanRate:.018,depositRate:.035,profit:0,revenue:0,costs:0,fixedAssets:0,branches:1,trust:45,quarterHistory:[]});log(`You founded ${String(d.name||'Dominion Bank').trim()} in ${d.city}. The bank begins with ₹50 lakh paid-up capital.`, 'bank');$('.modal-backdrop')?.remove();save();render();return toast('Your bank has opened.');}if(f.id==='own-bank-deposit-form')return ownBankAction('deposit',d.amount,{bankId:d.bankId});if(f.id==='own-bank-withdraw-form')return ownBankAction('withdraw',d.amount,{bankId:d.bankId});if(f.id==='own-bank-loan-form')return ownBankAction('loan',d.amount,{bankId:d.bankId,term:d.term});if(f.id==='own-bank-rate-form')return ownBankAction('rate',0,{bankId:d.bankId,rate:Number(d.rate)/100});if(f.id==='own-bank-deposit-rate-form')return ownBankAction('deposit-rate',0,{bankId:d.bankId,rate:Number(d.rate)/100});if(f.id==='own-bank-branch-form')return ownBankAction('branch',1250000,{bankId:d.bankId});if(f.id==='own-bank-repay-form')return ownBankAction('repay',d.amount,{bankId:d.bankId,loanId:d.loanId});
    if(f.id==='bank-deposit-form')return bankAction('deposit',d.amount);
    if(f.id==='bank-withdraw-form')return bankAction('withdraw',d.amount);
    if(f.id==='bank-fd-form')return bankAction('fd',d.amount,d);
    if(f.id==='bank-loan-form')return bankAction('loan',d.amount,d);
    if(f.id==='stock-buy-form')return marketTrade('buy-stock',d);
    if(f.id==='stock-sell-form')return marketTrade('sell-stock',d);
    if(f.id==='fund-buy-form')return marketTrade('fund-buy',d);
    if(f.id==='fund-sell-form')return marketTrade('fund-sell',d);
    if(f.id==='gold-buy-form')return marketTrade('gold-buy',d);
    if(f.id==='gold-sell-form')return marketTrade('gold-sell',d);
    if(f.id==='exchange-form')return doExchange(d);
    if(f.id==='college-form')return careerAction('enroll-college',{course:d.course,fee:18000});
    if(f.id==='postgrad-form'){ $('.modal-backdrop')?.remove(); return careerAction('enroll-postgrad',{course:d.course,fee:35000}); }
    if(f.id==='biz-capital-form'){manageBusiness('inject',d);return;}
    if(f.id==='biz-price-form'){manageBusiness('price',d);return;}
    if(f.id==='biz-withdraw-form'){manageBusiness('withdraw',d);return;}
    if(f.id==='loan-repay-form'){return bankAction('repay-loan',d.amount,{id:d.id});}
  });
  app.addEventListener('change',event=>{if(event.target.id==='import-save')importSave(event.target.files?.[0]);});
  window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();deferredInstallPrompt=event;document.body.classList.add('can-install');});
  window.addEventListener('appinstalled',()=>{deferredInstallPrompt=null;toast('LIFE & EMPIRE installed.');});
  if('serviceWorker' in navigator && location.protocol==='https:') window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(e=>console.info('PWA worker registration failed',e)));
  if(!loadGame())renderSetup();else render();
})();
