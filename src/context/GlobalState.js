import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//estado inicial; será un objeto que contendrá nuestras transacciones
const initialState = {
  transactions: [
    { id: 1, text: "Perro", amount: 2500 },
    { id: 2, text: "IPhone", amount: -1000 },
  ],
};

//Creamos el context
export const GlobalContext = createContext(initialState);

//para que todos los componentes de la app tengan acceso al estado global, necesitamos un provider que los envuelva
export const GlobalProvider = ({ children }) => {
  const [state, disaptch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
