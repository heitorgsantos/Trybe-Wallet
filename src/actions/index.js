export const SET_USER = 'SET_USER';

export const SET_DESPESA = 'SET_DESPESA';

export const GET_CURRENCY_SUCESS = 'GET_CURRENCY_SUCESS';

export const setUserValue = (payload) => ({ type: SET_USER, payload });

export const setDespesas = (payload) => ({ type: SET_DESPESA, payload });

export const getCurrencySucess = (payload) => ({ type: GET_CURRENCY_SUCESS, payload });

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
