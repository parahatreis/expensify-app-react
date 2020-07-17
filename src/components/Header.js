import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => (
   <header>
      <h1>Expensify</h1>
      <NavLink activeClassName="selected" exact to="/">Dashboard</NavLink>
      <NavLink activeClassName="selected" to="/create">Create Expense</NavLink>
   </header>
);

export default Header