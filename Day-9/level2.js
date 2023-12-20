//1.Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
// const Totalpriceofproducts= products.filter((product) => typeof product.price ==='number').map((product) => product.price).reduce((acc,cur) => acc+cur,0)
// console.log(Totalpriceofproducts)

//2.Find the sum of price of products using only reduce reduce(callback))
// const sumofpriceofproduct= products.reduce(function(acc,cur){
//   if (typeof cur.price==='number'){
//     return acc+cur.price
//   }
//   return acc
// },0)
// console.log(sumofpriceofproduct)


//3.Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
//const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// function categorizeCountries(countriesArray) {
//   const categorized = {
//     land: [],
//     ia: [],
//     island: [],
//     stan: []
//   };

//   countriesArray.forEach(country => {
//     if (country.endsWith('land')) {
//       categorized.land.push(country);
//     } else if (country.endsWith('ia')) {
//       categorized.ia.push(country);
//     } else if (country.includes('island')) {
//       categorized.island.push(country);
//     } else if (country.endsWith('stan')) {
//       categorized.stan.push(country);
//     }
//   });

//   return categorized;
// }

// const categorized = categorizeCountries(countries);
// console.log(categorized);

//4.Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
// function counytriyis(countries){
//   const countrye={}
//   countries.forEach(country => {
//     const firstletter= country.charAt(0).toUpperCase()
//     if (firstletter>="A"  ||firstletter<='Z'){
//       if (countrye)
//     }
    
//   });
// }

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
// ]
//5.Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
// function getlastTenCountries(countries){
//   let newarray=[]
//   for (let i=countries.length-1;i>=Math.max(0,countries.length-10);i--){
//     newarray.push(countries[i])
//   }
//   return newarray.reverse()
// }
// console.log(getlastTenCountries(countries))

//4.Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
// function getfirstTenCountries(countries){
//   let newarray=[]
//   countries.forEach((country,index) => {
//     if (index<10){
//       newarray.push(country)
//     }
//   })
//   return newarray
// }
// console.log(getfirstTenCountries(countries))


const countries=require("./countries")

// let countryy=countries.sort(function(a,b){
//   if(a['key'] < b['key'])return -1
//   if (a['key'] >b['key'])return 1
//   return 0
// })
// console.log(countryy)

let countrycapital=countries.sort(function(a,b){
   if (a.capital['key'] < b.capital['key'])return-1
   if(a.capital['key'] > b.capital['key'])return 1
   return 0
})
console.log(countrycapital)