import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Charge } from "../Models";
import { orderInitialState, singleChargeInitialState } from "./initialState";
import { Order } from "../Models/Order";

export function useCustomFormState() {
  const [order, setOrder] = useState<Order>({ ...orderInitialState });
  const [singleCharge, setSingleCharge] = useState<Charge>(
    singleChargeInitialState,
  );
  useEffect(() => { 
      console.log(order);
    }, [order]);
    const handleClientInfoChange = (event: ChangeEvent<HTMLInputElement>) => {
      setOrder((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleChargeChange = (event: ChangeEvent<HTMLInputElement>) => {
      setSingleCharge((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSumit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newCharge = singleCharge.productQuantity * singleCharge.productPrice;
    setOrder((prev) => ({
      ...prev,
      totalCharge: prev.totalCharge + newCharge,
      charges: [...prev.charges, singleCharge],
    }));
  };
  return {
    order,
    singleCharge,
    handleChargeChange,
    handleClientInfoChange,
    handleSumit,
  };
}
