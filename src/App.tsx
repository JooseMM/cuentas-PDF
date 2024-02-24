import './App.css'
import Navbar from './Components/Navbar'
import { useAccountState } from './CustomHooks/useAccountState';
import InputInterface from './Components/InputInterface';
import OutputInterface from './Components/OutputInterface';

function App() {

    const  { state, handleChange }= useAccountState();
  return (
    <>
      <Navbar/>
    <main className="main-container">
      <InputInterface handleChange={handleChange} state={state} />
      <OutputInterface state={state}/>
    </main>
    </>
  )
}

export default App
