import { SET_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
  emailvalidate: false,
  passwordValidate: false,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_USER:
    return { ...state, ...action.payload };
  default:
    return state;
  }
}

export default reducer;
