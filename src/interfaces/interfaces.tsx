
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
  finish: boolean,
  delete: number,
  clear: boolean
}
export interface PurchaseDetails {
[key: string]: string | number | boolean;
  clientName: string,
  clientSeller: string,
  branch: string,
  productName: string,
  productPrice: number,
  totalPrice: number,
  productQuantity: number
}
export interface InputInterfaceProps {
  state: PurchaseDetails[],
  handleChange: Function
}
export interface OutputInterfaceProps {
  state: PurchaseDetails[],
  totalPayment: number,
  handleChange: Function
}
export interface PDFDocumentProps {
  state: PurchaseDetails[],
  totalPayment: number,
}
