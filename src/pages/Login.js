import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailvalidate: '',
      passwordValidate: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
    if (name === 'email') {
      const validacao = this.validateEmail(value);
      this.setState({ emailvalidate: validacao });
    } else {
      const senha = this.validatePassword(value);
      this.setState({ passwordValidate: senha });
    }
  }
  /*  REFERENCIA PARA ESTA FUNÇÃO */
  /*  (https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/)  */

  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  validatePassword(value) {
    const caracters = 6;
    return (value.length >= caracters);
  }

  render() {
    const { email, password, emailvalidate, passwordValidate } = this.state;
    return (
      <form>
        <label htmlFor="email-input">
          Email
          <input
            type="email"
            id="email-input"
            data-testid="email-input"
            name="email"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>

        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            id="password-input"
            data-testid="password-input"
            onChange={ this.handleChange }
            value={ password }
          />
        </label>
        <button
          type="button"
          disabled={ !(emailvalidate && passwordValidate) }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
