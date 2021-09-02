import React from 'react';

class Pagamento extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="pay">
            Método de pagamento
            <select id="pay">
              <option value="dinheito">Dinheiro</option>
              <option value="cartao-credito">Cartão de Crédito</option>
              <option value="cartao-debito">Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="despesa">
            Tag
            <select id="despesa">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
export default Pagamento;
