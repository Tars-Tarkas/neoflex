export interface ICardItem {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
}

export interface ICard {
  cards: ICardItem[];
  shopCards: ICardItem[];
  loading: boolean;
  error: string;
}
