import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./Balance.scss";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext); //Nuestro useContext cogerá la data del globalContext

  const amounts = transactions.map((transaction) => transaction.amount); //mapeamos todas las transacciones en un nuevo array
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); //usamos reduce para añadirlas todas y toFix para tener dos decimales

  return (
    <>
      <h4>Tu dinero</h4>
      <h1>{total}€</h1>
    </>
  );
};
