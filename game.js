(() => {
  'use strict';

  const SAVE_KEY = 'life-and-empire-save-v1';
  const SAVE_VERSION = 1;
  const BUILD_VERSION = '0.1.1';
  const START_YEAR = 2026;
  const app = document.getElementById('app');
  let state = null;
  let activeTab = 'home';
  let toastTimer = null;
  let loadError = '';

  const CURRENCIES = {
    INR: { name: 'Indian Rupee', symbol: '₹', rate: 1 },
    USD: { name: 'US Dollar', symbol: '$', rate: 84 },
    AED: { name: 'UAE Dirham', symbol: 'د.إ', rate: 22.9 },
    SGD: { name: 'Singapore Dollar', symbol: 'S$', rate: 63 },
    GBP: { name: 'British Pound', symbol: '£', rate: 107 },
    EUR: { name: 'Euro', symbol: '€', rate: 91 }
  };

  const CITIES = {
    Hyderabad: { region: 'Telangana', cost: 1.00, mood: 'Technology & services', emoji: '🌆' },
    Bengaluru: { region: 'Karnataka', cost: 1.24, mood: 'Technology & startups', emoji: '💻' },
    Mumbai: { region: 'Maharashtra', cost: 1.48, mood: 'Finance & entertainment', emoji: '🌃' },
    Delhi: { region: 'Delhi NCR', cost: 1.22, mood: 'Government & commerce', emoji: '🏛️' },
    Chennai: { region: 'Tamil Nadu', cost: 1.08, mood: 'Industry & technology', emoji: '⚓' },
    Pune: { region: 'Maharashtra', cost: 1.15, mood: 'Education & industry', emoji: '🎓' },
    Kolkata: { region: 'West Bengal', cost: 0.96, mood: 'Culture & commerce', emoji: '🎭' },
    Jaipur: { region: 'Rajasthan', cost: 0.91, mood: 'Tourism & trade', emoji: '🏰' },
    Ahmedabad: { region: 'Gujarat', cost: 0.94, mood: 'Trade & manufacturing', emoji: '🏭' }
  };

  const JOBS = [
    { id: 'retail', title: 'Retail Associate', company: 'Urban Retail Group', salary: 240000, education: 0, skill: null, requirement: 0, description: 'An accessible first job in sales and customer service.', field: 'communication' },
    { id: 'support', title: 'Customer Support Associate', company: 'Connect Services', salary: 360000, education: 0, skill: 'communication', requirement: 10, description: 'Build communication skills in a growing service sector.', field: 'communication' },
    { id: 'sales', title: 'Sales Executive', company: 'Northstar Commerce', salary: 420000, education: 0, skill: 'business', requirement: 8, description: 'Work with customers, targets and commercial teams.', field: 'business' },
    { id: 'developer', title: 'Junior Software Developer', company: 'BlueGrid Technologies', salary: 600000, education: 1, skill: 'tech', requirement: 15, description: 'An entry route into the technology industry.', field: 'tech' },
    { id: 'analyst', title: 'Junior Data Analyst', company: 'MetricWorks', salary: 570000, education: 1, skill: 'finance', requirement: 15, description: 'Turn business data into useful decisions.', field: 'finance' },
    { id: 'business_analyst', title: 'Business Analyst', company: 'Summit Consulting', salary: 840000, education: 2, skill: 'finance', requirement: 28, description: 'Connect operations, data and commercial strategy.', field: 'finance' },
    { id: 'manager', title: 'Operations Manager', company: 'Apex Industries', salary: 1080000, education: 2, skill: 'business', requirement: 35, description: 'Lead teams, budgets and operating performance.', field: 'business' }
  ];

  const BUSINESS_TYPES = [
    { id: 'food', name: 'Food Stall', category: 'Local commerce', cost: 18000, profit: 2600, risk: 'Low', description: 'A small food business with steady local demand.' },
    { id: 'store', name: 'Online Store', category: 'E-commerce', cost: 45000, profit: 6200, risk: 'Medium', description: 'Sell products to customers across India.' },
    { id: 'farm', name: 'Small Farm', category: 'Agriculture', cost: 85000, profit: 7800, risk: 'Medium', description: 'Build an agricultural business tied to seasonal demand.' },
    { id: 'software', name: 'Software Studio', category: 'Technology', cost: 125000, profit: 14500, risk: 'High', description: 'Create digital products and provide technology services.' }
  ];

  const INVESTMENTS = [
    { id: 'fd', name: 'Fixed Deposit', rate: 0.06, range: 'Stable', risk: 'Low', detail: 'A predictable annual return in the simulation.' },
    { id: 'index', name: 'Index Fund', rate: 0.10, range: 'Variable', risk: 'Medium', detail: 'Broad market exposure with gains and losses.' },
    { id: 'gold', name: 'Gold', rate: 0.07, range: 'Variable', risk: 'Medium', detail: 'A defensive asset whose price can fluctuate.' }
  ];

  const fmt = (value, currency = 'INR', maximumFractionDigits = 0) => {
    const meta = CURRENCIES[currency] || CURRENCIES.INR;
    const n = Number(value || 0);
    try {
      return new Intl.NumberFormat('en-IN', { maximumFractionDigits, minimumFractionDigits: 0 }).format(n) + ' ' + currency;
    } catch (_) {
      return meta.symbol + Math.round(n).toLocaleString('en-IN');
    }
  };
  const inr = (value) => '₹' + Math.round(Number(value || 0)).toLocaleString('en-IN');
  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const clamp = (n, min = 0, max = 100) => Math.max(min, Math.min(max, n));
  const city = () => CITIES[state.player.city] || CITIES.Hyderabad;
  const save = () => {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(state));
      return true;
    } catch (error) {
      console.error('Save failed', error);
      showToast('Could not save. Check device storage.');
      return false;
    }
  };

  function createNewGame(name, cityName, background) {
    const safeName = String(name || '').trim().slice(0, 24);
    if (!safeName) return false;
    if (!Object.prototype.hasOwnProperty.call(CITIES, cityName)) cityName = 'Hyderabad';
    const backgrounds = {
      working: { label: 'Working class', cash: 35000, expense: 9500, family: 58, intelligence: 52, charisma: 48 },
      middle: { label: 'Middle class', cash: 70000, expense: 13500, family: 65, intelligence: 56, charisma: 52 },
      affluent: { label: 'Affluent', cash: 240000, expense: 23000, family: 68, intelligence: 60, charisma: 60 }
    };
    const b = backgrounds[background] || backgrounds.middle;
    state = {
      version: SAVE_VERSION,
      player: {
        name: safeName, city: cityName, age: 18, health: 82, happiness: 72,
        intelligence: b.intelligence, fitness: 48, charisma: b.charisma, background,
        backgroundLabel: b.label, debt: 0
      },
      time: { year: START_YEAR, quarter: 1, actionsThisYear: 0 },
      wallet: { INR: b.cash, USD: 0, AED: 0, SGD: 0, GBP: 0, EUR: 0 },
      career: { education: 0, educationProgress: 0, job: null, experience: 0, tenure: 0, skills: { tech: 2, business: 2, finance: 2, communication: 5 } },
      relationships: [
        { id: 'family', name: 'Family', kind: 'Family', level: b.family, icon: '🏠' },
        { id: 'friends', name: 'Friends', kind: 'Friends', level: 38, icon: '🫂' },
        { id: 'network', name: 'Professional network', kind: 'Network', level: 12, icon: '🤝' }
      ],
      businesses: [],
      investments: { fd: 0, index: 0, gold: 0 },
      journal: [
        { year: START_YEAR, quarter: 1, text: `A new chapter begins in ${cityName}. You are 18, with a world of possibilities ahead.`, type: 'start' }
      ],
      stats: { totalEarned: 0, totalSpent: 0, bestNetWorth: b.cash, jobsHeld: 0, businessesStarted: 0 }
    };
    activeTab = 'home';
    loadError = '';
    const saved = save();
    render();
    return saved;
  }

  function validSave(candidate) {
    const finite = (value, min = 0, max = Number.MAX_SAFE_INTEGER) =>
      typeof value === 'number' && Number.isFinite(value) && value >= min && value <= max;
    if (!candidate || candidate.version !== SAVE_VERSION) return false;

    const p = candidate.player;
    const t = candidate.time;
    const c = candidate.career;
    const backgrounds = { working: 'Working class', middle: 'Middle class', affluent: 'Affluent' };

    if (!p || typeof p.name !== 'string' || !p.name.trim() || p.name.length > 24 ||
        !Object.prototype.hasOwnProperty.call(CITIES, p.city) ||
        !Object.prototype.hasOwnProperty.call(backgrounds, p.background) ||
        p.backgroundLabel !== backgrounds[p.background]) return false;
    if (!finite(p.age, 18, 9999) ||
        !['health', 'happiness', 'intelligence', 'fitness', 'charisma'].every(key => finite(p[key], 0, 100)) ||
        !finite(p.debt)) return false;

    if (!t || !finite(t.year, START_YEAR, 9999) || !Number.isInteger(t.year) ||
        !finite(t.quarter, 1, 4) || !Number.isInteger(t.quarter) ||
        !finite(t.actionsThisYear) || !Number.isInteger(t.actionsThisYear)) return false;
    // actionsThisYear is the legacy schema name; it stores the lifetime action count.
    if (t.actionsThisYear !== (t.year - START_YEAR) * 4 + (t.quarter - 1)) return false;

    const currencyCodes = Object.keys(CURRENCIES);
    if (!candidate.wallet || Object.keys(candidate.wallet).length !== currencyCodes.length ||
        !currencyCodes.every(code => finite(candidate.wallet[code]))) return false;
    if (!c || !finite(c.education, 0, 3) || !Number.isInteger(c.education) ||
        !finite(c.educationProgress) || !finite(c.experience) || !finite(c.tenure)) return false;
    if (!c.skills || !['tech', 'business', 'finance', 'communication'].every(key => finite(c.skills[key], 0, 100))) return false;
    if (c.job !== null) {
      const knownJob = c.job && JOBS.find(job => job.id === c.job.id);
      if (!knownJob || c.job.title !== knownJob.title || c.job.company !== knownJob.company ||
          c.job.field !== knownJob.field || !finite(c.job.salary, knownJob.salary) ||
          !Number.isInteger(c.job.level) || !finite(c.job.level, 1)) return false;
    }

    if (!candidate.investments || Object.keys(candidate.investments).length !== 3 ||
        !['fd', 'index', 'gold'].every(key => finite(candidate.investments[key]))) return false;
    if (!Array.isArray(candidate.relationships) || candidate.relationships.length < 3 || candidate.relationships.length > 50 ||
        !['family', 'friends', 'network'].every(id => candidate.relationships.some(r => r && r.id === id)) ||
        new Set(candidate.relationships.map(r => r && r.id)).size !== candidate.relationships.length ||
        !candidate.relationships.every(r => r && typeof r.id === 'string' && r.id.length <= 80 &&
          typeof r.name === 'string' && r.name.length <= 80 && typeof r.kind === 'string' && r.kind.length <= 80 &&
          finite(r.level, 0, 100))) return false;

    if (!Array.isArray(candidate.businesses) || candidate.businesses.length > 3 ||
        !candidate.businesses.every(b => {
          const knownType = b && BUSINESS_TYPES.find(type => type.id === b.type);
          return !!knownType && typeof b.id === 'string' && b.id.length <= 120 &&
            typeof b.name === 'string' && b.name === knownType.name && b.category === knownType.category &&
            b.risk === knownType.risk && Number.isInteger(b.level) && finite(b.level, 1) &&
            finite(b.quarterlyProfit, 1) && finite(b.value, 1);
        })) return false;
    if (new Set(candidate.businesses.map(b => b.id)).size !== candidate.businesses.length) return false;

    if (!Array.isArray(candidate.journal) || candidate.journal.length > 80 ||
        !candidate.journal.every(entry => entry && typeof entry.text === 'string' && entry.text.length <= 2000 &&
          Number.isInteger(entry.year) && finite(entry.year, START_YEAR, 9999) &&
          Number.isInteger(entry.quarter) && finite(entry.quarter, 1, 4))) return false;

    const st = candidate.stats;
    if (!st || !['totalEarned', 'totalSpent', 'bestNetWorth', 'jobsHeld', 'businessesStarted'].every(key => finite(st[key])) ||
        !Number.isInteger(st.jobsHeld) || !Number.isInteger(st.businessesStarted)) return false;
    return true;
  }

  function loadGame() {
    let raw;
    try {
      raw = localStorage.getItem(SAVE_KEY);
      if (!raw) { loadError = ''; return false; }
      const parsed = JSON.parse(raw);
      if (!validSave(parsed)) throw new Error('The saved game is incomplete, damaged or from an unsupported version.');
      state = parsed;
      loadError = '';
      return true;
    } catch (error) {
      console.warn('Could not load saved game; preserving original data for recovery.', error.message || error);
      // Preserve unreadable data. A failed load must never silently destroy a player's only save.
      loadError = error.message || 'The saved game could not be loaded.';
      return false;
    }
  }

  function showToast(message) {
    let node = document.querySelector('.toast');
    if (node) node.remove();
    node = document.createElement('div');
    node.className = 'toast';
    node.textContent = message;
    document.body.appendChild(node);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => node.remove(), 2500);
  }

  function addLog(text, type = 'life') {
    state.journal.unshift({ year: state.time.year, quarter: state.time.quarter, text, type });
    state.journal = state.journal.slice(0, 80);
  }

  function netWorth() {
    const walletValue = Object.entries(state.wallet).reduce((sum, [code, amount]) => sum + Number(amount || 0) * (CURRENCIES[code]?.rate || 1), 0);
    const investments = Object.values(state.investments).reduce((sum, amount) => sum + Number(amount || 0), 0);
    const businessValue = state.businesses.reduce((sum, b) => sum + Number(b.value || 0), 0);
    return walletValue + investments + businessValue - Number(state.player.debt || 0);
  }

  function addMoney(amount, currency = 'INR') {
    if (!Number.isFinite(amount)) return;
    state.wallet[currency] = Number(state.wallet[currency] || 0) + amount;
    if (amount > 0) state.stats.totalEarned += amount * (CURRENCIES[currency]?.rate || 1);
  }

  function spendINR(amount) {
    amount = Number(amount);
    if (!Number.isFinite(amount) || amount <= 0 || state.wallet.INR < amount) return false;
    state.wallet.INR -= amount;
    state.stats.totalSpent += amount;
    return true;
  }

  function relationship(id) {
    return state.relationships.find((r) => r.id === id);
  }

  function changeRelationship(id, amount) {
    const r = relationship(id);
    if (r) r.level = clamp(r.level + amount);
  }

  function applyJob(jobId) {
    const job = JOBS.find((j) => j.id === jobId);
    if (!job) return;
    if (state.career.job) return showToast('You already have a job. Resign before applying elsewhere.');
    const skill = job.skill ? state.career.skills[job.skill] : 0;
    if (state.career.education < job.education || skill < job.requirement) return showToast('You do not meet this role’s requirements yet.');
    const score = state.player.intelligence * 0.18 + state.player.charisma * 0.16 + skill * 0.65 + state.career.experience * 1.8;
    const chance = clamp(48 + score - job.requirement * 0.7, 25, 94);
    const roll = Math.random() * 100;
    if (roll <= chance) {
      state.career.job = { id: job.id, title: job.title, company: job.company, salary: job.salary, field: job.field, level: 1 };
      state.career.tenure = 0;
      state.stats.jobsHeld += 1;
      addLog(`You were hired as ${job.title} at ${job.company}. Annual salary: ${inr(job.salary)}.`, 'career');
    } else {
      addLog(`Your application for ${job.title} was unsuccessful. You decide to improve your profile.`, 'career');
    }
    advanceQuarter('Job application');
    render();
    showToast(state.career.job ? 'Job offer accepted!' : 'No offer this time. Improve skills and try again.');
  }

  function perform(action, extra = {}) {
    if (!state) return;
    const p = state.player;
    let label = '';
    switch (action) {
      case 'work':
        if (state.career.job) {
          const field = state.career.job.field || 'communication';
          state.career.skills[field] = clamp(state.career.skills[field] + 1, 0, 100);
          p.happiness = clamp(p.happiness - 1);
          state.career.experience += 1;
          state.career.tenure += 1;
          label = `You completed a productive quarter at ${state.career.job.company}.`;
        } else {
          addMoney(8500);
          state.career.skills.communication = clamp(state.career.skills.communication + 2, 0, 100);
          state.career.skills.business = clamp(state.career.skills.business + 1, 0, 100);
          p.happiness = clamp(p.happiness - 2);
          label = 'You completed freelance and temporary work, earning ₹8,500.';
        }
        break;
      case 'study': {
        const skill = ['tech', 'business', 'finance', 'communication'].includes(extra.skill) ? extra.skill : 'tech';
        const cost = 2500;
        if (!spendINR(cost)) return showToast('Not enough INR. Exchange currency or earn money first.');
        state.career.skills[skill] = clamp(state.career.skills[skill] + 3, 0, 100);
        p.intelligence = clamp(p.intelligence + 1);
        state.career.educationProgress += 1;
        let completed = '';
        const thresholds = [0, 4, 16, 24]; // High school, diploma, bachelor, master
        if (state.career.education < 3 && state.career.educationProgress >= thresholds[state.career.education + 1]) {
          state.career.education += 1;
          completed = ['High School', 'Diploma', 'Bachelor’s Degree', 'Master’s Degree'][state.career.education];
        }
        label = `You studied ${skillLabel(skill)}. ${completed ? `You completed your ${completed}!` : 'Your skills and knowledge improved.'}`;
        break;
      }
      case 'exercise':
        p.fitness = clamp(p.fitness + 5);
        p.health = clamp(p.health + 3);
        p.happiness = clamp(p.happiness + 1);
        label = 'You trained and improved your fitness and health.';
        break;
      case 'rest':
        p.health = clamp(p.health + 5);
        p.happiness = clamp(p.happiness + 3);
        label = 'You took time to recover. Your health and mood improved.';
        break;
      case 'family':
        changeRelationship('family', 7);
        p.happiness = clamp(p.happiness + 4);
        label = 'You spent meaningful time with your family.';
        break;
      case 'social':
        if (!spendINR(1000)) return showToast('You need ₹1,000 for this activity.');
        changeRelationship('friends', 8);
        p.happiness = clamp(p.happiness + 5);
        p.charisma = clamp(p.charisma + 1);
        label = 'You met friends and strengthened your social circle.';
        break;
      case 'network':
        changeRelationship('network', 8);
        p.charisma = clamp(p.charisma + 2);
        state.career.skills.business = clamp(state.career.skills.business + 1, 0, 100);
        label = 'You attended a networking event and made useful connections.';
        break;
      case 'freelance':
        addMoney(12000);
        const focus = state.career.skills.tech <= state.career.skills.business ? 'tech' : 'business';
        state.career.skills[focus] = clamp(state.career.skills[focus] + 1, 0, 100);
        p.happiness = clamp(p.happiness - 1);
        label = 'You completed an independent project and earned ₹12,000.';
        break;
      case 'start-business': {
        const type = BUSINESS_TYPES.find((b) => b.id === extra.type);
        if (!type) return;
        if (state.businesses.length >= 3) return showToast('The first build supports up to three businesses.');
        if (!spendINR(type.cost)) return showToast(`You need ${inr(type.cost)} to start this business.`);
        state.businesses.push({ id: `${type.id}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, type: type.id, name: type.name, category: type.category, level: 1, quarterlyProfit: type.profit, value: Math.round(type.cost * 0.8), risk: type.risk });
        state.stats.businessesStarted += 1;
        state.career.skills.business = clamp(state.career.skills.business + 2, 0, 100);
        label = `You launched ${type.name}. The business is now operating.`;
        break;
      }
      case 'upgrade-business': {
        const biz = state.businesses.find((b) => b.id === extra.id);
        if (!biz) return;
        const cost = Math.round(20000 * biz.level);
        if (!spendINR(cost)) return showToast(`You need ${inr(cost)} to upgrade this business.`);
        biz.level += 1;
        biz.quarterlyProfit = Math.round(biz.quarterlyProfit * 1.55);
        biz.value = Math.round(biz.value * 1.6);
        label = `You upgraded ${biz.name} to level ${biz.level}. Its earning capacity increased.`;
        break;
      }
      case 'invest': {
        const investment = INVESTMENTS.find((i) => i.id === extra.type);
        const rawAmount = Number(extra.amount);
        if (!investment || !Number.isFinite(rawAmount) || rawAmount < 1000) return showToast('Enter an investment of at least ₹1,000.');
        const amount = Math.round(rawAmount);
        if (!spendINR(amount)) return showToast('Insufficient INR balance.');
        state.investments[investment.id] += amount;
        label = `You invested ${inr(amount)} in ${investment.name}.`;
        break;
      }
      case 'exchange':
        return doExchange(extra);
      case 'move-city': {
        const destination = extra.city;
        if (!CITIES[destination] || destination === p.city) return;
        if (!spendINR(8000)) return showToast('You need ₹8,000 for relocation.');
        const oldCity = p.city;
        p.city = destination;
        label = `You moved from ${oldCity} to ${destination} to explore new opportunities.`;
        break;
      }
      case 'repay-debt': {
        const amount = Math.round(Number(extra.amount || 0));
        if (!Number.isFinite(amount) || amount < 1 || amount > state.player.debt) return showToast('Enter a valid repayment up to your outstanding debt.');
        if (state.wallet.INR < amount) return showToast('Your INR wallet does not have enough cash for that repayment.');
        state.wallet.INR -= amount;
        state.player.debt = Math.max(0, state.player.debt - amount);
        label = `You repaid ${inr(amount)} of outstanding debt.`;
        break;
      }
      case 'resign':
        if (!state.career.job) return;
        label = `You resigned from your role as ${state.career.job.title}.`;
        state.career.job = null;
        state.career.tenure = 0;
        break;
      default:
        return;
    }
    addLog(label);
    advanceQuarter(actionLabel(action));
    save();
    render();
  }

  function skillLabel(key) {
    return ({ tech: 'technology', business: 'business', finance: 'finance', communication: 'communication' })[key] || key;
  }

  function actionLabel(action) {
    return ({ work: 'Work', study: 'Study', exercise: 'Exercise', rest: 'Rest', family: 'Family time', social: 'Social life', network: 'Networking', freelance: 'Freelance', 'start-business': 'Business launch', 'upgrade-business': 'Business upgrade', invest: 'Investment', 'move-city': 'Relocation', 'repay-debt': 'Debt repayment', resign: 'Resignation' })[action] || 'Action';
  }

  function advanceQuarter(reason) {
    const p = state.player;
    const salary = state.career.job ? state.career.job.salary / 4 : 0;
    if (salary > 0) addMoney(salary);
    state.businesses.forEach((biz) => addMoney(biz.quarterlyProfit));
    const livingCost = Math.round((p.background === 'working' ? 9500 : p.background === 'affluent' ? 23000 : 13500) * city().cost);
    if (state.wallet.INR >= livingCost) {
      state.wallet.INR -= livingCost;
      state.stats.totalSpent += livingCost;
    } else {
      const shortfall = livingCost - Math.max(0, state.wallet.INR);
      state.wallet.INR = 0;
      state.player.debt += shortfall;
      addLog(`Your income did not cover living costs. You borrowed ${inr(shortfall)} to get through the quarter.`, 'finance');
    }
    if (state.player.debt > 0) state.player.debt = Math.round(state.player.debt * 1.012);
    state.time.actionsThisYear += 1;
    state.time.quarter += 1;
    if (state.time.quarter > 4) {
      state.time.quarter = 1;
      state.time.year += 1;
      p.age += 1;
      yearlySettlement();
    }
    state.stats.bestNetWorth = Math.max(state.stats.bestNetWorth, netWorth());
    save();
  }

  function yearlySettlement() {
    const p = state.player;
    INVESTMENTS.forEach((investment) => {
      const principal = Number(state.investments[investment.id] || 0);
      if (!principal) return;
      let changeRate = investment.rate;
      if (investment.id === 'index') changeRate += (Math.random() * 0.28 - 0.14);
      if (investment.id === 'gold') changeRate += (Math.random() * 0.16 - 0.08);
      changeRate = Math.max(-0.25, changeRate);
      const change = Math.round(principal * changeRate);
      state.investments[investment.id] = Math.max(0, principal + change);
      addLog(`${investment.name} ${change >= 0 ? 'grew by' : 'fell by'} ${inr(Math.abs(change))} this year.`, 'finance');
    });
    if (state.career.job && state.career.tenure >= 8) {
      state.career.job.salary = Math.round(state.career.job.salary * 1.12);
      state.career.job.level += 1;
      state.career.tenure = 0;
      addLog(`You earned a promotion at ${state.career.job.company}. Your annual salary is now ${inr(state.career.job.salary)}.`, 'career');
    }
    if (p.age >= 65) p.health = clamp(p.health - 2);
    else if (p.age >= 45) p.health = clamp(p.health - 1);
    const events = [
      () => { p.happiness = clamp(p.happiness + 4); addLog('A memorable family celebration brought everyone closer.', 'event'); },
      () => { p.intelligence = clamp(p.intelligence + 1); addLog('A new experience gave you a fresh perspective.', 'event'); },
      () => { p.health = clamp(p.health + 3); addLog('You had a healthy year and feel more energetic.', 'event'); },
      () => { changeRelationship('network', 4); addLog('A professional contact introduced you to new opportunities.', 'event'); },
      () => { p.happiness = clamp(p.happiness - 3); addLog('A difficult year tested your patience. You decide to keep moving forward.', 'event'); }
    ];
    events[Math.floor(Math.random() * events.length)]();
    addLog(`You turned ${p.age}. Year ${state.time.year} begins.`, 'milestone');
  }

  function doExchange(extra) {
    const from = extra.from;
    const to = extra.to;
    const amount = Number(extra.amount);
    if (!CURRENCIES[from] || !CURRENCIES[to] || from === to || !Number.isFinite(amount) || amount <= 0) return showToast('Check the currencies and amount.');
    if (Number(state.wallet[from] || 0) < amount) return showToast(`Insufficient ${from} balance.`);
    const converted = amount * CURRENCIES[from].rate / CURRENCIES[to].rate * 0.985;
    state.wallet[from] -= amount;
    state.wallet[to] += converted;
    addLog(`You exchanged ${fmt(amount, from, 2)} for ${fmt(converted, to, 2)}. A 1.5% game exchange fee was applied.`, 'finance');
    advanceQuarter('Currency exchange');
    save();
    render();
    showToast('Currency exchanged. One quarter has passed.');
  }

  function tabButton(id, icon, label) {
    return `<button class="tab-button ${activeTab === id ? 'active' : ''}" data-tab="${id}" aria-label="${label}"><span class="tab-icon">${icon}</span><span>${label}</span></button>`;
  }

  function statCard(label, value, foot, icon, percent) {
    return `<div class="stat-card"><div class="stat-top"><span>${label}</span><span class="stat-icon">${icon}</span></div><div class="stat-value">${value}</div><div class="stat-foot">${foot}</div><div class="meter"><span style="width:${clamp(percent)}%"></span></div></div>`;
  }

  function header() {
    return `<header class="topbar"><div class="brand"><div class="brand-icon">L&E</div><div><div class="brand-name">LIFE & EMPIRE</div><div class="brand-sub">BUILD YOUR STORY</div></div></div><div class="top-actions"><button class="small-button" data-action="open-settings">Save & settings</button></div></header>
    <div class="world-strip"><div class="world-item"><span class="live-dot"></span><strong>INDIA</strong><span>· ${esc(state.player.city)}</span></div><div class="world-item">📅 <strong>${state.time.year} · Q${state.time.quarter}</strong></div><div class="world-item">💳 <strong>${inr(state.wallet.INR)}</strong></div></div>`;
  }

  function hero() {
    return `<section class="hero"><div class="hero-content"><div><div class="eyebrow">Your life. Your decisions. Your legacy.</div><h1>${esc(state.player.name)}</h1><p>${esc(state.player.backgroundLabel)} background · ${esc(state.player.city)}, India<br>${state.career.job ? esc(state.career.job.title) : 'Exploring your first opportunities'}</p></div><div class="hero-side"><div class="age-number">${state.player.age}</div><div class="age-label">Years old</div><div class="wealth-number">${inr(netWorth())}</div><div class="wealth-label">Estimated net worth</div></div></div></section>`;
  }

  function actionButton(icon, title, desc, action, cost = '', extra = '') {
    return `<button class="action-card" data-action="${action}" ${extra}><div class="action-icon">${icon}</div><div class="action-title">${title}</div><div class="action-desc">${desc}</div>${cost ? `<span class="cost">${cost}</span>` : ''}</button>`;
  }

  function logPanel(limit = 6) {
    const entries = state.journal.slice(0, limit);
    return `<div class="panel"><div class="section-heading" style="margin:0 0 8px"><div><h2>Life journal</h2><p>Your recent milestones and decisions</p></div><span class="section-kicker">RECENT</span></div><div class="log-list">${entries.map((entry) => `<div class="log-item"><span class="log-dot"></span><div><div class="log-main">${esc(entry.text)}</div><div class="log-meta">${entry.year} · Q${entry.quarter} · ${esc(entry.type || 'life')}</div></div></div>`).join('') || '<div class="empty">Your story is waiting to be written.</div>'}</div></div>`;
  }

  function renderHome() {
    const p = state.player;
    const progress = Math.round((state.time.quarter - 1) / 4 * 100);
    return `${hero()}<div class="section-heading"><div><h2>Personal condition</h2><p>Maintain balance as your life evolves.</p></div><span class="section-kicker">LIFE STATUS</span></div>
      <div class="stat-grid">${statCard('Health', `${p.health}/100`, p.health > 70 ? 'In good shape' : 'Needs attention', '♥', p.health)}${statCard('Happiness', `${p.happiness}/100`, p.happiness > 70 ? 'Feeling positive' : 'Work on your wellbeing', '✦', p.happiness)}${statCard('Intelligence', `${p.intelligence}/100`, 'Learning capacity', '◈', p.intelligence)}${statCard('Fitness', `${p.fitness}/100`, 'Physical condition', '⚡', p.fitness)}</div>
      <div class="two-col"><div><div class="panel"><div class="section-heading" style="margin:0 0 7px"><div><h2>Make your next move</h2><p>Every meaningful action advances one quarter.</p></div><span class="pill warn">Q${state.time.quarter} / 4</span></div><div class="timeline">${[1,2,3,4].map(q => `<span class="${q < state.time.quarter ? 'done' : q === state.time.quarter ? 'current' : ''}"></span>`).join('')}</div><div class="progress-row"><span>Year ${state.time.year} progress</span><strong>${state.time.quarter === 4 ? 'Final quarter' : `${progress}%`}</strong></div><div class="action-grid">${actionButton('💼','Work','Earn income and grow your career.','work',state.career.job ? 'Salary paid quarterly' : 'Freelance income · ₹8,500')}${actionButton('📚','Study','Improve a skill and your education.','open-study','₹2,500')}${actionButton('🏃','Exercise','Improve fitness and health.','exercise','No fee')}${actionButton('🛌','Rest','Recover health and happiness.','rest','No fee')}${actionButton('🧑‍💻','Freelance','Take an independent project alongside your main routine.','freelance','Project income · ₹12,000')}</div></div><div style="height:12px"></div>${logPanel(4)}</div>
      <div style="display:grid;gap:12px"><div class="panel"><h3>Career snapshot</h3><p class="panel-sub">${state.career.job ? `${esc(state.career.job.title)} at ${esc(state.career.job.company)}` : 'You are currently between jobs.'}</p><div class="progress-row"><span>Education</span><strong>${educationName()}</strong></div><div class="progress-row"><span>Experience</span><strong>${state.career.experience} quarters</strong></div><div class="progress-row"><span>Annual income</span><strong>${state.career.job ? inr(state.career.job.salary) : '—'}</strong></div><div class="button-row"><button class="button secondary" data-tab="career">Explore career</button></div></div><div class="panel"><h3>Financial position</h3><div class="progress-row"><span>Cash across wallets</span><strong>${inr(walletWorth())}</strong></div><div class="progress-row"><span>Investments</span><strong>${inr(Object.values(state.investments).reduce((a,b)=>a+b,0))}</strong></div><div class="progress-row"><span>Business holdings</span><strong>${inr(state.businesses.reduce((a,b)=>a+b.value,0))}</strong></div><div class="progress-row"><span>Outstanding debt</span><strong style="color:${state.player.debt > 0 ? 'var(--red)' : 'var(--green)'}">${inr(state.player.debt)}</strong></div><div class="button-row"><button class="button secondary" data-tab="wealth">Open finance</button></div></div></div></div>`;
  }

  function walletWorth() {
    return Object.entries(state.wallet).reduce((sum, [code, amount]) => sum + amount * (CURRENCIES[code]?.rate || 1), 0);
  }

  function educationName() {
    return ['High School', 'Diploma', 'Bachelor’s Degree', 'Master’s Degree'][state.career.education] || 'High School';
  }

  function renderCareer() {
    const c = state.career;
    const skillRows = Object.entries(c.skills).map(([key, value]) => `<div class="skill-line"><span>${skillLabel(key)}</span><div class="meter"><span style="width:${clamp(value)}%"></span></div><strong>${value}</strong></div>`).join('');
    const jobs = JOBS.map((job) => {
      const skill = job.skill ? c.skills[job.skill] : 0;
      const qualified = c.education >= job.education && skill >= job.requirement;
      const current = c.job?.id === job.id;
      const requirements = `${job.education ? ['High School','Diploma','Bachelor’s Degree'][job.education] : 'No degree required'}${job.skill ? ` · ${skillLabel(job.skill)} ${job.requirement}+` : ''}`;
      return `<div class="job-card"><div class="card-top"><div><div class="card-title">${esc(job.title)}</div><div class="card-meta">${esc(job.company)}<br>${esc(job.description)}</div><div class="card-meta" style="margin-top:7px">Requirement: ${esc(requirements)}</div></div><div style="text-align:right"><div class="salary">${inr(job.salary)}</div><span class="pill">Annual salary</span></div></div><div class="button-row">${current ? '<span class="pill good">Current role</span>' : `<button class="button ${qualified ? 'primary' : 'ghost'}" data-action="apply-job" data-id="${job.id}" ${qualified && !c.job ? '' : 'disabled'}>${qualified ? (c.job ? 'Resign first' : 'Apply · one quarter') : 'Requirements not met'}</button>`}</div></div>`;
    }).join('');
    return `<div class="page-title"><div class="eyebrow">Your professional journey</div><h1>Career & education</h1><p>Build skills, earn qualifications, find work and progress into leadership.</p></div>
      <div class="two-col"><div style="display:grid;gap:12px"><div class="panel"><div class="section-heading" style="margin:0 0 12px"><div><h2>Current employment</h2><p>Career status and progress</p></div><span class="pill ${c.job ? 'good' : 'warn'}">${c.job ? 'EMPLOYED' : 'SEEKING WORK'}</span></div>${c.job ? `<div class="card-title">${esc(c.job.title)}</div><div class="card-meta">${esc(c.job.company)} · Level ${c.job.level}</div><div class="salary" style="margin-top:12px">${inr(c.job.salary)} <span style="font-size:10px;color:var(--muted);font-weight:400">annual gross salary</span></div><div class="progress-row"><span>Promotion progress</span><strong>${c.tenure}/8 quarters</strong></div><div class="meter"><span style="width:${c.tenure/8*100}%"></span></div><div class="button-row"><button class="button ghost" data-action="resign">Resign</button></div>` : '<div class="empty">You do not have a full-time job yet. Apply for entry-level roles or build the skills required for specialist positions.</div>'}</div>
      <div class="panel"><div class="section-heading" style="margin:0 0 10px"><div><h2>Skill portfolio</h2><p>Skills improve through study and work.</p></div></div><div class="skill-list">${skillRows}</div><div class="button-row"><button class="button primary" data-action="open-study">Study a skill · ₹2,500</button></div></div>
      <div class="panel"><h3>Education pathway</h3><p class="panel-sub">Your current qualification: <strong style="color:var(--text)">${educationName()}</strong></p><div class="progress-row"><span>Course progress</span><strong>${c.education >= 3 ? 'Completed' : `${c.educationProgress} / ${[0,4,16,24][c.education+1]} study actions`}</strong></div><div class="meter"><span style="width:${c.education >= 3 ? 100 : c.educationProgress / [0,4,16,24][c.education+1]*100}%"></span></div><p class="hint">Study actions cost ₹2,500 and advance one quarter. The next qualification requires consistent study.</p></div></div>
      <div class="panel"><div class="section-heading" style="margin:0 0 11px"><div><h2>Job market</h2><p>Indian employers · simulated opportunities</p></div><span class="section-kicker">7 ROLES</span></div><div class="job-list">${jobs}</div></div></div>`;
  }

  function renderWealth() {
    const walletCards = Object.entries(CURRENCIES).map(([code, meta]) => `<div class="currency-card"><div class="card-top"><div><div class="currency-symbol">${meta.symbol}</div><div class="currency-code">${code} · ${meta.name}</div></div><span class="pill">Wallet</span></div><div class="currency-balance">${fmt(state.wallet[code], code, 2)}</div><div class="currency-value">≈ ${inr(state.wallet[code] * meta.rate)}</div></div>`).join('');
    const investmentCards = INVESTMENTS.map((i) => `<div class="job-card"><div class="card-top"><div><div class="card-title">${i.name}</div><div class="card-meta">${i.detail}</div></div><div style="text-align:right"><span class="pill ${i.risk === 'Low' ? 'good' : 'warn'}">${i.risk} risk</span><div class="salary" style="margin-top:7px">${inr(state.investments[i.id])}</div></div></div><div class="button-row"><button class="button secondary" data-action="open-invest" data-type="${i.id}">Invest more</button></div></div>`).join('');
    const biz = state.businesses.length ? state.businesses.map((b) => `<div class="business-card"><div class="card-top"><div><div class="card-title">${esc(b.name)} <span class="pill">Level ${b.level}</span></div><div class="card-meta">${esc(b.category)} · ${esc(b.risk)} risk</div></div><div style="text-align:right"><div class="salary">${inr(b.quarterlyProfit)}</div><div class="card-meta">fixed payout / quarter</div></div></div><div class="progress-row"><span>Estimated business value</span><strong>${inr(b.value)}</strong></div><button class="button secondary" data-action="upgrade-business" data-id="${esc(b.id)}">Upgrade · ${inr(20000*b.level)}</button></div>`).join('') : '<div class="empty">You have not started a business yet. Choose a venture when you have enough capital.</div>';
    const businessOptions = BUSINESS_TYPES.map((b) => `<div class="job-card"><div class="card-top"><div><div class="card-title">${b.name}</div><div class="card-meta">${b.category} · ${b.description}</div></div><div style="text-align:right"><div class="salary">${inr(b.cost)}</div><span class="pill">Start-up cost</span></div></div><div class="progress-row"><span>Estimated quarterly profit</span><strong>${inr(b.profit)}</strong></div><div class="button-row"><button class="button ${state.wallet.INR >= b.cost ? 'primary' : 'ghost'}" data-action="start-business" data-type="${b.id}" ${state.wallet.INR >= b.cost && state.businesses.length < 3 ? '' : 'disabled'}>Launch business</button></div></div>`).join('');
    return `<div class="page-title"><div class="eyebrow">Money, ownership & capital</div><h1>Wealth & empire</h1><p>Manage multiple currency wallets, invest for the future and build income-generating businesses.</p></div>
      <div class="stat-grid">${statCard('Net worth',inr(netWorth()),'All wallets and holdings','◆',Math.min(100,netWorth()/1000000*100))}${statCard('Cash value',inr(walletWorth()),'Converted to INR value','◉',Math.min(100,walletWorth()/500000*100))}${statCard('Invested',inr(Object.values(state.investments).reduce((a,b)=>a+b,0)),'Portfolio value','▤',Math.min(100,Object.values(state.investments).reduce((a,b)=>a+b,0)/500000*100))}${statCard('Debt',inr(state.player.debt),'Borrowing and overdraft','↘',state.player.debt ? 100 : 0)}</div>
      ${state.player.debt > 0 ? `<div class="panel"><div class="card-top"><div><h3>Outstanding borrowing</h3><p class="panel-sub">Your emergency borrowing accrues 1.2% interest per quarter. Repay it from your INR wallet when cash flow allows.</p></div><div class="salary">${inr(state.player.debt)}</div></div><button class="button primary" data-action="open-repay" ${state.wallet.INR < 1 ? 'disabled' : ''}>Repay debt</button></div>` : ''}
      <div class="section-heading"><div><h2>Multi-currency wallets</h2><p>Hold six currencies in your personal wallet.</p></div><span class="pill good">6 CURRENCIES</span></div><div class="currency-grid">${walletCards}</div>
      <div class="two-col"><div style="display:grid;gap:12px"><div class="panel"><h3>Currency exchange</h3><p class="panel-sub">Convert between currencies. Every exchange has a 1.5% simulated fee and advances one quarter.</p><form id="exchange-form" class="inline-form"><div class="field"><label for="exchange-from">FROM</label><select id="exchange-from" name="from">${Object.keys(CURRENCIES).map(c=>`<option value="${c}">${c}</option>`).join('')}</select></div><div class="field"><label for="exchange-to">TO</label><select id="exchange-to" name="to" selected="USD">${Object.keys(CURRENCIES).map(c=>`<option value="${c}" ${c==='USD'?'selected':''}>${c}</option>`).join('')}</select></div><div class="field full"><label for="exchange-amount">AMOUNT TO CONVERT</label><input id="exchange-amount" name="amount" type="number" min="0.01" step="0.01" placeholder="Enter amount" required></div><div class="field full"><button class="button primary" type="submit">Exchange currency</button></div></form><div class="notice">Game exchange rates are fixed simulation values, not live market quotes or financial advice. INR is the base accounting currency.</div></div>
      <div class="panel"><div class="section-heading" style="margin:0 0 10px"><div><h2>Investment portfolio</h2><p>Returns are simulated at each year-end.</p></div></div><div class="job-list">${investmentCards}</div></div></div>
      <div style="display:grid;gap:12px"><div class="panel"><div class="section-heading" style="margin:0 0 10px"><div><h2>Your businesses</h2><p>Operating ventures and quarterly income.</p></div><span class="pill">${state.businesses.length}/3</span></div><div class="business-list">${biz}</div></div><div class="panel"><h3>Start a business</h3><p class="panel-sub">Choose a venture that fits your capital and ambition.</p><div class="job-list">${businessOptions}</div><p class="hint">Prototype model: earnings are fixed quarterly payouts; the Low / Medium / High labels are descriptive only. Production inputs, inventory, wages, pricing, customer demand, competitors, risk events and operating expenses are not simulated yet.</p></div></div></div>`;
  }

  function renderSociety() {
    const relationships = state.relationships.map((r) => `<div class="relationship-card"><div class="card-top"><div><div class="card-title">${r.icon} ${esc(r.name)}</div><div class="card-meta">${esc(r.kind)} relationship</div></div><div class="salary">${r.level}/100</div></div><div class="meter"><span style="width:${r.level}%"></span></div></div>`).join('');
    return `<div class="page-title"><div class="eyebrow">People shape your story</div><h1>Society & relationships</h1><p>Invest in family, friendships and professional connections. Your social choices shape happiness and opportunity.</p></div>
      <div class="two-col"><div class="panel"><h3>Relationships</h3><p class="panel-sub">Relationship levels are simplified measures of connection and trust.</p><div class="relationship-list">${relationships}</div></div><div style="display:grid;gap:12px"><div class="panel"><h3>Spend time with family</h3><p class="panel-sub">Strengthen your support system and improve your wellbeing.</p><button class="button primary" data-action="family">Spend a quarter with family</button></div><div class="panel"><h3>Meet your friends</h3><p class="panel-sub">Socialise, build memories and improve happiness. Costs ₹1,000.</p><button class="button secondary" data-action="social">Go out with friends</button></div><div class="panel"><h3>Build your network</h3><p class="panel-sub">Meet professionals and expand your opportunities.</p><button class="button secondary" data-action="network">Attend a networking event</button></div></div></div>`;
  }

  function renderWorld() {
    const cityButtons = Object.entries(CITIES).map(([name, info]) => `<button class="city-button ${state.player.city === name ? 'active' : ''}" data-action="move-city" data-city="${name}" ${state.player.city === name ? 'disabled' : ''}><strong>${info.emoji} ${name}</strong><span>${info.region} · Cost index ${info.cost.toFixed(2)}</span><span>${info.mood}</span></button>`).join('');
    return `<div class="page-title"><div class="eyebrow">India is your starting world</div><h1>World & opportunities</h1><p>Choose where to build your life. Every city offers a different cost of living and economic character.</p></div>
      <div class="two-col"><div class="panel"><div class="section-heading" style="margin:0 0 12px"><div><h2>Indian city network</h2><p>Relocation costs ₹8,000 and advances one quarter.</p></div><span class="pill">9 CITIES</span></div><div class="city-grid">${cityButtons}</div><div class="notice">City cost indices affect your quarterly living expenses. Job availability and sector opportunities are represented through the career system in this first build.</div></div><div style="display:grid;gap:12px"><div class="panel"><div class="eyebrow">CURRENT LOCATION</div><h2 style="font:800 24px Manrope;margin:8px 0">${city().emoji} ${esc(state.player.city)}</h2><p class="panel-sub">${city().region} · ${city().mood}</p><div class="progress-row"><span>Living cost index</span><strong>${city().cost.toFixed(2)}×</strong></div><div class="progress-row"><span>Quarterly living expenses</span><strong>${inr((state.player.background === 'working' ? 9500 : state.player.background === 'affluent' ? 23000 : 13500) * city().cost)}</strong></div></div><div class="panel"><h3>International expansion</h3><p class="panel-sub">Your wallet already supports INR, USD, AED, SGD, GBP and EUR. Overseas travel, foreign employment, international property and cross-border company operations are planned for a later development phase.</p><span class="pill warn">PLANNED · PHASE 3+</span></div><div class="panel"><h3>Game world rules</h3><p class="panel-sub">Time advances one quarter per major action. Four actions complete one year and increase your age. Salary, business income, living expenses and investment returns are settled through the simulation.</p></div></div></div>`;
  }

  function render() {
    if (!state) return renderSetup();
    let body = '';
    if (activeTab === 'home') body = renderHome();
    if (activeTab === 'career') body = renderCareer();
    if (activeTab === 'wealth') body = renderWealth();
    if (activeTab === 'society') body = renderSociety();
    if (activeTab === 'world') body = renderWorld();
    app.innerHTML = `<div class="app-shell">${header()}${body}</div><nav class="tabs" aria-label="Main game navigation"><div class="tab-inner">${tabButton('home','⌂','Home')}${tabButton('career','▥','Career')}${tabButton('wealth','◈','Wealth')}${tabButton('society','♧','Society')}${tabButton('world','◎','World')}</div></nav>`;
  }

  function renderSetup() {
    const existing = (() => { try { return !!localStorage.getItem(SAVE_KEY); } catch (_) { return false; } })();
    app.innerHTML = `<main class="setup-wrap"><section class="setup-card"><div class="setup-logo">LIFE <span>&</span> EMPIRE</div><div class="eyebrow" style="margin-top:9px">AN INDIA-FIRST LIFE SIMULATOR</div><h1>Your story starts here.</h1><p>Build a life from the ground up. Study, work, form relationships, manage money, start businesses and create a legacy. Every decision moves time forward.</p><form id="new-game-form"><div class="field"><label for="player-name">YOUR NAME</label><input id="player-name" name="name" maxlength="24" placeholder="Enter your character name" required autocomplete="nickname"></div><div class="field"><label for="start-city">STARTING CITY</label><select id="start-city" name="city">${Object.keys(CITIES).map(c=>`<option value="${c}" ${c==='Hyderabad'?'selected':''}>${c} · ${CITIES[c].region}</option>`).join('')}</select></div><div class="field"><label for="background">FAMILY BACKGROUND</label><select id="background" name="background"><option value="working">Working class · ₹35,000 starting cash</option><option value="middle" selected>Middle class · ₹70,000 starting cash</option><option value="affluent">Affluent · ₹2,40,000 starting cash</option></select></div><button class="button primary" type="submit">Create new life →</button></form><div class="setup-note">🇮🇳 India is the starting world. INR is your initial currency, with USD, AED, SGD, GBP and EUR wallets available through the currency exchange system. Your game is saved on this device.</div>${loadError ? `<div class="warning-text">A saved game was found but could not be loaded: ${esc(loadError)}. Your original save has been preserved. Restore a valid backup below, or create a new life to replace it.</div><div class="field"><label for="import-save">RESTORE BACKUP (.JSON)</label><input id="import-save" type="file" accept="application/json,.json"></div>` : ''}<div class="setup-note">Build ${BUILD_VERSION} · Single-player · Offline-friendly after first load · No account required</div></section></main>`;
  }

  function showModal(title, content) {
    const old = document.querySelector('.modal-backdrop');
    if (old) old.remove();
    const wrap = document.createElement('div');
    wrap.className = 'modal-backdrop';
    wrap.innerHTML = `<section class="modal" role="dialog" aria-modal="true"><div class="modal-head"><h3>${title}</h3><button class="modal-close" data-action="close-modal" aria-label="Close">×</button></div>${content}</section>`;
    app.appendChild(wrap);
  }

  function showStudyModal() {
    showModal('Study & improve', `<p class="panel-sub">Choose a focus for this quarter. Study costs ₹2,500 and improves the selected skill by 3 points.</p><form id="study-form"><div class="field"><label for="study-skill">SKILL FOCUS</label><select id="study-skill" name="skill"><option value="tech">Technology</option><option value="business">Business</option><option value="finance">Finance</option><option value="communication">Communication</option></select></div><div class="notice">Qualification progress: ${state.career.educationProgress} study actions. Your next qualification is ${state.career.education >= 3 ? 'already complete' : ['Diploma','Bachelor’s Degree','Master’s Degree'][state.career.education]}.</div><button class="button primary" type="submit">Study this quarter · ₹2,500</button></form>`);
  }

  function showInvestModal(type) {
    const investment = INVESTMENTS.find((i) => i.id === type);
    if (!investment) return;
    showModal(`Invest in ${investment.name}`, `<p class="panel-sub">${investment.detail} Investments are held in INR and settled at each year-end.</p><form id="invest-form"><input type="hidden" name="type" value="${investment.id}"><div class="field"><label for="invest-amount">AMOUNT (INR)</label><input id="invest-amount" name="amount" type="number" min="1000" step="500" placeholder="5000" required></div><div class="notice">Current balance: ${inr(state.wallet.INR)}. Minimum investment: ₹1,000.</div><button class="button primary" type="submit">Confirm investment</button></form>`);
  }

  function settingsModal() {
    showModal('Save & settings', `<div class="settings-grid"><div class="notice">Your current game is automatically saved in this browser on this device. Export a backup before clearing browser data or changing devices.</div><button class="button primary" data-action="export-save">Export save file (.json)</button><label class="button secondary" for="import-save" style="text-align:center;cursor:pointer">Import save file (.json)</label><input id="import-save" type="file" accept="application/json,.json" hidden><button class="button ghost" data-action="new-game-confirm">Start a new life</button><div class="warning-text">Starting a new life replaces the current local save. Export it first if you want to keep it.</div></div>`);
  }

  function showRepayModal() {
    const maximum = Math.min(Math.floor(state.player.debt), Math.floor(state.wallet.INR));
    if (maximum < 1) return showToast('You need at least ₹1 in your INR wallet to make a repayment.');
    showModal('Repay outstanding debt', `<p class="panel-sub">Choose how much debt to repay. This action advances one quarter; income, living costs and remaining debt interest are then settled normally.</p><form id="repay-form"><div class="field"><label for="repay-amount">REPAYMENT (INR)</label><input id="repay-amount" name="amount" type="number" min="1" max="${maximum}" step="1" value="${maximum}" required></div><div class="notice">Outstanding debt: ${inr(state.player.debt)} · Available INR: ${inr(state.wallet.INR)} · Quarterly interest: 1.2%</div><button class="button primary" type="submit">Confirm repayment</button></form>`);
  }

  function exportSave() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `life-and-empire-${state.player.name.toLowerCase().replace(/[^a-z0-9]+/g,'-')}-${state.time.year}-q${state.time.quarter}.json`;
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1500);
    showToast('Save backup exported.');
  }

  function importSave(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        if (!validSave(parsed)) throw new Error('This is not a compatible LIFE & EMPIRE save file.');
        const previous = state;
        state = parsed;
        if (!save()) { state = previous; render(); return; }
        loadError = '';
        activeTab = 'home';
        document.querySelector('.modal-backdrop')?.remove(); render(); showToast('Save imported successfully.');
      } catch (error) { showToast(error.message || 'Could not import that file.'); }
    };
    reader.onerror = () => showToast('Could not read the selected file.');
    reader.readAsText(file);
  }

  app.addEventListener('click', (event) => {
    const tab = event.target.closest('[data-tab]');
    if (tab) { activeTab = tab.dataset.tab; render(); return; }
    const button = event.target.closest('[data-action]');
    if (!button) return;
    const { action, id, type, city: cityName } = button.dataset;
    if (action === 'open-settings') return settingsModal();
    if (action === 'open-study') return showStudyModal();
    if (action === 'open-invest') return showInvestModal(type);
    if (action === 'open-repay') return showRepayModal();
    if (action === 'close-modal') return button.closest('.modal-backdrop')?.remove();
    if (action === 'export-save') return exportSave();
    if (action === 'new-game-confirm') {
      showModal('Start a new life?', `<p class="panel-sub">This will replace your current local game. Export a backup before continuing.</p><div class="button-row"><button class="button danger" data-action="confirm-new-game">Replace current save</button><button class="button ghost" data-action="close-modal">Cancel</button></div>`); return;
    }
    if (action === 'confirm-new-game') { state = null; loadError = ''; try { localStorage.removeItem(SAVE_KEY); } catch (error) { loadError = 'Browser storage is unavailable. A new game may not be saved.'; } document.querySelector('.modal-backdrop')?.remove(); renderSetup(); return; }
    if (action === 'apply-job') return applyJob(id);
    if (action === 'start-business') return perform('start-business', { type });
    if (action === 'upgrade-business') return perform('upgrade-business', { id });
    if (action === 'invest') return perform('invest', { type, amount: button.dataset.amount });
    if (action === 'move-city') return perform('move-city', { city: cityName });
    if (action === 'resign') return perform('resign');
    if (['work','exercise','rest','family','social','network','freelance'].includes(action)) return perform(action);
  });

  app.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const data = Object.fromEntries(new FormData(form).entries());
    if (form.id === 'new-game-form') {
      const name = String(data.name || '').trim();
      if (!name) return showToast('Enter a character name.');
      const saved = createNewGame(name, data.city, data.background);
      showToast(saved ? `Welcome to ${data.city}. Your life begins now.` : 'Your game started, but browser storage could not save it.');
    }
    if (form.id === 'study-form') {
      document.querySelector('.modal-backdrop')?.remove();
      perform('study', { skill: data.skill });
    }
    if (form.id === 'invest-form') {
      document.querySelector('.modal-backdrop')?.remove();
      perform('invest', { type: data.type, amount: data.amount });
    }
    if (form.id === 'repay-form') {
      document.querySelector('.modal-backdrop')?.remove();
      perform('repay-debt', { amount: data.amount });
    }
    if (form.id === 'exchange-form') perform('exchange', data);
  });

  app.addEventListener('change', (event) => {
    if (event.target.id === 'import-save') importSave(event.target.files?.[0]);
  });

  // Register a small static service worker for offline shell caching on HTTPS hosts.
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch((err) => console.info('Offline cache unavailable:', err)));
  }

  if (loadGame()) render(); else renderSetup();
})();
