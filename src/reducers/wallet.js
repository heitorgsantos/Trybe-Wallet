const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};

function wallet(state = INITIAL_STATE, action) {
  // console.log(state);
  switch (action.type) {
  case 'SET_DESPESA':
    return { ...state,
      expenses:
       [...state.expenses, action.payload] };
  case 'GET_CURRENCY_SUCESS':
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
}

export default wallet;
