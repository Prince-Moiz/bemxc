export type SignalSide = "BUY" | "SELL";

export type LiveSignal = {
  pair: string;
  broker: string;
  provider: string;
  verified: boolean;
  winRate: number;
  trustScore: number;
  rr: string;
  side: SignalSide;
  entry: string;
  stop: string;
  target: string;
};

export const LIVE_SIGNALS: LiveSignal[] = [
  {
    pair: "EUR/USD",
    broker: "IC Markets",
    provider: "Apex Desk",
    verified: true,
    winRate: 61.4,
    trustScore: 1842,
    rr: "1:2.4",
    side: "BUY",
    entry: "1.0872",
    stop: "1.0820",
    target: "1.0996",
  },
  {
    pair: "GBP/USD",
    broker: "Pepperstone",
    provider: "Nadir",
    verified: true,
    winRate: 57.8,
    trustScore: 1710,
    rr: "1:2.1",
    side: "SELL",
    entry: "1.3140",
    stop: "1.3208",
    target: "1.2998",
  },
  {
    pair: "USD/JPY",
    broker: "OANDA",
    provider: "Helix",
    verified: true,
    winRate: 64.2,
    trustScore: 1904,
    rr: "1:2.8",
    side: "BUY",
    entry: "149.82",
    stop: "148.90",
    target: "152.40",
  },
  {
    pair: "XAU/USD",
    broker: "FOREX.com",
    provider: "Ledger FX",
    verified: true,
    winRate: 59.1,
    trustScore: 1766,
    rr: "1:2.2",
    side: "BUY",
    entry: "2,384.6",
    stop: "2,361.0",
    target: "2,437.8",
  },
  {
    pair: "AUD/USD",
    broker: "XM",
    provider: "Polar",
    verified: false,
    winRate: 48.6,
    trustScore: 1320,
    rr: "1:1.8",
    side: "SELL",
    entry: "0.6642",
    stop: "0.6688",
    target: "0.6554",
  },
  {
    pair: "GBP/JPY",
    broker: "Dukascopy",
    provider: "Vector",
    verified: true,
    winRate: 55.3,
    trustScore: 1648,
    rr: "1:2.0",
    side: "BUY",
    entry: "196.40",
    stop: "194.80",
    target: "199.60",
  },
];
