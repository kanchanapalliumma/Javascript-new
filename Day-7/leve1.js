
//1.Declare a function fullName and it print out your full name.
// function fullname(){
//     let firstname="uma"
//     let lastname="kanchanapalli"
//     let space=" "
//     console.log(firstname+space+lastname)
// }
// fullname()

//2.Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
// function fullname(firstname,lastname){
//     return `${firstname} ${lastname}`
// }
// console.log(fullname("uma","kanchanapalii"))


//3.Declare a function addNumbers and it takes two two parameters and it returns sum.
// function addnumbers(numone,numtwo){
//     let sum= numone+numtwo
//     return sum
// }
// console.log(addnumbers(25,35))

//4.An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
// function areaoftriangle(length,width){
//     return length*width
// }
// console.log(areaoftriangle(4,6))

//5.A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
// function perimeterOfRectangle(length,width){
//     let perimrter=2*(length+width)
//     return perimrter
// }
// console.log(perimeterOfRectangle(5,4))

//6.A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
// function volumeOfRectPrism(length,width,height){
//     let volume=length*width*height
//     return volume
// }
// console.log(volumeOfRectPrism(2,3,4))


//7.Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
// function areaOfCircle(r){
//     let area=(22/7)*r*r
//     return area
// }
// console.log(areaOfCircle(3))

//8.Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
// function circumOfCircle(r){
//     let circum=2*3.14*r
//     return circum
// }
// console.log(circumOfCircle(3))


//9.Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
// function density(mass,volume){
//     let Density=mass/volume
//     return Density
// }
// console.log(density(3,6))

//10.Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
// function speed(distance,time){
//     let Speed=distance/time
//     return Speed
// }
// console.log(speed(20,4))

//11.Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
// function weight(mass,gravity){
//     let Weight= mass/gravity
//     return Weight
// }
// console.log(weight(3,6))

//12.Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
// function Temperatureinoc(oc){
//     let Temperatureinof=(oc *(9/5) + 32)
//     return Temperatureinof
// }
// console.log(Temperatureinoc(4))


//13.Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below
// function checkingweight(weight,height,age){
//     if (age>=20){
//         let bmi=weight/(height*height)
//         if (bmi<18.5){
//             console.log("Underweight")
//         }else if(bmi>18.5 && bim<24.9){
//             console.log("Normal Weight")
//         }else if(bmi<25 && bim<29.9){
//             console.log("Overweight")
//         }else{
//             console.log("Obese")
//         }
//     }
// }
// checkingweight(50,20,20)

//14.Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
// function checkSeason(month){
//     let Month=month.toLowerCase()
//     if (Month==="september" ||Month==="october"||Month==="november"){
//         console.log("Autumn")
//     }else if(Month==="december" || Month==="january"|| Month==="february"){
//         console.log("Winter")
//     }else if (Month==="march" ||Month==="april"|| Month==="may"){
//         console.log("Spring")
//     }else{
//         console.log("Summer")
//     }
// }
// checkSeason("January")

//15.Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// function findMax(parm1,parm2,parm3){
//     if (parm1>parm2){
//         max=parm1
//     }else{
//         max=parm2
//     }
//     if (max<parm3){
//         max=parm3
//         console.log(max)
//     }else{
//         console.log(max)
//     }
// }
// findMax(16,12,90)


