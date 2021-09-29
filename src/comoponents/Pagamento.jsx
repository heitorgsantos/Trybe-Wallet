import React from 'react';

class Pagamento extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="pay">
            Método de pagamento
            <select id="pay">
              <option value="Cartão de crédito">Cartão de Crédito</option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de débito">Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="despesa">
            Tag
            <select id="despesa">
              <option value="Lazer">Lazer</option>
              <option value="Alimentacão">Alimentação</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
export default Pagamento;
