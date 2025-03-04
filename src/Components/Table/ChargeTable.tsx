import DeleteSVG from "../../assets/delete.svg";
import { Charge } from "../../Models";
import { useState } from "react";
import { currencyFormatter } from "../../Utils/currencyFormatter";
import "./ChargeTable.css";

interface Props {
  chargeList: Charge[];
  deleteAt: (index: number) => void;
}

function ChargeTable({ chargeList, deleteAt }: Props) {
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
                onClick={() => setSelectedCharge(index)}
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
        </tbody>
      </table>
      <div>
        <div className="finish-section">
          <button
            className="desktop-delete-btn"
            onClick={() => deleteAt(selectedCharge)}
          >
            <img src={DeleteSVG} width={30} height={30} alt="delete charge" />
          </button>
        </div>
      </div>
    </>
  );
}
export default ChargeTable;
