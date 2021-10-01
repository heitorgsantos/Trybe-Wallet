import { SET_DELETE, SET_DESPESA, GET_CURRENCY_SUCESS } from '../actions/index';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};

function wallet(state = INITIAL_STATE, action) {
  // console.log(state);
  switch (action.type) {
  case SET_DESPESA:
    return { ...state,
      expenses:
       [...state.expenses, action.payload] };
  case GET_CURRENCY_SUCESS:
    return { ...state, currencies: action.payload };
  case SET_DELETE:
    console.log(action.payload);
    return { ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload.id) };
  default:
    return state;
  }
}

export default wallet;
