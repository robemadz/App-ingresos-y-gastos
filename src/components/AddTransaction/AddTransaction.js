import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { nanoid } from "nanoid";
import "./AddTransaction.scss";

export const AddTransaction = () => {
  const [text, setText] = useState(""); //estado para controlar el input del "concepto" a introducir
  const [amount, setAmount] = useState(0); //estado para controla el input de la "cantidad" a introducir

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: nanoid(),
      text,
      amount: +amount, //para que la cantidad siempre sea dato de tipo number. Se podría hacer también con parseint.
    };

    addTransaction(newTransaction);
  };
  return (
    <>
      <h3>Añadir nueva transacción</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Concepto</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)} //función para que react añada lo que escribamos al estado.
            placeholder="Introducir concepto..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Cantidad (negativo - gasto, positivo - ingreso)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)} //función para que react añada lo que escribamos al estado.
            placeholder="Introducir cantidad..."
          />
        </div>
        <button className="btn">Añadir transacción</button>
      </form>
    </>
  );
};
