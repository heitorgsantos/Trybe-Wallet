import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { setDeleteThunk } from '../../actions';
import Table1 from './Table1';
// import './table.css';

class Table extends Component {
  constructor() {
    super();

    // this.removeExpense = this.removeExpense.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  /* handleDelete({ target: { value, id } }) {
    const line = document.getElementsByTagName('tread')[0];
    const child = document.getElementsByTagName('tr');
    if (line.parentNode) {
      line.parentNode.removeChild(child[id]);
    }

    console.log(line);
  } */

  handleDelete(deleteTag) {

  }

  render() {
    const { expenses } = this.props;

    return (

      <table>
        <Table1 />
        <tread id="tread">
          {expenses.map(({
            id,
            description,
            tag,
            method,
            value,
            currency,
            exchangeRates,
          }) => (
            <tr key={ id } id={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{exchangeRates[currency].name.split('/')[0]}</td>
              <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>{Number(exchangeRates[currency].ask * value).toFixed(2)}</td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  value={ id }
                  data-testid="delete-btn"
                  onClick={ this.handleDelete }
                >
                  Deletar
                </button>

              </td>

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

/* const mapDispatchtoProps = (dispatch) => ({
  setExpenses: (payload) => dispatch(setDeleteThunk(payload)),
}); */

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Table);
