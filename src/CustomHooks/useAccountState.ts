import { FormEvent, useReducer, useState } from "react";
import { ActionParams } from "../interfaces/interfaces";
import { reducer, initValue } from "./reducerMethods";

const onChangePrototype = { clientName: undefined, clientSeller: undefined, branch: undefined, productName: undefined, productQuantity: undefined, productPrice: undefined, finish: false };

export function useAccountState() {
  const total = 0;
  const initCopy = Object.create(initValue);
  const [state, dispatch] = useReducer(reducer, [initCopy])

  function handleChange(event: FormEvent<HTMLFormElement> | undefined, updateValue: string | number | boolean, key: keyof ActionParams):void {
    if(event) { event.preventDefault(); }
    const finishValue = Object.create(onChangePrototype);
    finishValue[key] = updateValue;
    dispatch(finishValue);
  }
  return { handleChange, state, total }
}

