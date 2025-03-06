import { ChargeProperties } from "./ChargeProperties.enum";

export interface Charge {
  [ChargeProperties.Id]: number;
  [ChargeProperties.ProductName]: string;
  [ChargeProperties.ProductQuantity]: string;
  [ChargeProperties.ProductPrice]: string;
}
