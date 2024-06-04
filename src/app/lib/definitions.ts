export interface MenuItem {
  title: string;
  href: string;
}

export interface IContainer {
  children: React.ReactNode;
}

export interface Allproduct {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: ProductRating;
}

export interface ProductRating {
  rate: number;
  count: number;
}
