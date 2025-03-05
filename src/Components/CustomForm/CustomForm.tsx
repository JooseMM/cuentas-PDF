import { ChangeEvent, FormEvent } from "react";
import { Charge, ChargeProperties, ClientInfo, Order } from "../../Models";
import { CustomInput } from "./Components/CustomInput/CustomInput";
import "./CustomForm.css";

interface Props {
  singleCharge: Charge;
  order: Order;
  handleClientInfoChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleChargeChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const CustomForm = ({
  singleCharge,
  order,
  handleChargeChange,
  handleSubmit,
  handleClientInfoChange,
}: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="title">JM</h1>
      <div className="input-info-section">
        <CustomInput
          inputAttributes={{
            minLength: 1,
            maxLength: 30,
            type: "text",
            placeholder: "Utiliza solo letras y espacios",
            name: ClientInfo.ClientName,
            disabled: order.charges.length > 0 ? true : false,
            required: true,
            value: order[ClientInfo.ClientName],
            onChange: handleClientInfoChange,
          }}
          label="Nombre de Cliente"
        />
        <CustomInput
          inputAttributes={{
            type: "text",
            maxLength: 30,
            minLength: 1,
            required: true,
            disabled: order.charges.length > 0 ? true : false,
            placeholder: "Nombre de la empresa asociada al cliente",
            name: ClientInfo.ClientCompany,
            value: order[ClientInfo.ClientCompany],
            onChange: handleClientInfoChange,
          }}
          label="Nombre de Empresa"
        />
      </div>
      <div className="input-info-section">
        <CustomInput
          inputAttributes={{
            type: "text",
            minLength: 1,
            maxLength: 20,
            required: true,
            placeholder: "Nombre del producto o servicio ofrecido",
            name: ChargeProperties.ProductName,
            value: singleCharge[ChargeProperties.ProductName],
            onChange: handleChargeChange,
          }}
          label="Producto/Servicio"
        />
        <CustomInput
          inputAttributes={{
            min: 1,
            max: 20,
            type: "number",
            required: true,
            name: ChargeProperties.ProductQuantity,
            value: singleCharge[ChargeProperties.ProductQuantity],
            onChange: handleChargeChange,
          }}
          label="Cantidad"
        />
        <CustomInput
          inputAttributes={{
            min: 1000,
            type: "number",
            step: 500,
            required: true,
            name: ChargeProperties.ProductPrice,
            value: singleCharge[ChargeProperties.ProductPrice],
            onChange: handleChargeChange,
          }}
          label="Precio por Unidad"
        />
      </div>
      <button className="main-button">Anadir</button>
    </form>
  );
};
export default CustomForm;
