// const person = {
//    name : 'Reis',
//    age : 20,
//    location: {
//       city : 'Ashgabat',
//       temp : '35'
//    }
// }

// const {name : firstName = 'Anonymous', age} = person;
// const {city, temp} = person.location;


// console.log(`${firstName} is ${age}`)
// console.log(`It's ${temp} deg in ${city}`)


//Array destructing
const address = [];
               //street,city,country,zip
const [, , country = 'England'] = address;

console.log(country)