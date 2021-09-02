import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import FormDespesa from '../comoponents/FormDespesa';
import Pagamento from '../comoponents/Pagamento';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header data-testid="email-field">
          <h2>{ email }</h2>
          <h2 data-testid="total-field">0</h2>
          <h2 data-testid="header-currency-field">'BRL'</h2>
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
});

export default connect(mapStateToProps)(Wallet);
