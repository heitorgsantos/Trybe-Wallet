import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import FormDespesa from '../comoponents/FormDespesa';
import Pagamento from '../comoponents/Pagamento';
// import coinsApi from '../requisições/coinsApi';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      // coins: [],
    };
    // this.soma = this.soma.bind(TouchList)
  }

  // componentDidMount() {
  //   coinsApi();
  // }
// código com ajudo Jean Barros
  soma() {
    const { expenses } = this.props;
    const somaTotal = expenses.reduce((total, { currency, exchangeRates, value }) => (
      total + (Number(value) * exchangeRates[currency].ask)), 0);
    return somaTotal.toFixed(2);
    // console.log(expenses);
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header data-testid="email-field">
          <h2>{ email }</h2>
          <h2 data-testid="total-field">{this.soma()}</h2>
          <h3 data-testid="header-currency-field">`BRL`</h3>
        </header>
        <FormDespesa />
        <Pagamento />

      </div>

    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
