import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./Transaction.scss";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext); //añadimos el context desde el contexto global para borrar transactions

  const sign = transaction.amount < 0 ? "-" : "+"; //variable que determina el símbolo de la cantidad en el historial de transacciones
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}
        {Math.abs(transaction.amount)}€
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)} //lo usamos con arrow function; necesitamos la id, que es lo que usa para saber cúal borrar
        className="delete-btn"
      >
        ⊖
      </button>
    </li>
  ); //el operador Math.abs convierte el número en absoluto para que no salgan dobles signos -
};
