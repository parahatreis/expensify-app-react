import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

test('remove action object', () => {
   const action = removeExpense({id:'123'});
   expect(action).toEqual({
      type:'REMOVE_EXPENSE',
      id: '123'
   })
});

test('edit action object', () => {
   const action = editExpense('123',{note:'New note value'})
   expect(action).toEqual({
      type:'EDIT_EXPENSE',
      id:'123',
      updates:{
         note: 'New note value'
      }
   })
})

test('add action object with provided values', () => {
   const action = addExpense({id:'111',amount:100,description:'rent',createdAt:2000})
   expect(action).toEqual({
      type:'ADD_EXPENSE',
      expense: {
         id: expect.any(String),
         amount: 100,
         description: 'rent',
         createdAt: 2000,
         note:''
      }
   })
})
test('add action object with default values', () => {
   const action = addExpense()
   expect(action).toEqual({
      type:'ADD_EXPENSE',
      expense: {
         id: expect.any(String),
         amount: 0,
         description: '',
         createdAt: 0,
         note:''
      }
   })
})

