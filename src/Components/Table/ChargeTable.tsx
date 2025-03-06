import deleteSvg from "../../assets/delete.svg";
import repeatSvg from "../../assets/repeat.svg";
import downloadSvg from "../../assets/download.svg";
import { Charge } from "../../Models";
import { useMemo, useState } from "react";
import { currencyFormatter } from "../../Utils/currencyFormatter";
import "./ChargeTable.css";

interface Props {
  chargeList: Charge[];
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
  handleClear: () => void;
}

function ChargeTable({
  chargeList,
  handleEdit,
  handleDelete,
  handleClear,
}: Props) {
  const [selectedCharge, setSelectedCharge] = useState<number>(0);

  // to avoid excesive re renders
  const totalCharge = useMemo(() => {
    const total = chargeList.reduce((accumulator, current) => {
      return (
        accumulator +
        Number(current.productPrice) * Number(current.productQuantity)
      );
    }, 0);
    return currencyFormatter(total);
  }, [chargeList.length]);

  const handleClick = (newTargetId: number): void => {
    setSelectedCharge((prev) => {
      if (prev === newTargetId) {
        return 0;
      } else {
        console.log(newTargetId);
        handleEdit(newTargetId);
        return newTargetId;
      }
    });
  };
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
                className={selectedCharge === charge.id ? "selected-tr" : ""}
                key={index}
                onClick={() => handleClick(charge.id)}
              >
                <td className="sm-column">{charge.productQuantity}</td>
                <td className="md-column">{charge.productName}</td>
                <td>
                  $&nbsp;{Number(charge.productPrice).toLocaleString("es-ES")}
                </td>
                <td>
                  $&nbsp;
                  {(
                    Number(charge.productPrice) * Number(charge.productQuantity)
                  ).toLocaleString("es-ES")}
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={4} className="form-total">
              Total:
              <b>
                &nbsp;$&nbsp;
                {totalCharge}
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
          <button className="main-button download-action">
            <img src={downloadSvg} width="30" height="30" />
          </button>
          <button className="form-repeat" onClick={handleClear}>
            <img src={repeatSvg} width="30" height="30" />
          </button>
        </div>
      </div>
    </>
  );
}
export default ChargeTable;
