import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./IncomeExpenses.scss";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext); //Nuestro useContext cogerá la data del globalContext

  const amounts = transactions.map((transaction) => transaction.amount); //mapeamos todas las transacciones en un nuevo array

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2); //filtramos las cantidades para coger solo las positivas; las añadimos con reduce, y añadimos dos decimales

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -(1).toFixed(2); //igual para los gastos, pero el filter para números menores que 0, y al final del reduce multiplicamos por -1 para que sea negativo siempre

  return (
    <section className="incExpContainer">
      <article>
        <h4>Ingresos</h4>
        <p className="money plus">{income}€</p>
      </article>

      <article>
        <h4>Gastos</h4>
        <p className="money minus">{expense}€</p>
      </article>
    </section>
  );
};
