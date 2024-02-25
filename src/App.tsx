import './App.css'
import Navbar from './Components/Navbar'
import { useAccountState } from './CustomHooks/useAccountState';
import InputInterface from './Components/InputInterface';
import OutputInterface from './Components/OutputInterface';

function App() {

    const  { state, handleChange, totalPayment, setTotalPayment }= useAccountState();
  return (
    <>
      <Navbar/>
    <main className="main-container">
      <InputInterface handleChange={handleChange} state={state} />
      <OutputInterface setTotalPayment={setTotalPayment} state={state} handleChange={handleChange} totalPayment={totalPayment}/>
      <div className="finish-section">
	<button className="alt-btn">Limpiar</button>
	<button className="download-btn">Descargar</button>
      </div>
    </main>
    </>
  )
}

export default App
