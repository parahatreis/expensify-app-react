

store.subscribe(() => {
   const state = store.getState();
   const visibileExpenses = getVisibleExpenses(state.expenses , state.filters);
   console.log(visibileExpenses)
});

const expenseOne = store.dispatch(addExpense({description:'Rent',amount:500,createdAt:-21000}))
const expenseTwo = store.dispatch(addExpense({description:'Coffee',amount:300,createdAt:-1000}))

// store.dispatch(removeExpense({id: expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id , {amount: 500}));

// store.dispatch(setTextFilter('COFFEE'))
// store.dispatch(setTextFilter('REN'))

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setStartDate(333))
// store.dispatch(setEndDate(-1200))
// store.dispatch(setEndDate())

const demoState = {
   expsenses : [
      {
         id: 'thisisidofexpense',
         description: 'February Rent',
         note: 'This is my final payment for this address',
         amount: 54500,
         createdAt: 0
      }
   ],
   filters: {
      text: 'rent',
      sortBy: 'amount',  //amount or date
      startDate: undefined,
      endDate: undefined
   }
}
