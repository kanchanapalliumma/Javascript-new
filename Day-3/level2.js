//1.Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h)
//const prompt = require ("prompt-sync")();
//let b = prompt('Enter a number')
//let h= prompt('Enter a number')
//console.log(0.5*b*h)

//2.calculate the perimeter of triangle (perimeter = a + b + c)
//const prompt = require("prompt-sync")();
//let a1=Number(prompt("enter a number"))
//let b1=Number(prompt("enter a number"))
//let c1=Number(prompt("enter a number"))
//console.log(a1+b1+c1)

//II-1. calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
//const prompt = require("prompt-sync")();
//let length_= Number(prompt('Enter the length'))
//let width_=Number(prompt('Enter the Width'))
//console.log('perimeter='+(2*(length_+width_)))
//console.log('Area='+(length_*width_))

//2. calculate the area of a circle (area = pi*r*r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
//const prompt = require("prompt-sync")();
//let radius=Number(prompt('Enter the radius'))
//console.log('area='+(3.14*radius)*radius)
//console.log('cercumference='+2*(3.14*radius))

//3.Calculate the slope, x-intercept and y-intercept of y = 2x -2
//let m=2
//let b=-2
//let slope=m
//let x_intercept=-b/m
//let y_intercept=b
//console.log(slope)
//console.log(x_intercept)
//console.log(y_intercept)


//4.Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
//const prompt = require("prompt-sync")();
//let y2=Number(prompt('Enter the value y2 '))
//let y1=Number(prompt('Enter the value y1 '))
//let x2=Number(prompt('Enter the value x2 '))
//let x1=Number(prompt('Enter the value x1 '))
//console.log('slope is m='+(y2-y1)/(x2-x1))

//5.Compare the slope of above two questions.
//console.log(2>=2)
//6.Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
//const prompt = require("prompt-sync")();
//let x=-3
//let y=(x**2)+6*(x)+9
//console.log('y value is='+y*(y))

//7.Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person
//const prompt = require("prompt-sync")();
//let hours=Number(prompt('Enter hours '))
//let rateperhour=Number(prompt('Enter rateperhour '))
//console.log(hours*rateperhour)

//8.If the length of your name is greater than 7 say, your name is long else say your name is short.
//const prompt = require("prompt-sync")();
//let name=prompt('Enter a name')
//let namelength=name.length
//if (namelength>7){
    //console.log('your is name is long')
//}
//else{
    //console.log('your name is short')
//}

//9.Compare your first name length and your family name length and you should get this output
//let firstName='Asabeneh'
//let lastName='yetayeh'
//let firstNamelen=firstName.length
//let lastNamelen=lastName.length
//if (firstNamelen>lastNamelen){
    //console.log('your firstName,Asabeneh is longer than your family name,yetayeh')
//}

//10.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
//let myage=250
//let yourage=25
//console.log(`I am ${myage-yourage} years older than you.`)

//III-1.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
//const prompt = require("prompt-sync")();
//let birthyear=Number(prompt('Enter the year '))
//let currentyear=new Date().getFullYear()
//let age=birthyear-currentyear
//if (age>=18){
    //console.log('you are'+age+'.You are old enough to drive')
//}
//else{
    //console.log('you are'+age+'.You will be allowed to drive after ${18-age}')
//}

//2.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
//const prompt = require("prompt-sync")();
//let years=Number(prompt('Enter the years'))
//let secondsinyear=365*24*60*60
//const livingseconds=years*secondsinyear
//console.log( 'you lived ' +livingseconds+' seconds.')

//2-2.Create a human readable time format using the Date time object
//let now=new Date()
//let year=now.getFullYear()
//let month=now.getMonth()
//let date=now.getDate()
//let hours=now.getHours()
//let minutes=now.getMinutes()
//console.log(`${year}-${month}-${date} ${hours}:${minutes}`)//2.YYYY-MM-DD HH:mm
//console.log(`${date}-${month}-${year} ${hours}:${minutes}`)//3.DD-MM-YYYY HH:mm
//console.log(`${date}/${month}/${year} ${hours}:${month}`)//4.DD/MM/YYYY HH:mm