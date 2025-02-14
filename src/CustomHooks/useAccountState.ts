import { useEffect, FormEvent, useReducer, useState } from "react";
import { ActionParams } from "../interfaces/interfaces";
import { reducer, initValue } from "./reducerMethods";

const onChangePrototype = {
  clientName: undefined,
  clientSeller: undefined,
  branch: undefined,
  productName: undefined,
  productQuantity: undefined,
  totalPrice: undefined,
  productPrice: undefined,
  finish: false,
  clear: false,
};

export function useAccountState() {
  const [totalPayment, setTotalPayment] = useState(0);
  const initCopy = { ...initValue };
  const [state, dispatch] = useReducer(reducer, [initCopy]);

  function handleChange(
    event: FormEvent<HTMLFormElement> | undefined,
    updateValue: string | number | boolean,
    key: keyof ActionParams,
  ): void {
    if (event) {
      event.preventDefault();
    }
    const finishValue = Object.create(onChangePrototype);
    finishValue[key] = updateValue;
    dispatch(finishValue);
  }
  useEffect(() => {
    setTotalPayment(() =>
      state.reduce(
        (accumulator, currentElement) =>
          accumulator + currentElement.totalPrice,
        0,
      ),
    );
  }, [state.length]);

  return { handleChange, state, totalPayment };
}
