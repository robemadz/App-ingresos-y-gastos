import React from "react";
import "./IncomeExpenses.scss";

export const IncomeExpenses = () => {
  return (
    <section className="incExpContainer">
      <article>
        <h4>Ingresos</h4>
        <p className="money plus">+0.00€</p>
      </article>

      <article>
        <h4>Gastos</h4>
        <p className="money minus">-0.00€</p>
      </article>
    </section>
  );
};
