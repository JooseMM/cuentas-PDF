import { ChangeEvent, FormEvent, useState } from "react";
import { Charge } from "../Models";
import { orderInitialState, singleChargeInitialState } from "./initialState";
import { Order } from "../Models/Order";

export function useCustomFormState() {
  const [order, setOrder] = useState<Order>({ ...orderInitialState });
  const [singleCharge, setSingleCharge] = useState<Charge>({
    ...singleChargeInitialState,
  });
  const [modifiyingAt, setModifiyingAt] = useState<number>(0);

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

    if (modifiyingAt) {
      setOrder((prev) => ({
        ...prev,
        charges: prev.charges.map((item) => {
          if (item.id === modifiyingAt) {
            item = singleCharge;
          }
          return item;
        }),
      }));
    } else {
      setOrder((prev) => ({
        ...prev,
        charges: [...prev.charges, { ...singleCharge, id: currentTime }],
      }));
    }
    setSingleCharge({ ...singleChargeInitialState });
  };
  const handleEdit = (id: number): void => {
    const chargeTarget = order.charges.find((charge) => charge.id === id);

    if (id === modifiyingAt) {
      setSingleCharge({ ...singleChargeInitialState });
      return setModifiyingAt(0);
    }
    if (!chargeTarget) {
      throw new Error("charge not found");
    }

    setSingleCharge(chargeTarget);
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
