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
    </main>
    </>
  )
}

export default App
