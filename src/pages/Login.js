import React from 'react';

class Login extends React.Component {
  render() {
    return (

      <div>
        <label htmlFor="email-input">
          Email
          <input type="email" id="email-input" data-testid="email-input" />
        </label>

        <label htmlFor="password-input">
          Senha
          <input type="password" id="password-input" data-testid="password-input" />
        </label>
        <button type="button">Entrar</button>

      </div>
    );
  }
}

export default Login;
