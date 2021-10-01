import React, { Component } from 'react';

export default class table1 extends Component {
  render() {
    return (
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
    );
  }
}
