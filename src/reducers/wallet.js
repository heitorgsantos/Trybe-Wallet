const INITIAL_STATE = {
  state: '',
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'NEW_ACTIOON':
    return { state: action.state };
  default:
    return state;
  }
}

export default wallet;
