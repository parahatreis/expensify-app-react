import {
   setTextFilter,
   sortByDate,
   sortByAmount,
   setStartDate,
   setEndDate
} from '../../actions/filters'
import moment from 'moment'

test('setTextFilter test',() => {
   const action = setTextFilter('smth')
   expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: 'smth'
   })
})
test('sortByDate test', () => {
   expect(sortByDate()).toEqual({type:'SORT_BY_DATE'})
})
test('sortByAmount test', () => {
   expect(sortByAmount()).toEqual({type:'SORT_BY_AMOUNT'})
})

test('setStartDate test' ,() => {
   const action = setStartDate(moment(0))
   expect(action).toEqual({
      type: 'SET_START_DATE',
      startDate: moment(0)
   })
})
test('setEndDate test', () => {
   const action = setEndDate(moment(0))
   expect(action).toEqual({
      type: 'SET_END_DATE',
      endDate: moment(0)
   })
})

