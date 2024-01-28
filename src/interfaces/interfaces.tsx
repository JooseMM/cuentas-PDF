import { FormEvent } from "react";

export interface Client {
  name: string,
  seller: string,
  branch: string,
  product: string
}
export interface Branch {
  name: string,
  location: string
}
export interface Product {
  type: string,
  price: number,
}
export interface ActionParams extends PurchaseDetails {
  finish: boolean
}
export interface PurchaseDetails {
[key: string]: string | number | boolean;
  clientName: string,
  clientSeller: string,
  branch: string,
  productName: string,
  productPrice: number
}
export interface InputInterfaceProps {
  state: PurchaseDetails[],
  handleChange: Function
}
