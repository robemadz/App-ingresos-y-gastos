export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      }; //usamos spread operator para que nos devuleva el estado. Luego filtramos por ID para que nos devuelva todas las transacciones menos la que se ha borrado (la función está en el global state)

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions], //spread operator para que nos devuelva un array con todas las transacciones que había, junto con la nueva, que es el action.payload (definida en global state)
      };
    default:
      return state;
  }
};
