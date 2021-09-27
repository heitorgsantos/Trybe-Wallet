const INITIAL_STATE = {
  state: '',
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'NEW_ACTIOON':
    return { state: action.state };
  case 'SET_DESPESA':
    return { ...state, expenses: action.payload };
  default:
    return state;
  }
}

export default wallet;
