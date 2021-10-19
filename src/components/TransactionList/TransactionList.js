import React, { useContext } from "react";
import { Transaction } from "../Transaction/Transaction";
import { GlobalContext } from "../../context/GlobalState";
import "./TransactionList.scss";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext); //Nuestro contexto pillará datos del globalcontext

  return (
    <>
      <h3>Historial</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
