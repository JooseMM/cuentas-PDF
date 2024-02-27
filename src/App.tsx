import './App.css'
import Navbar from './Components/Navbar'
import { useAccountState } from './CustomHooks/useAccountState';
import InputInterface from './Components/InputInterface';
import OutputInterface from './Components/OutputInterface';
import PDFDocument from './Components/PDFDocument';
import { PDFDownloadLink } from '@react-pdf/renderer';

function App() {
    const  { state, handleChange, totalPayment, setTotalPayment }= useAccountState();
  return (
    <>
      <Navbar/>
    <main className="main-container">
      <InputInterface handleChange={handleChange} state={state} />
      <OutputInterface setTotalPayment={setTotalPayment} state={state} handleChange={handleChange} totalPayment={totalPayment}/>
      <div className="finish-section">
	<button className="alt-btn" onClick={()=> handleChange(undefined, true, 'clear')}>Limpiar</button>
	<PDFDownloadLink  className="download-btn" document={<PDFDocument state={state} totalPayment={totalPayment}/>} fileName='account-details'>Descargar</PDFDownloadLink>
      </div>
    </main>
    </>
  )
}

export default App
