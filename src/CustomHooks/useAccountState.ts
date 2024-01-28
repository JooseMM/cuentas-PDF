import { FormEvent, useReducer } from "react";
import { ActionParams, PurchaseDetails } from "../interfaces/interfaces";


const initValue = { clientName: '', clientSeller: '', branch: '', productName: '', productPrice: 0 };
const onChangePrototype = { clientName: undefined, clientSeller: undefined, branch: undefined, productName: undefined, productPrice: 0, finish: false };

function reducer(state:PurchaseDetails[], action:ActionParams):PurchaseDetails[]{
  if(action.finish) {
    const initCopy = Object.create(initValue);
    return [...state, initCopy]
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

export function useAccountState() {
  const initCopy = Object.create(initValue);
  const [state, dispatch] = useReducer(reducer, [initCopy])
  function handleChange(event: FormEvent<HTMLFormElement> | undefined, updateValue: string | boolean, key: keyof ActionParams):void {

    if(event) { event.preventDefault(); }
    let finishValue = Object.create(onChangePrototype);
    finishValue[key] = updateValue;
    dispatch(finishValue);
  }
  return { handleChange, state }
}

