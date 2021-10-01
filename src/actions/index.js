export const SET_USER = 'SET_USER';

export const SET_DESPESA = 'SET_DESPESA';

export const GET_CURRENCY_SUCESS = 'GET_CURRENCY_SUCESS';

export const SET_DELETE = 'SET-DELETE';

export const setDelete = (payload) => ({ type: SET_DELETE, payload });

export const setUserValue = (payload) => ({ type: SET_USER, payload });

export const setDespesas = (payload) => ({ type: SET_DESPESA, payload });

export const getCurrencySucess = (payload) => ({ type: GET_CURRENCY_SUCESS, payload });

/* export const setDeleteThunk = (expense) => async (dispatch) => {
  try {
    const { id, array } = expense;
    const newExpenses = array.filter((item) => item.id !== id);
    dispatch(setDespesas({ newExpenses }));
  } catch (error) { console.log(error); }
}; */

export const getCurrencyThunk = (expense) => async (dispatch) => {
  try {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(url);
    const exchangeRates = await response.json();
    delete exchangeRates.USDT;
    dispatch(setDespesas({ ...expense, exchangeRates }));
    dispatch(getCurrencySucess(exchangeRates));
    // dispatch;
  } catch (error) {
    console.log(error);
  }
};
