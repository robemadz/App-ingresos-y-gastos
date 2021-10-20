import React from "react";
import "./Transaction.scss";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+"; //variable que determina el símbolo de la cantidad en el historial de transacciones
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}
        {Math.abs(transaction.amount)}€
      </span>
      <button className="delete-btn">x</button>
    </li>
  ); //el operador Math.abs convierte el número en absoluto para que no salgan dobles signos -
};
