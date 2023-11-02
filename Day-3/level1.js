//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.//
let firstName = 'Asabeneh' 
let lastName = 'Yetayeh' 
let country = 'Finland' 
let city = 'Helsinki' 
let age = 100 
let isMarried = true
 console.log(typeof(firstName))
 console.log(typeof(lastName))
 console.log(typeof(country))
 console.log(typeof(city))
 console.log(typeof(age))
 console.log(typeof(ismarried))
//2.Check if type of '10' is equal to 10//
 console.log(typeof '10' === 10)
//3.Check if parseInt('9.8') is equal to 10//
console.log(typeof(parseInt(9.8))=== 10)
//4.Boolean value is either true or false.
console.log(12<10)
//5.Write three JavaScript statement which provide truthy value/
let ismarried_ = true
let isthisclasstime = true
let truevalue = 10<11
//6.Write three JavaScript statement which provide false value/
let isshemad = false
let falsevalue = null
let hungry = false
//7.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4>3)
console.log(4>=3)
console.log(4<=3)
console.log(4<3)
console.log(4==4)
console.log(4===4)
console.log(4!=4)
console.log(4!==4)
console.log(4!='4')
console.log(4=='4')
console.log(4==='4')
//19.Find the length of python and jargon and make a falsy comparison statement//
let python='python'
let pythonlen=python.length
let jargon='jargon'
let jargonlen=jargon.length
console.log(pythonlen>jargonlen)
//20.decide the result confirm it by using console.log()//
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
//Use the Date object to do the following activities//
//33.What is the year today?//
const _time= new Date()
console.log(_time.getFullYear())
//34.What is the month today as a number?//
console.log(_time.getMonth())
//35.What is the date today?
console.log(_time.getDate())
//36.What is the day today as a number?
console.log(_time.getDay())
//37.What is the hours now?
console.log(_time.getHours())
//38.What is the minutes now?
console.log(_time.getMinutes())
//39.Find out the numbers of seconds elapsed from January 1, 1970 to now//
console.log(_time.getTime())
//40.There is no 'on' in both dragon and python
let a=  'python, dagron'
let b=!(a.includes('on'))
console.log(b)