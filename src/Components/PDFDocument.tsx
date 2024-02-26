import { Text, Page, Document, PDFViewer } from "@react-pdf/renderer";
const PDFDocument = () => (
  <PDFViewer>
    <Document>
      <Page size={'A4'}>
	<Text>Hello World</Text>
      </Page>
    </Document>
  </PDFViewer>
)
export default PDFDocument;
