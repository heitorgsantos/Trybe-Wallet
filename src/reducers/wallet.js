const INITIAL_STATE = {
  expenses: [],
  id: 0,
  currencies: [],
};

function wallet(state = INITIAL_STATE, action) {
  console.log(state);
  switch (action.type) {
  case 'SET_DESPESA':
    return { ...state,
      expenses:
       [...state.expenses, { ...action.payload, exchangeRates: state.currencies }],
      id: state.id + 1 };
  case 'GET_CURRENCY_SUCESS':
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
}

export default wallet;
