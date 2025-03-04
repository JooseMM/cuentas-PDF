import { ChargeProperties } from "./ChargeProperties.enum";

export interface Charge {
  [ChargeProperties.ProductName]: string;
  [ChargeProperties.ProductQuantity]: number;
  [ChargeProperties.ProductPrice]: number;
}
