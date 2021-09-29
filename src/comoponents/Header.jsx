import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <header>
        <p data-testid="total-field">{console.log(expenses)}</p>
      </header>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});
export default connect(mapStateToProps, null)(Header);
