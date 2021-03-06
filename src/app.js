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
   
console.log('test')
const jsx = (
   <Provider store={store}>
      <AppRouter/>
   </Provider>
)


ReactDOM.render(jsx , document.getElementById('app'))
