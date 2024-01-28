import '../App.css';
import { useAccountState } from '../CustomHooks/useAccountState';
import InputInterface from './InputInterface';
import OutputInterface from './OutputInterface';

const MainContainer = () => {
    const  { state, handleChange }= useAccountState();

  return (
    <main className="flex-center">
      <InputInterface handleChange={handleChange} state={state} />
      <OutputInterface state={state}/>
    </main>
  )

}
export default MainContainer;
