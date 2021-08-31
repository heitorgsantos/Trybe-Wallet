const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN':
    return { email: action.state };
  default:
    return state;
  }
}

export default user;
