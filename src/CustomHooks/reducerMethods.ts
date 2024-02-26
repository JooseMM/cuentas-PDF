import { ActionParams, PurchaseDetails } from "../interfaces/interfaces";
export const initValue = { clientName: '', clientSeller: '', branch: '', productName: '', productQuantity: 0, productPrice: 0, totalPrice: 0 };

export function reducer(state:PurchaseDetails[], action:ActionParams):PurchaseDetails[] {
    const initCopy = {...initValue};
  if(action.finish) {
    const newState = [...state];
    const lastIndex = state.length - 1;
    newState[lastIndex].totalPrice = state[lastIndex].productPrice * state[lastIndex].productQuantity;
    return [...newState, initCopy]
  }
  if(action.delete !== undefined ) {
    const newState = state.filter((_element, index)=> index != action.delete);
    return [...newState];
  }
  if(action.clear) {
    return [initCopy];
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

