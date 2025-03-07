import { Page, Text, View, Document } from "@react-pdf/renderer";
import { documentStyles } from "./documentStyles";
import { Order } from "../../Models";
import { localDateFormatter } from "../../Utils/localDateFormatter";
import { useMemo } from "react";
import { currencyFormatter } from "../../Utils/currencyFormatter";
import getTotalCharge from "../../Utils/getTotalCharge";

interface Prop {
  order: Order;
}
const PDFDocument = ({ order }: Prop) => {
  const totalCharge = useMemo(
    () => getTotalCharge(order.charges),
    [order.charges],
  );
  return (
    <Document>
      <Page size={"A4"} style={documentStyles.page}>
        <View style={documentStyles.header}>
          <Text>{order.userCompany}</Text>
        </View>
        <View style={documentStyles.sideInfo}>
          <Text>{order.clientName}</Text>
          <Text>{localDateFormatter(new Date())}</Text>
        </View>
        <View style={documentStyles.table}>
          <View style={documentStyles.tableHeaderContainer}>
            <Text style={documentStyles.tableUnit}>Uds.</Text>
            <Text style={documentStyles.tableProduct}>Producto</Text>
            <Text style={documentStyles.tablePricePerUnit}>Unidad</Text>
            <Text style={documentStyles.tableTotalPrice}>Cargo</Text>
          </View>
          <View style={documentStyles.tableBody}>
            {order.charges.map((charge, index) => {
              return (
                <View key={index} style={documentStyles.bodyRow}>
                  <View style={documentStyles.unitBodycolumn}>
                    <Text>{charge.productQuantity}</Text>
                  </View>
                  <View style={documentStyles.productBodycolumn}>
                    <Text>{charge.productName}</Text>
                  </View>
                  <View style={documentStyles.pricePerUnitBodycolumn}>
                    <Text>
                      {currencyFormatter(Number(charge.productPrice))}
                    </Text>
                  </View>
                  <View style={documentStyles.totalPriceBodycolumn}>
                    <Text>
                      {currencyFormatter(
                        Number(charge.productPrice) *
                          Number(charge.productQuantity),
                      )}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
          <View style={documentStyles.total}>
            <Text style={documentStyles.bold}>Total: </Text>
            <Text>{totalCharge}</Text>
          </View>
        </View>
        <View wrap={false} style={documentStyles.bankAccount}>
          <View style={documentStyles.row}>
            <Text style={documentStyles.bold}>Datos de Transferencia</Text>
          </View>
          <View style={documentStyles.row}>
            <Text style={documentStyles.bold}>Razon Social:</Text>
            <Text> Empresa Ficticia</Text>
          </View>
          <View style={documentStyles.row}>
            <Text style={documentStyles.bold}>RUT:</Text>
            <Text> 26.603.232-2</Text>
          </View>
          <View style={documentStyles.row}>
            <Text style={documentStyles.bold}>Banco:</Text>
            <Text> Ficticio</Text>
          </View>
          <View style={documentStyles.row}>
            <Text style={documentStyles.bold}>Cuenta:</Text>
            <Text> Corriente</Text>
          </View>
          <View style={documentStyles.row}>
            <Text style={documentStyles.bold}>N. de Cuenta:</Text>
            <Text> 999-000-222</Text>
          </View>
          <View style={documentStyles.row}>
            <Text style={documentStyles.bold}>Email:</Text>
            <Text> company@chile.com</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
export default PDFDocument;
