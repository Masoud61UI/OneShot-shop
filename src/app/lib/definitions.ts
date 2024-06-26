import { ReactElement } from "react";

export interface MenuItem {
  title: string;
  href: string;
}

export interface IChildren {
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

export interface CardItem {
  id: number;
  qty: number;
}

export interface featureItem {
  title: string;
  desc: string;
  icon: any;
}

export interface stateItem {
  title: string;
  amount: string;
  unit: string;
}

export interface InputItem {
  label: string;
  changehandle: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  type: React.HTMLInputTypeAttribute;
  value: string | number | readonly string[];
  placeholder: string;
}