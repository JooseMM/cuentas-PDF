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
export function formatToCurrency(amout: number):string {
  console.log("execute");
  return amout.toLocaleString('es-ES');
}
export function getSpanishDate ():string {
    const date = new Date();
    const formattedDate = date.toLocaleString('es', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'});
    const charToUppercase = formattedDate.charAt(0).toUpperCase();
    return charToUppercase.concat(formattedDate.slice(1));
  }
