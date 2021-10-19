import React from "react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Balance } from "./components/Balance/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses/IncomeExpenses";
import { TransactionList } from "./components/TransactionList/TransactionList";
import { AddTransaction } from "./components/AddTransaction/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <main className="mainWrapper">
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </main>
    </GlobalProvider>
  );
}

export default App;
