import deleteSvg from "../../assets/delete.svg";
import repeatSvg from "../../assets/repeat.svg";
import { Charge } from "../../Models";
import { useState } from "react";
import { currencyFormatter } from "../../Utils/currencyFormatter";
import "./ChargeTable.css";

interface Props {
  chargeList: Charge[];
  handleDelete: (index: number) => void;
  handleClear: () => void;
}

function ChargeTable({ chargeList, handleDelete, handleClear }: Props) {
  const [selectedCharge, setSelectedCharge] = useState<number>(-1);

  return (
    <>
      <table cellSpacing="0">
        <thead>
          <tr>
            <th className="sm-column">Uds.</th>
            <th className="md-column">Producto</th>
            <th>Precio</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {chargeList.map((charge, index) => {
            return (
              <tr
                className={selectedCharge === index ? "selected-tr" : ""}
                key={index}
                onClick={() =>
                  setSelectedCharge((prev) => (prev === index ? -1 : index))
                }
              >
                <td className="sm-column">{charge.productQuantity}</td>
                <td className="md-column">{charge.productName}</td>
                <td>$&nbsp;{currencyFormatter(charge.productPrice)}</td>
                <td>
                  $&nbsp;
                  {currencyFormatter(
                    charge.productPrice * charge.productQuantity,
                  )}
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={4} className="form-total">
              Total:
              <b>
                {" $" +
                  currencyFormatter(
                    chargeList.reduce(
                      (acc, crt) =>
                        acc + crt.productPrice * crt.productQuantity,
                      0,
                    ),
                  )}
              </b>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <div className="action-section">
          <button
            className="form-delete-item"
            onClick={() => handleDelete(selectedCharge)}
            disabled={selectedCharge < 0}
          >
            <img src={deleteSvg} width="30" height="30" alt="delete charge" />
          </button>
          <button className="main-button download-action">Descargar</button>
          <button className="form-repeat" onClick={handleClear}>
            <img src={repeatSvg} width="30" height="30" />
          </button>
        </div>
      </div>
    </>
  );
}
export default ChargeTable;
