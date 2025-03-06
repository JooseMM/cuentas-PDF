import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Charge } from "../Models";
import { orderInitialState, singleChargeInitialState } from "./initialState";
import { Order } from "../Models/Order";

export function useCustomFormState() {
  const [order, setOrder] = useState<Order>({ ...orderInitialState });
  const [singleCharge, setSingleCharge] = useState<Charge>(
    singleChargeInitialState,
  );
  const [modifiyingAt, setModifiyingAt] = useState<number>(0);

  useEffect(() => console.log(modifiyingAt), [modifiyingAt]);
  const handleClientInfoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOrder((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleChargeChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSingleCharge((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleDelete = (id: number): void => {
    setOrder((prev) => ({
      ...prev,
      charges: prev.charges.filter((item) => item.id !== id),
    }));
  };

  const handleClear = (): void => {
    setOrder({ ...orderInitialState });
    setSingleCharge({ ...singleChargeInitialState });
  };

  const handleSumit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const currentTime = new Date().getTime();
    const newCharge =
      Number(singleCharge.productQuantity) * Number(singleCharge.productPrice);
    setOrder((prev) => ({
      ...prev,
      totalCharge: prev.totalCharge + newCharge,
      charges: [...prev.charges, { ...singleCharge, id: currentTime }],
    }));
    setSingleCharge({ ...singleChargeInitialState });
  };
  const handleEdit = (id: number): void => {
    setModifiyingAt(id);
  };
  return {
    order,
    singleCharge,
    modifiyingAt,
    handleChargeChange,
    handleClientInfoChange,
    handleSumit,
    handleDelete,
    handleClear,
    handleEdit,
  };
}
