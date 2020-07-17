import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense, removeExpense, editExpense} from './actions/expenses'
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import './styles/style.scss'
import 'normalize.css/normalize.css'
/* */
import moment from 'moment'

const store = configureStore();


store.dispatch(addExpense({description: 'Water Bill',amount:2000,createdAt:2010}));
store.dispatch(addExpense({description: 'Gas Bill',amount:4500,createdAt:2000}));
store.dispatch(addExpense({description: 'Air Bill',amount:8800,createdAt:2008}));

const state = store.getState();
const visibileExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibileExpenses)

const jsx = (
   <Provider store={store}>
      <AppRouter/>
   </Provider>
)


ReactDOM.render(jsx , document.getElementById('app'))
