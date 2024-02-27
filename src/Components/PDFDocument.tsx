import { Font, Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer"
import MerriweatherSansBold from "../assets/fonts/MerriweatherSans-Bold.ttf";
import MerriweatherSansRegular from "../assets/fonts/MerriweatherSans-Regular.ttf";
import MerriweatherSansLight from "../assets/fonts/MerriweatherSans-Light.ttf";
import { PDFDocumentProps } from "../interfaces/interfaces";
import { formatToCurrency, getSpanishDate } from "../CustomHooks/reducerMethods";

function PDFDocument ({ state, totalPayment }:PDFDocumentProps ) {
  Font.register({ family: 'Merriweather Sans', fonts: [
      { src: MerriweatherSansLight, fontWeight: 'light', fontStyle: 'normal' },
      { src: MerriweatherSansBold, fontStyle: 'normal', fontWeight: 'bold' },
      { src: MerriweatherSansRegular, fontWeight: 'normal', fontStyle: 'normal' },
   ]}); 
   const doctor = state[0].clientSeller;
const styles = StyleSheet.create({
  page: { backgroundColor: 'white', fontFamily: 'Merriweather Sans', paddingHorizontal: '5%', color: '#292A2B' },
  header: {marginHorizontal: 'auto', marginTop: '20%', fontSize: '60pt', fontWeight: 600 },
  sideInfo: { flex: "true", flexDirection: 'row', justifyContent: 'space-between', fontSize: '15pt', fontWeight: 400, marginTop: '50pt' },
  tableHeaderContainer: { backgroundColor: '#292A2B', color: 'white', flexDirection: 'row', paddingHorizontal: '30pt', fontWeight: 400, paddingVertical: '10pt', borderRadius: '3pt' },
  tableUnit: { marginRight: '35pt' },
  table: { marginTop: '30pt' },
  tableClient: { marginRight: '100pt'},
  tableProduct: { marginRight: '90pt'},
  unitBodyRow: { width: '105pt', textAlign: 'center' },
  clientBodyRow: { width: '175pt', textAlign: 'left', fontWeight: 400 },
  productBodyRow: { width: '165pt', textAlign: 'left' },
  priceBodyRow: { width: '90pt', textAlign: 'left', fontWeight: 400 },
  tableBody: { flexDirection: 'column', fontSize: '15pt', fontWeight: 100 },
  bodyRow: { paddingVertical: '13pt', flexDirection: 'row', borderBottomStyle: 'solid', borderBottomWidth: '1pt',  },
  bankAccount: { marginTop: '15%', textAlign: 'center'},
  total: { textAlign: 'center', paddingVertical: '10pt', flexDirection: 'row', justifyContent: 'center' },
  bold: { fontWeight: 600 },
  row: { flexDirection: 'row', justifyContent: 'center' }
});
  return (
      <Document>
	<Page size={'A4'} style={styles.page}>
	  <View style={styles.header}>
	    <Text>
	     JM
	    </Text>
	  </View>
	  <View style={styles.sideInfo}>
	    <Text>Dr/a.  {doctor}</Text>
	    <Text>{getSpanishDate()}</Text>
	  </View>
	  <View style={styles.table}>
	    <View style={styles.tableHeaderContainer}>
	      <Text style={styles.tableUnit}>Uds.</Text>
	      <Text style={styles.tableClient}>Paciente</Text>
	      <Text style={styles.tableProduct}>Producto</Text>
	      <Text>Precio</Text>
	    </View>
	    <View style={styles.tableBody}>
	      { state.map((element, index )=> {
		if(index !== state.length -1) {
		    return (
		    <View key={index} style={styles.bodyRow}>
		      <View style={styles.unitBodyRow} ><Text>{element.productQuantity}</Text></View>
		      <View style={styles.clientBodyRow} ><Text>{element.clientName}</Text></View>
		      <View style={styles.productBodyRow} ><Text>{element.productName}</Text></View>
		      <View style={styles.priceBodyRow} ><Text>${formatToCurrency(element.totalPrice)}</Text></View>
		    </View>
			)
		    }})}
	    </View>
	    <View style={styles.total}>
	      <Text style={styles.bold}>Total: </Text><Text> ${formatToCurrency(totalPayment)}</Text>
	    </View>
	</View >
	<View wrap={false} style={styles.bankAccount}>
	<View style={styles.row}><Text style={styles.bold}>Datos de Transferencia</Text></View>
	  <View style={styles.row}><Text style={styles.bold}>Razon Social:</Text><Text>  Empresa Ficticia</Text></View>
	  <View style={styles.row}><Text style={styles.bold}>RUT:</Text><Text>  26.603.232-2</Text></View>
	  <View style={styles.row}><Text style={styles.bold}>Banco:</Text><Text>  Ficticio</Text></View>
	  <View style={styles.row}><Text style={styles.bold}>Cuenta:</Text><Text>  Corriente</Text></View>
	  <View style={styles.row}><Text style={styles.bold}>N. de Cuenta:</Text><Text>  999-000-222</Text></View>
	  <View style={styles.row}><Text style={styles.bold}>Email:</Text><Text>  company@chile.com</Text></View>
	</View>
	</Page>
      </Document>
  )
}
export default PDFDocument;
