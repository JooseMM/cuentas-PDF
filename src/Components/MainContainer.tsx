import { FormEvent, useReducer } from "react";
import '../App.css';
import { PurchaseDetails, ActionParams } from '../interfaces/interfaces';

const initValue = {clientName: '', clientSeller: '', branch: '', productName: '', productPrice: 0};
const onChangePrototype = {clientName: undefined, clientSeller: undefined, branch: undefined, productName: undefined, productPrice: 0, finish: false };
function reducer(state:PurchaseDetails[], action:ActionParams):PurchaseDetails[]{
  if(action.finish) {
  const initCopy = Object.create(initValue);
    
    return [...state, initCopy]
  }
    const newState = state.map((currentValue, index)=>{
      if(index === state.length - 1) {
      console.log(action);
	  for(const key in currentValue){
	    currentValue[key] = action[key] === undefined ? currentValue[key]: action[key];
	  }
//	  currentValue.clientName = action.clientName === undefined ? currentValue.clientName : action.clientName;
//	  currentValue.clientSeller = action.clientSeller === undefined ? currentValue.clientSeller : action.clientSeller;
//	  currentValue.branch = action.branch === undefined ? currentValue.branch : action.branch;
//	  currentValue.productName = action.productName === undefined ? currentValue.productName : action.productName;
//	  currentValue.productPrice = action.productPrice === undefined ? currentValue.productPrice : action.productPrice;
      }
      return currentValue;
    })
    return newState;
}
const MainContainer = () => {
    const initCopy = Object.create(initValue);
    const [state, dispatch] = useReducer(reducer, [initCopy])
    function handleChange(event: FormEvent<HTMLFormElement> | undefined, updateValue: string | boolean, key: keyof ActionParams):void {

      if(event) { event.preventDefault(); }
      let finishValue = Object.create(onChangePrototype);
      finishValue[key] = updateValue;
      dispatch(finishValue);
    }
    const currentIndex = state.length - 1;

  return (
    <main className="flex-center">
	  <form onSubmit={(event)=> handleChange(event, true, "finish")}
	className="input-section flex-center">
	<h1>Data</h1>
	  <label htmlFor='client-name'>Client name</label>
	  <input type="text" id="client-name" 
	  value={state[currentIndex].clientName} 
	  onChange={(e)=> handleChange(undefined, e.target.value, 'clientName')}
	  />
	  <label htmlFor='client-seller'>Client seller</label>
	    <input type="text" id="client-seller" 
	    value={state[currentIndex].clientSeller} 
	    onChange={(e)=> handleChange(undefined, e.target.value, 'clientSeller')}
	    />
	  <label htmlFor='client-branch'>Client branch</label>
	  <input type="text" id="client-branch" 
	  value={state[currentIndex].branch}
	  onChange={(e)=> handleChange(undefined, e.target.value, 'branch')}
	  />
	  <label htmlFor='product-name'>Product</label>
	  <input type="text" id="product-name" 
	  value={state[currentIndex].productName}
	  onChange={(e)=> handleChange(undefined, e.target.value, 'productName')}
	  />
	  <label htmlFor='product-price'>Product Name</label>
	  <input type="number" id="product-price" 
	  value={state[currentIndex].productPrice}
	  onChange={(e)=> handleChange(undefined, e.target.value, 'productPrice')}
	  />
	  <button type='submit'>Add purchase</button>
	</form>
      <div className="output-section flex-center">
	{state.map((currentValue, index) => {
	  return (
	  <ul key={index}>
	    <li >Id:{index}</li>
	    <li >{currentValue.clientName}</li> 
	    <li >{currentValue.productPrice}</li>
	    <li >{currentValue.productName}</li> 
	    </ul>
	  )

	})}
      </div>
    </main>
  )

}
export default MainContainer;
