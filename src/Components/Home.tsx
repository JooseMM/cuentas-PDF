import InputInterface from '../Components/InputInterface';
import OutputInterface from '../Components/OutputInterface';
import PDFDocument from '../Components/PDFDocument';
import { PDFDownloadLink } from '@react-pdf/renderer';
import '../App.css'
import { useAccountState } from '../CustomHooks/useAccountState';

function Home() {
  const  { state, handleChange, totalPayment }= useAccountState();
  return (
    <>
      <main className="main-container">
	<InputInterface handleChange={handleChange} state={state} />
	{ state.length > 1 ? <div>
	  <OutputInterface state={state} handleChange={handleChange} totalPayment={totalPayment}/>
	  <div className="finish-section">
	    <button className="alt-btn" onClick={()=> handleChange(undefined, true, 'clear')}>Limpiar</button>
	    <PDFDownloadLink  className="download-btn" document={<PDFDocument state={state} totalPayment={totalPayment}/>} fileName='account-details'>Descargar</PDFDownloadLink>
	  </div>
	</div> : null }
      </main>
    </>
  )
}
export default Home;
