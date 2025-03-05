import { ChangeEvent, FormEvent, useState } from "react";
import { Charge } from "../Models";
import { orderInitialState, singleChargeInitialState } from "./initialState";
import { Order } from "../Models/Order";

export function useCustomFormState() {
  const [order, setOrder] = useState<Order>({ ...orderInitialState });
  const [singleCharge, setSingleCharge] = useState<Charge>(
    singleChargeInitialState,
  );
  const handleClientInfoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOrder((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleChargeChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSingleCharge((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleDelete = (target: number): void => {
    setOrder((prev) => ({
      ...prev,
      charges: prev.charges.filter((_, index) => index !== target),
    }));
  };

  const handleClear = (): void => {
    setOrder({ ...orderInitialState });
    setSingleCharge({ ...singleChargeInitialState });
  };

  const handleSumit = (event: FormEvent<HTMLFormElement>): void => {
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
    handleDelete,
    handleClear,
  };
}
