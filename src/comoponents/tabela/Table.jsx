import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './table.css';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (

      <table>
        <tread>
          <tr>
            <th className="description">Descrição</th>
            <th className="description">Tag</th>
            <th className="description">Método de pagamento</th>
            <th className="description">Valor</th>
            <th className="description">Moeda</th>
            <th className="description">Câmbio utilizado</th>
            <th className="description">Valor convertido</th>
            <th className="description">Moeda de conversão</th>
            <th className="description">Editar/Excluir</th>
          </tr>
        </tread>
        <tread>
          {expenses.map(({
            id,
            description,
            tag,
            method,
            value,
            currency,
            exchangeRates,
          }) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{exchangeRates[currency].name.split('/')[0]}</td>
              <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>{Number(exchangeRates[currency].ask * value).toFixed(2)}</td>
              <td>Real</td>

            </tr>
          ))}
        </tread>
      </table>

    );
  }
}

Table.propTypes = {
  expenses: PropTypes.shape({
    map: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
