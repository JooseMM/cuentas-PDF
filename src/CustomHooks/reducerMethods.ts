import { ActionParams, PurchaseDetails } from "../interfaces/interfaces";
export const initValue = { clientName: '', clientSeller: '', branch: '', productName: '', productQuantity: 0, productPrice: 0 };

export function reducer(state:PurchaseDetails[], action:ActionParams):PurchaseDetails[] {
  if(action.finish) {
    const initCopy = {...initValue};
    const newState = [...state];
    const lastIndex = state.length - 1;
    newState[lastIndex].productPrice *= state[lastIndex].productQuantity;
    return [...newState, initCopy]
  }
  const newState = state.map((currentValue, index)=> {
    if(index === state.length - 1) {
      for(const key in currentValue) {
	currentValue[key] = action[key] === undefined ? currentValue[key]: action[key]; 
      }
    }
    return currentValue;
  })
  return newState;
}

