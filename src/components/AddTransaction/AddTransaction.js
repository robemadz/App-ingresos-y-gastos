import React, { useState } from "react";
import "./AddTransaction.scss";

export const AddTransaction = () => {
  const [text, setText] = useState(""); //estado para controlar el input del "concepto" a introducir
  const [amount, setAmount] = useState(0); //estado para controla el input de la "cantidad" a introducir
  return (
    <>
      <h3>Añadir nueva transacción</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)} //función para que react añada lo que escribamos al estado.
            placeholder="Introducir concepto..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negativo - gasto, positivo - ingreso)
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
