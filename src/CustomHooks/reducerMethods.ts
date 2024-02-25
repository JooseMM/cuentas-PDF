import { ActionParams, PurchaseDetails } from "../interfaces/interfaces";
export const initValue = { clientName: '', clientSeller: '', branch: '', productName: '', productQuantity: 0, productPrice: 0 };

export function reducer(state:PurchaseDetails[], action:ActionParams):PurchaseDetails[] {
    const initCopy = {...initValue};
  if(action.finish) {
    const newState = [...state];
    const lastIndex = state.length - 1;
    newState[lastIndex].productPrice *= state[lastIndex].productQuantity;
    return [...newState, initCopy]
  }
  if(action.delete !== undefined ) {
    const newState = state.length === 1 ? state.filter((_element, index)=> index != action.delete) : [initCopy];  
    return [...newState];
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

