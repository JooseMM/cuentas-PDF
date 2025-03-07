import { Charge, ClientInfo } from ".";

export interface Order {
  [ClientInfo.ClientName]: string;
  [ClientInfo.userCompany]: string;
  charges: Charge[];
}
