export interface ICryptoModel {
  id: string;
  name: string;
  symbol: string;
  price_usd: string;
  percent_change_24h: string;
}

export interface ICryptoByIdModel {
  id: string;
  symbol: string;
  name: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  percent_change_1h: string;
  percent_change_7d: string;
  price_btc: string;
  market_cap_usd: string;
  volume24: number;
  volume24a: number;
}
