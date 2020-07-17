import getVisibleExpenses from '../../selectors/expenses'
import moment from 'moment'

const expenses = [
   {
      id:'1',
      description:'Gum',
      note:'',
      amount: 11,
      createdAt: 0
   },
   {
      id: '2',
      description: 'Rent',
      note: '',
      amount: 2222,
      createdAt: moment(0).subtract(4,'days').valueOf()
   },
   {
      id: '3',
      description: 'Coffe',
      note: '',
      amount: 333,
      createdAt: moment(0).add(4, 'days').valueOf()
   }
];
test('getVisibileExpenses test by text',() => {
   const filters = {
      text: 'e',
      sortBy: 'date',
      startDate: undefined,
      endDate : undefined
   }
   const result = getVisibleExpenses(expenses, filters)
   expect(result).toEqual([expenses[2],expenses[1]])
})
test('getVisibileExpenses test by startDate',() => {
   const filters = {
      text: '',
      sortBy: 'date',
      startDate: moment(0),
      endDate : undefined
   }
   const result = getVisibleExpenses(expenses, filters)
   expect(result).toEqual([expenses[2],expenses[0]])
})