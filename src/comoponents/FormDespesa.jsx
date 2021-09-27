import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setDespesas } from '../actions';
import coinsApi from '../requisições/coinsApi';

class FormDespesa extends React.Component {
  constructor() {
    super();
    this.state = {
      moedas: [],
    };
  }

  componentDidMount() {
    coinsApi()
      .then((answer) => this.setState({ moedas: answer }));
    // console.log(coins);
  }

  render() {
    const { moedas } = this.state;
    const { expenses } = this.props;
    return (
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
          onClick={ () => expenses() }
        >
          Adicionar despesa

        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  expenses: (payload) => dispatch(setDespesas(payload)),
});

FormDespesa.propTypes = {
  expenses: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FormDespesa);
