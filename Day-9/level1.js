//1.Explain the difference between forEach, map, filter, and reduce.
// forEach is used for only with arrays.It takes call back function with ElementInternals,index parameter, and array
// itself.
// Map:map is used for modify  array
// Filter:when filtering conditions are full fill then it returns it in a new array.
// Reduce:The call back function takes  accumulator, current, and optional initial value as a parameter and returns a single value.


//3.Use forEach to console.log each country in the countries array.
//const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
//   countries.forEach(function(element) {
//     console.log(element)
//   })

//7.Use map to create an array of countries length from countries array.
// const countrirsarray=countries.map((country) => country.length)
// console.log(countrirsarray)

//9.Use map to change to each name to uppercase in the names array

// const countriestoUpperCase= countries.map((country) => country.toUpperCase())
// console.log(countriestoUpperCase)

//10.Use map to map the products array to its corresponding prices.
// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
//   ]
// const productarray= products.map((product) => product.price)
// console.log(productarray)

//11.Use filter to filter out countries containing land
// const countriesfilter= countries.filter((country) => country.toLowerCase().includes('land'))
// console.log(countriesfilter)

//13.Use filter to filter out countries containing six letters and more in the country array.
//  const countrieswithsixletters= countries.filter((country) => country.length >=6)
//  console.log(countrieswithsixletters)

//15.Use filter to filter out only prices with values.
// const filterprice= products.filter(product => typeof product.price === 'number').map(product => product.price)
// console.log(filterprice)

//17.Use reduce to sum all the numbers in the numbers array.
//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const sumofnumbers= numbers.reduce((acc,cur) => acc+cur,0)
// console.log(sumofnumbers)


//20.Use some to check if some names' length greater than seven in names array
//const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const  nameslengthseven= names.some((name) => name.length > 7)
// console.log(nameslengthseven)

//21.Use every to check if all the countries contain the word land
// const checkwordland=countries.every((country) =>country.includes('land') )
// console.log(checkwordland)

//22.Use find to find the first country containing only six letters in the countries array
// const findcountry= countries.find((country) =>country.length==6 )
// console.log(findcountry)

//23.Use findIndex to find the position of the first country containing only six letters in the countries array
// const findindexofcountry= countries.findIndex((country) => country.length==6 )
//console.log(findindexofcountry)





