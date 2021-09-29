import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setDespesas, getCurrencyThunk } from '../actions';
import coinsApi from '../requisições/coinsApi';
import Header from './Header';

class FormDespesa extends React.Component {
  constructor() {
    super();
    this.state = {
      moedas: [],
    };
    this.addExpenses = this.addExpenses.bind(this);
  }

  componentDidMount() {
    coinsApi()
      .then((answer) => this.setState({ moedas: answer }));
    // console.log(coins);
  }

  // getCurrency() {
  //   const { getCurrReq } = this.props;
  //   getCurrReq();
  //   // expenses()
  // }

  addExpenses() {
    const { getCurrReq, expenses, id } = this.props;
    getCurrReq();
    expenses({
      id,
      value: document.getElementById('valor').value,
      description: document.getElementById('descricao').value,
      currency: document.getElementById('moeda').value,
      method: document.getElementById('pay').value,
      tag: document.getElementById('despesa').value,
    });
  }

  render() {
    const { moedas } = this.state;
    // const { currencies } = this.props;
    // const counter = id;
    // const exRa = exchangeRates;
    // console.log(exchangeRates);

    // console.log(id);
    return (
      <>
        <Header />

        <form>
          <label htmlFor="valor">
            Valor
            <input id="valor" name="valor" type="text" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input id="descricao" name="descricao" type="text" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              {/* { console.log(moedas)} */}
              {moedas.map((moeda) => <option key={ moeda }>{moeda}</option>)}
            </select>
          </label>
          <button
            type="button"
            onClick={ this.addExpenses }

          >
            Adicionar despesa
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  expenses: (payload) => dispatch(setDespesas(payload)),
  getCurrReq: () => dispatch(getCurrencyThunk()),

});

const mapStateToProps = ({ wallet: { id, currencies } }) => ({
  id,
  currencies,
});

FormDespesa.propTypes = {
  expenses: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  getCurrReq: PropTypes.func.isRequired,
  // currencies: PropTypes.objectOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormDespesa);
