export interface ICardItem {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
}

export interface ICard {
  cards: ICardItem[];
  loading: boolean;
  error: boolean;
}
