//1.Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// function userIdGeneratorByUser() {
//     const prompt = require("prompt-sync")();
//     let length=Number(prompt("Enter the length"))
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let times=Number(prompt("enter a no"))
//     let ids=[]

//     for (let i = 0; i < times; i++) {
//         let Id=""
//         for(j=0;j<length ;j++){  
//             const randomIndex = Math.floor(Math.random() * characters.length)
//             Id += characters.charAt(randomIndex)
//         }
//         ids.push(Id)
//     }
//     return ids
// }
//   console.log(userIdGeneratorByUser())
  
//2.Write a function name rgbColorGenerator and it generates rgb colors.
// function rgbColorGenerator(){
//     let rgb=[]
//     for (let i=0;i<3;i++){
//         let rgbColor=Math.floor(Math.random()*256)
//         rgb.push(rgbColor)
//     }
//     return`rgb(${rgb.join(',')})`
// }
// console.log(rgbColorGenerator())

//3.Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
// function arrayOfHexaColors(){
//     let colors=[]
//     for(j=0;j<5;j++){
//         let colorhexa='#'
//         for (let i=0;i<4;i++){
//             colorhexa+=Math.floor(Math.random()*200).toString(16)
//         }
//         colors.push(colorhexa)
//     }
//     return colors
// }
// console.log(arrayOfHexaColors())



//4.Write a function arrayOfRgbColors which return any number of RGB colors in an array.
// function rgbColorGenerator(){

//     let RGB=[]
//     for (j=0;j<4;j++){
//         let rgb=[]
//         for (let i=0;i<3;i++){
//             let rgbColor=Math.floor(Math.random()*256)
//             rgb.push(rgbColor)
//         }
//         let array=`[${rgb.join(',')}]`
//         RGB.push(array)
//     }
//     return`rgb[${RGB.join(',')}]`
// }
// console.log(rgbColorGenerator())

//5.Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
// function arrayOfHexaColors(){
//      let colors=[]
//      for(j=0;j<5;j++){
//          let colorhexa='#'
//          for (let i=0;i<4;i++){
//              colorhexa+=Math.floor(Math.random()*200).toString(16)
//          }  
//          colors.push(colorhexa)
//      }
//      return colors
// }
// console.log(arrayOfHexaColors())

// function convertHexaToRgb(rgbcolor){
//     return rgbcolor.map(convertHexaToRgb)
// }
// const rgbcolors=convertHexaToRgb(colorhexa)
// console.log(rgbcolors)

//5.Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
// function convertHexaToRgb(colorhexa){
//     if (colorhexa.startsWith('#')){
//         colorhexa=colorhexa.slice(1)
//     }

//     const red=parseInt(colorhexa.substring(0,2),16)
//     const blue=parseInt(colorhexa.substring(2,4),16)
//     const green=parseInt(colorhexa.substring(4,6),16)

//     return `rgb(${red},${blue},${green})`
// }
// const colorhexa="#C8FOA4"
// const rgbcolor=convertHexaToRgb(colorhexa)
// console.log(rgbcolor)

//6.Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
// function convergRgbToHexa(colorhexa){
//     const values=colorhexa.match(/\d+/g);

//     const red=parseInt(values[0])
//     const blue=parseInt(values[1])
//     const green=parseInt(values[2])

//     const redhex=red.toString(16)
//     const bluehex=blue.toString(16)
//     const greenhex=green.toString(16)

//     return `#${redhex}${bluehex}${greenhex}`
// }
// const colorhexa='rgb(123, 45, 200)'
// const rgbcolor=convergRgbToHexa(colorhexa)
// console.log(rgbcolor)

//7.Write a function generateColors which can generate any number of hexa or rgb colors.
// function generateColors(type,count){
//     const rgbColorGenerator=()=>{
//         let rgb=[]
//         for (let i=0;i<3;i++){
//             let rgbColor=Math.floor(Math.random()*256)
//             rgb.push(rgbColor)
//         }
//         return`rgb(${rgb.join(',')})`
//     }
//     const generatehexacolor=()=>{
//         let hexastartswith="#"
//         for (let i=0;i<3;i++){
//             hexastartswith+=Math.floor(Math.random()*256).toString(16)
//         }
//         return hexastartswith
//     }
//     const generateColors=(type)=>{
//         return type=="hexa" ? generatehexacolor() : rgbColorGenerator()

//     }
//     if (count===1){
//         return generateColors(type)
//     }else{
//         const colors=[]
//         for (i=0;i<count;i++){
//             colors.push(generateColors(type))
//         }
//         return colors
//     }
// }
//     console.log(generateColors("hexa",2))
//     console.log(generateColors("rgb",3))

//8.Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
// function shuffleArray(arr) {
//     let newarr = arr.slice();
//     for (let i = newarr.length - 1; i >= 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [newarr[i], newarr[j]] = [newarr[j], newarr[i]];
//     }
//     return newarr;
// }
// console.log(shuffleArray([1, 2, 3, 4, 5]));

//9.Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
// function factorial(parm1){
//     let Factorial=parm1
//     for (i = parm1-1; i > 0; i --){
//         Factorial*=i
//     }
//     return Factorial
// }
// console.log(factorial(5))


//11.Call your function sum, it takes any number of arguments and it returns the sum.
// function sumofNums(){
//     let sum=0

//     for (let i=0;i<arguments.length;i++){
//         sum=sum+arguments[i]
//     }
//     return sum
// }
// console.log(sumofNums(1,2,3,4,5))


//12.Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
// function sumOfArrayItems(array){
//     if (!Array.isArray(array)) {
//         return "it is not an array"
//     }
//     let sum=0
//     for(i=0;i<array.length;i++){
//         if (typeof array[i]!=='number'){
//             return "array have non number data types"
//         }
//         sum+=array[i]
//     }
//     return sum
// }
// console.log(sumOfArrayItems([30,40]))


//13.Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
// function average(array){
//     if (!Array.isArray(array)){
//         return "It is not an arrow"
//     }
//     let sum=0
//     for(i=0;i<array.length;i++){
//         if (typeof array[i]!=="number"){
//             return "Array have non number data-types"
//         }
//         sum+=array[i]
//     }
//     return sum/array.length
// }
// console.log(average([2,4,6,8,10]))

//14.Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// function modifyArray(array){
//     let newarray=[]
//     if (array.length<4){
//         return "Not found"
//     }
//     for(i=0 ; i <array.length; i++){
//         if(i!==4){
//             newarray.push(array[i])
//         }
//     }
//     return newarray
// }
// console.log(modifyArray([2,3,4,5,7,8]))

//15.Write a function called isPrime, which checks if a number is prime number.
// function prime(parm1){
//     for(i=0;i<=parm1;i++){
//         count=0
//         for(j=0;j<=i;j++){
//             if (i%j==0){
//                 count++
//             }
//         }
//     }
//     if (count==2){
//         return 'Prime number'
//     }else{
//         return "Non-Prime number"
//     }
// }
// console.log(prime(23))

//16.Write a functions which checks if all items are unique in the array.
// function uniquearray(array){
//     let newarray=[]
//     for ( i=0; i<array.length; i++){
//         if(!newarray.includes(array[i])){
//             newarray.push(array[i])
//             return "All the items unique items in the array"
//         }else{
//             return "Not All items are unique in the array"
//         }
//     }
// }
// console.log(uniquearray([1,2,3,4,5]))

//17.Write a function which checks if all the items of the array are the same data type.
// function ckecksamedatatype(arr){
//     let datatypeone=typeof arr[0]
//     for(i=0;i<arr.length;i++){
//         if (typeof arr[i]===datatypeone){
//             return "All items are same data type"
//         }
//         else{
//             return "All items are not same data type"
//         }
//     }
// }
// console.log(ckecksamedatatype([1,2,3,4,5,6]))

//18.JavaScript variable name does not support special characters or symbols except \$ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
// function isValidVariable(variableName) {
//     const isValid = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  
//     return isValid.test(variableName);
//   }
//   console.log(isValidVariable("firstname"))


//19.Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// function sevenrandomnum(){
//     let newarray=[]
//     for(i=0;newarray.length<7;i++){
//         let j=Math.floor(Math.random()*10)
//         if (!newarray.includes(j)){
//             newarray.push(j)
//         }
//     }
//     return newarray
// }
// console.log(sevenrandomnum())

//20.Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
// function reverseCountries(arr){
//     let countries=arr
//     let newcountry=[]
//     for(i=countries.length-1;i>=0;i--){
//         newcountry.push(countries[i])
//     }
//     return newcountry
// }
// console.log(reverseCountries(['Albania','Bolivia', 'Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Kenya',]))