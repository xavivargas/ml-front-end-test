export class Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  state: string;
  description: string;
}

export class Price {
  currency: string;
  amount: number;
  decimals: number;
}

export class Author {
  name: string;
  lastname: string;
}
