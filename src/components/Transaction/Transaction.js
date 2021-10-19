import React from "react";
import "./Transaction.scss";

export const Transaction = ({ transaction }) => {
  return (
    <li className="minus">
      {transaction.text}
      <span>-400€</span>
      <button className="delete-btn">x</button>
    </li>
  );
};
