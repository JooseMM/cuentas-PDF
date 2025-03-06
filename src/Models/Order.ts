import { Charge, ClientInfo } from ".";

export interface Order {
  [ClientInfo.ClientName]: string;
  [ClientInfo.ClientCompany]: string;
  charges: Charge[];
  totalCharge: string;
}
