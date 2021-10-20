import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//estado inicial; será un objeto que contendrá nuestras transacciones
const initialState = {
  transactions: [],
};

//Creamos el context
export const GlobalContext = createContext(initialState);

//para que todos los componentes de la app tengan acceso al estado global, necesitamos un provider que los envuelva
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions que harán calls al reducer tanto para borrar items como para añadir transactions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
