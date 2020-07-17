import { createStore } from 'redux'

const incrementCount = ({incrementBy = 1} = {}) => ({
   type: 'INCREMENT',
   incrementBy
})
const decrementCount = ({decrementBy = 1} = {}) => ({
   type: 'DECREMENT',
   decrementBy
})
const reset = () => ({
   type : 'RESET'
})

const store = createStore((state ={count:0},action) => { //with redux ,we store the state
   switch(action.type){
      case 'INCREMENT':
         // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
         return {
            count : state.count + action.incrementBy
         }
      case 'DECREMENT':
         return{
            count: state.count - action.decrementBy
         }
      case 'RESET':
         return{
            count : 0
         }
      case 'SET':
         return {
            count : action.count
         }
      default:
         return state
   }
});


store.subscribe(() =>{console.log(store.getState());})

store.dispatch(incrementCount({incrementBy:20}));
store.dispatch(incrementCount());
store.dispatch(reset())
store.dispatch(decrementCount({decrementBy: 10}))
store.dispatch(decrementCount({decrementBy:15}))