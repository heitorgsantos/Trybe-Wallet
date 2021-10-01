import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDelete } from '../../actions';
import Table1 from './Table1';
// import './table.css';

class Table extends Component {
  constructor() {
    super();

    // this.removeExpense = this.removeExpense.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReal = this.handleReal.bind(this);
  }

  /* handleDelete({ target: { value, id } }) {
    const line = document.getElementsByTagName('tread')[0];
    const child = document.getElementsByTagName('tr');
    if (line.parentNode) {
      line.parentNode.removeChild(child[id]);
    }

    console.log(line);
  } */

  handleDelete(index1) {
    const { expenses, setDelete } = this.props;
    const removeExpense = expenses.filter((__, index2) => index1 === index2);
    // console.log(...removeExpense);
    setDelete(...removeExpense);
  }

  handleReal(expenses) {
    if (expenses) return <td>Real</td>;
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
          }, index) => (
            <tr key={ id } id={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{exchangeRates[currency].name.split('/')[0]}</td>
              <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>{Number(exchangeRates[currency].ask * value).toFixed(2)}</td>
              {this.handleReal(expenses)}
              <td>
                <button
                  type="button"
                  value={ id }
                  data-testid="delete-btn"
                  onClick={ () => this.handleDelete(index) }
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
const mapDispatchtoProps = (dispatch) => ({
  setDelete: (payload) => dispatch(setDelete(payload)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchtoProps)(Table);
