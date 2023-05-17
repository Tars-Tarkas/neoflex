export interface ICardItem {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
  // count: number;
}
export interface ICardItemShop {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
  count: number;
}

export interface ICard {
  cards: ICardItem[];
  shopCards: ICardItemShop[];
  loading: boolean;
  error: string;
}
