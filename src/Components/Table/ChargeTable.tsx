import deleteSvg from "../../assets/delete.svg";
import repeatSvg from "../../assets/repeat.svg";
import downloadSvg from "../../assets/download.svg";
import { useEffect, useMemo, useState } from "react";
import { currencyFormatter } from "../../Utils/currencyFormatter";
import "./ChargeTable.css";
import getTotalCharge from "../../Utils/getTotalCharge";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "../PDFDocument/PDFDocument";
import { Order } from "../../Models";

interface Props {
  order: Order;
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
  handleClear: () => void;
}

function ChargeTable({ order, handleEdit, handleDelete, handleClear }: Props) {
  const [selectedCharge, setSelectedCharge] = useState<number>(0);

  // to avoid excesive re renders
  const totalCharge = useMemo(
    () => getTotalCharge(order.charges),
    [order.charges.length],
  );

  const handleClick = (newTargetId: number): void => {
    setSelectedCharge((prev) => (prev === newTargetId ? 0 : newTargetId));
    handleEdit(newTargetId);
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
          {order.charges.map((charge, index) => {
            return (
              <tr
                className={selectedCharge === charge.id ? "selected-tr" : ""}
                key={index}
                onClick={() => handleClick(charge.id)}
              >
                <td className="sm-column">{charge.productQuantity}</td>
                <td className="md-column">{charge.productName}</td>
                <td>{currencyFormatter(Number(charge.productPrice))}</td>
                <td>
                  {currencyFormatter(
                    Number(charge.productPrice) *
                      Number(charge.productQuantity),
                  )}
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={4} className="form-total">
              Total:&nbsp;
              <b>{totalCharge}</b>
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
            <img src={deleteSvg} width="25" height="25" alt="delete charge" />
          </button>
          <PDFDownloadLink
            document={<PDFDocument order={order} />}
            fileName="Cuenta de Cobro"
            style={{ marginRight: "1rem" }}
          >
            <button className="main-button download-action">
              <img src={downloadSvg} width="30" height="30" />
            </button>
          </PDFDownloadLink>
          <button className="form-repeat" onClick={handleClear}>
            <img src={repeatSvg} width="25" height="25" />
          </button>
        </div>
      </div>
    </>
  );
}
export default ChargeTable;

/*
          <button
          </button>
*/
