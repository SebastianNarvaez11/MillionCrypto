import {ICryptoModel} from '../../../domain/models';

export interface IGetCryptosResponse {
  data: ICryptoItemResponse[];
  info: Info;
}

export interface ICryptoItemResponse {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  percent_change_1h: string;
  percent_change_7d: string;
  price_btc: string;
  market_cap_usd: string;
  volume24: number;
  volume24a: number;
  csupply: string;
  tsupply: string;
  msupply: null | string;
}

interface Info {
  coins_num: number;
  time: number;
}

export interface ICryptosResponsePaginated {
  cryptos: ICryptoModel[];
  totalPages: number;
  currentPage: number;
}
