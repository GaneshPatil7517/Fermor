export interface StockItem {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  sparkline: number[];
  category: 'Large Cap' | 'Mid Cap' | 'Small Cap' | 'Indices' | 'Commodities';
  peRatio?: number;
  marketCap?: string;
  recommendation?: 'Strong Buy' | 'Buy' | 'Hold';
}

export interface IndexItem {
  name: string;
  value: number;
  change: number;
  changePercent: number;
  high: number;
  low: number;
  isPositive: boolean;
}

export interface ThematicBasket {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cagr3Y: number;
  risk: 'Low' | 'Moderate' | 'High';
  minInvestment: number;
  volatility: string;
  rebalanceFrequency: string;
  tags: string[];
  stocksCount: number;
  topHoldings: { name: string; weight: number }[];
  accentColor: string;
}

export interface MutualFundItem {
  id: string;
  name: string;
  category: string;
  cagr3Y: number;
  cagr5Y: number;
  expenseRatioDirect: number;
  expenseRatioRegular: number;
  aum: string;
  rating: number;
  fundManager: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  portfolioGrowth: string;
  investedSince: string;
  verified: boolean;
  highlightTag: string;
}

export interface FAQItem {
  id: string;
  category: 'general' | 'investing' | 'pricing' | 'security' | 'migration';
  question: string;
  answer: string;
}

export const MARKET_INDICES: IndexItem[] = [
  { name: 'NIFTY 50', value: 25142.85, change: 184.20, changePercent: 0.74, high: 25198.40, low: 24980.10, isPositive: true },
  { name: 'SENSEX', value: 82490.15, change: 560.80, changePercent: 0.68, high: 82610.00, low: 81950.30, isPositive: true },
  { name: 'BANK NIFTY', value: 51840.40, change: -120.30, changePercent: -0.23, high: 52100.00, low: 51720.50, isPositive: false },
  { name: 'NIFTY IT', value: 43210.90, change: 395.40, changePercent: 0.92, high: 43350.00, low: 42800.00, isPositive: true },
  { name: 'GOLD 24K (10g)', value: 76450.00, change: 310.00, changePercent: 0.41, high: 76520.00, low: 76100.00, isPositive: true },
  { name: 'USD / INR', value: 83.88, change: -0.04, changePercent: -0.05, high: 83.94, low: 83.84, isPositive: true },
  { name: 'CRUDE OIL (BBL)', value: 5980.00, change: -45.00, changePercent: -0.75, high: 6050.00, low: 5960.00, isPositive: false },
  { name: 'NIFTY AUTO', value: 25680.10, change: 245.60, changePercent: 0.97, high: 25740.00, low: 25410.00, isPositive: true },
];

export const POPULAR_STOCKS: StockItem[] = [
  {
    symbol: 'TATA MOTORS',
    name: 'Tata Motors Ltd',
    price: 984.60,
    change: 22.40,
    changePercent: 2.33,
    sparkline: [950, 955, 962, 958, 970, 978, 984.6],
    category: 'Large Cap',
    peRatio: 16.2,
    marketCap: '₹3.62 Lakh Cr',
    recommendation: 'Strong Buy'
  },
  {
    symbol: 'HDFC BANK',
    name: 'HDFC Bank Ltd',
    price: 1682.35,
    change: 14.80,
    changePercent: 0.89,
    sparkline: [1660, 1664, 1670, 1668, 1675, 1680, 1682.35],
    category: 'Large Cap',
    peRatio: 19.4,
    marketCap: '₹12.80 Lakh Cr',
    recommendation: 'Buy'
  },
  {
    symbol: 'RELIANCE',
    name: 'Reliance Industries',
    price: 2980.10,
    change: 38.50,
    changePercent: 1.31,
    sparkline: [2920, 2935, 2940, 2955, 2965, 2975, 2980.1],
    category: 'Large Cap',
    peRatio: 26.8,
    marketCap: '₹20.15 Lakh Cr',
    recommendation: 'Buy'
  },
  {
    symbol: 'INFOSYS',
    name: 'Infosys Technologies',
    price: 1895.40,
    change: -12.30,
    changePercent: -0.65,
    sparkline: [1920, 1915, 1908, 1910, 1900, 1892, 1895.4],
    category: 'Large Cap',
    peRatio: 27.5,
    marketCap: '₹7.88 Lakh Cr',
    recommendation: 'Hold'
  },
  {
    symbol: 'ZOMATO',
    name: 'Zomato Ltd (Eternal)',
    price: 278.90,
    change: 11.20,
    changePercent: 4.18,
    sparkline: [255, 260, 264, 268, 271, 275, 278.9],
    category: 'Mid Cap',
    peRatio: 98.4,
    marketCap: '₹2.45 Lakh Cr',
    recommendation: 'Strong Buy'
  },
  {
    symbol: 'L&T',
    name: 'Larsen & Toubro Ltd',
    price: 3620.00,
    change: 45.00,
    changePercent: 1.26,
    sparkline: [3540, 3560, 3580, 3590, 3605, 3615, 3620],
    category: 'Large Cap',
    peRatio: 34.1,
    marketCap: '₹4.98 Lakh Cr',
    recommendation: 'Buy'
  }
];

export const THEMATIC_BASKETS: ThematicBasket[] = [
  {
    id: 'green-energy',
    title: 'Clean Energy & EV Revolution',
    subtitle: 'High Momentum Thematic Basket',
    description: 'Companies leading India’s green hydrogen, solar infrastructure, battery tech, and electric mobility transformation.',
    cagr3Y: 34.8,
    risk: 'High',
    minInvestment: 5000,
    volatility: 'Moderate-High',
    rebalanceFrequency: 'Quarterly',
    tags: ['Renewables', 'EVs', 'Infrastructure'],
    stocksCount: 8,
    topHoldings: [
      { name: 'Tata Power', weight: 22 },
      { name: 'Suzlon Energy', weight: 18 },
      { name: 'KPIT Tech', weight: 16 },
      { name: 'Olectra Greentech', weight: 14 }
    ],
    accentColor: '#00D084'
  },
  {
    id: 'digital-titans',
    title: 'Digital India & SaaS Titans',
    subtitle: 'Compounders with High Free Cash Flow',
    description: 'Next-gen enterprise software, consumer tech, and financial rails shaping India’s $1 Trillion digital economy.',
    cagr3Y: 28.4,
    risk: 'Moderate',
    minInvestment: 10000,
    volatility: 'Moderate',
    rebalanceFrequency: 'Monthly',
    tags: ['Tech', 'Fintech', 'SaaS'],
    stocksCount: 10,
    topHoldings: [
      { name: 'Zomato Ltd', weight: 20 },
      { name: 'Infosys', weight: 18 },
      { name: 'Persistent Systems', weight: 15 },
      { name: 'PolicyBazaar', weight: 12 }
    ],
    accentColor: '#38BDF8'
  },
  {
    id: 'defence-infra',
    title: 'Make in India: Defence & Infra',
    subtitle: 'Government Capex Beneficiaries',
    description: 'Heavy engineering, indigenous defence manufacturing, and national railway modernization leaders with multi-year order books.',
    cagr3Y: 41.2,
    risk: 'High',
    minInvestment: 8000,
    volatility: 'High',
    rebalanceFrequency: 'Quarterly',
    tags: ['Defence', 'Capex', 'Railways'],
    stocksCount: 7,
    topHoldings: [
      { name: 'HAL (Hindustan Aero)', weight: 25 },
      { name: 'Bharat Electronics', weight: 22 },
      { name: 'L&T', weight: 18 },
      { name: 'RVNL', weight: 15 }
    ],
    accentColor: '#F59E0B'
  },
  {
    id: 'bluechip-compounders',
    title: 'All-Weather Bluechip Compounders',
    subtitle: 'Low Volatility Wealth Multiplier',
    description: 'Market-dominant monopolies with rock-solid balance sheets, robust dividends, and consistent 15%+ ROE track records.',
    cagr3Y: 19.6,
    risk: 'Low',
    minInvestment: 15000,
    volatility: 'Low',
    rebalanceFrequency: 'Semi-Annually',
    tags: ['Bluechips', 'Dividends', 'Stability'],
    stocksCount: 12,
    topHoldings: [
      { name: 'Reliance Industries', weight: 20 },
      { name: 'HDFC Bank', weight: 18 },
      { name: 'TCS', weight: 16 },
      { name: 'ITC Ltd', weight: 14 }
    ],
    accentColor: '#818CF8'
  }
];

export const SAMPLE_MUTUAL_FUNDS: MutualFundItem[] = [
  {
    id: 'mf-1',
    name: 'Parag Parikh Flexi Cap Fund - Direct (G)',
    category: 'Flexi Cap',
    cagr3Y: 22.8,
    cagr5Y: 24.1,
    expenseRatioDirect: 0.62,
    expenseRatioRegular: 1.48,
    aum: '₹68,450 Cr',
    rating: 5,
    fundManager: 'Rajeev Thakkar'
  },
  {
    id: 'mf-2',
    name: 'Mirae Asset Large & Midcap Fund - Direct (G)',
    category: 'Large & Mid Cap',
    cagr3Y: 20.4,
    cagr5Y: 21.6,
    expenseRatioDirect: 0.58,
    expenseRatioRegular: 1.54,
    aum: '₹39,200 Cr',
    rating: 5,
    fundManager: 'Neelesh Surana'
  },
  {
    id: 'mf-3',
    name: 'Quant Small Cap Fund - Direct (G)',
    category: 'Small Cap',
    cagr3Y: 34.2,
    cagr5Y: 36.8,
    expenseRatioDirect: 0.77,
    expenseRatioRegular: 1.82,
    aum: '₹22,100 Cr',
    rating: 5,
    fundManager: 'Sandeep Tandon'
  },
  {
    id: 'mf-4',
    name: 'HDFC Balanced Advantage Fund - Direct (G)',
    category: 'Dynamic Asset Allocation',
    cagr3Y: 17.5,
    cagr5Y: 18.2,
    expenseRatioDirect: 0.71,
    expenseRatioRegular: 1.51,
    aum: '₹84,300 Cr',
    rating: 4,
    fundManager: 'Gopal Agrawal'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Aravind S.',
    role: 'Staff Software Architect',
    company: 'Fintech Unicorn, Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    quote: 'Fermor changed how I track my wealth across 4 brokers and 6 mutual funds. The direct fund auto-switch alone saved me over ₹1.2 Lakh in commissions this year. The UI speed is unmatched.',
    portfolioGrowth: '+34.2% Return',
    investedSince: 'Member since 2024',
    verified: true,
    highlightTag: 'Saved ₹1.2L in commissions'
  },
  {
    id: '2',
    name: 'Meera Nambiar',
    role: 'Product VP & Angel Investor',
    company: 'Indiranagar, Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    quote: 'The "Understand. Act. Grow." framework isn’t just marketing copy—it is baked into every single screen. I can see my exact liquidity score, rebalance thematic baskets in 1 click, and automate salary SIPs effortlessly.',
    portfolioGrowth: '₹84L Managed',
    investedSince: 'Member since 2024',
    verified: true,
    highlightTag: '1-Click Rebalancing'
  },
  {
    id: '3',
    name: 'Rohan Deshmukh',
    role: 'Active Options Trader & Quant',
    company: 'Koramangala, Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    quote: 'Sub-20ms order execution on F&O with real-time Greeks and automatic risk stop-losses. Fermor feels like a Bloomberg terminal combined with the elegance of modern consumer tech.',
    portfolioGrowth: '99.98% Fill Rate',
    investedSince: 'Member since 2025',
    verified: true,
    highlightTag: '18ms Order Latency'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'What is Fermor and how does it make finance simpler?',
    answer: 'Fermor is an all-in-one modern financial platform designed around three clear pillars: Understand, Act, and Grow. We aggregate your entire net worth across all Indian brokers and bank accounts, provide 0-brokerage direct investing in stocks and mutual funds, and offer AI-backed quantitative research and automated rebalancing—all wrapped in a clean, lightning-fast interface.'
  },
  {
    id: 'faq-2',
    category: 'pricing',
    question: 'Are there really zero brokerage and zero account opening fees?',
    answer: 'Yes, 100%! Fermor charges ₹0 for account opening, ₹0 annual maintenance charges (AMC) for life, and ₹0 brokerage on Equity Delivery and Direct Mutual Funds. For intraday equity and F&O, we charge a flat fee of ₹20 per executed order. No hidden percentages, no platform fees.'
  },
  {
    id: 'faq-3',
    category: 'investing',
    question: 'How does Fermor help me save money on Mutual Funds?',
    answer: 'Traditional banks and brokers sell Regular Mutual Funds where distributors take 1% to 1.5% commission every year from your returns. Fermor exclusively offers 100% Direct Mutual Funds with 0% distributor commission. Over a 15-20 year compounding horizon, this puts up to ₹25+ Lakhs more money into your pocket.'
  },
  {
    id: 'faq-4',
    category: 'security',
    question: 'How safe is my money and personal financial data on Fermor?',
    answer: 'Your securities are stored directly in your own CDSL/NSDL demat account in your name. Even in an unforeseen event, your shares and mutual funds remain completely safe with national depositories. We use bank-grade 256-bit AES encryption, multi-factor biometric authentication, and are fully compliant with SEBI regulations.'
  },
  {
    id: 'faq-5',
    category: 'migration',
    question: 'Can I import my existing portfolio from Zerodha, Groww, or Upstox?',
    answer: 'Absolutely. With our instant CAS (Consolidated Account Statement) and Account Aggregator integration, you can import and sync your entire stock portfolio and mutual fund investments in under 60 seconds with 1-click verification.'
  },
  {
    id: 'faq-6',
    category: 'investing',
    question: 'What are Fermor Thematic Baskets?',
    answer: 'Thematic Baskets are curated collections of high-potential stocks and ETFs built around specific growth themes (e.g. EV & Green Energy, Digital Titans, Defence Capex). They are researched and rebalanced by SEBI Registered Research Analysts and can be invested in with a single click.'
  }
];
