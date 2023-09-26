export interface Items {
  id: number;
  photo: string;
  price: number;
  title: string;
  weight: string;
  categoryId: string;
}

export interface Basket {
  id: number;
  photo: string;
  price: number;
  title: string;
}

export interface BasketSliceState {
  totalPrice: number;
  items: Items[];
}
