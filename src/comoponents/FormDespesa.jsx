import React from 'react';

class FormDespesa extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input id="valor" value="valor" name="valor" type="text" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input id="descricao" name="descricao" type="text" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            options
          </select>
        </label>
      </form>
    );
  }
}

export default FormDespesa;
