//1.Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
// function solveLinEquation(a,b,c,x,y){
//     let value=(a*x)+(b*y)+c
//     return value
// }
// console.log(solveLinEquation(2,3,4,5,6,))

//2.Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.



//3.Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
// function printArray(array){
//     for(let i=0;i<array.length;i++){
//         console.log(array[i])
//     }
// }
// printArray([1,2,3,4,5,6,7])

//4.Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// function showDateTime(){
//     const now=new Date()
//     const year=now.getFullYear()
//     const month=now.getMonth()
//     const date=now.getDate()
//     const hours=now.getHours()
//     const minutes=now.getMinutes()
//     let Time=`${date}/${month}/${year} ${hours}:${minutes}`
//     return Time
// }
// console.log(showDateTime())

//5.Declare a function name swapValues. This function swaps value of x to y.
// function swapValues(x,y){
//     let c=x
//     x=y
//     y=c
//     return `(${x},${y})`
// }
// console.log(swapValues(3,4))

//6.Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// function reverseArray(array){
//     let Array=[]
//     for (i=array.length-1;i>=0;i--){
//         Array.push(array[i])
//     }
//     return Array
// }
// console.log(reverseArray([1,2,3,4,5,6]))

//7.Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
// function capitalizeArray(array){
//     let Array=[]
//     for (i=0;i<array.length;i++){
//         Array.push(array[i].toUpperCase())
//     }
//     return Array
// }
// console.log(capitalizeArray(['saurav','uma','manisha','pranali','susmitha','suman','priyanka']))


//8.Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
// function addItem(parm1){
//     let Array=[]
//     Array.push(parm1)
//     return Array
// }
// console.log(addItem("uma"))

//9.Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
// function removeItem(index,array){
//     if (index<0 || index>=array.length){
//         return "invalid"
//     }
//     array.splice(index,1)
//     return array
// }
// console.log(removeItem(3,[11,22,33,44,55]))

//10.Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
// function sumOfNumbers(parm1){
//     let sum=0
//     for(i=0;i<parm1;i++){
//         sum=sum+i
//     }
//     return sum
// }
// console.log(sumOfNumbers(20))

//11.Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
// function sumOfNumbers(){
//     let sum=0
//     for(i=0;i<array.length;i++){
//         if (array[i]%2!=0){
//             sum=sum+array[i]
//         }
//     }    
//     return sum
// }
// console.log(sumOfNumbers([10,25,33,40]))

//12.Declare a function name sumOfEven. It takes a number parameter and it adds all the Even numbers in that - range.
// function sumOfNumbers(array){
//     let sum=0
//     for(i=0;i<array.length;i++){
//         if (array[i]%2==0){
//             sum=sum+array[i]
//         }
//     }    
//     return sum
// }
// console.log(sumOfNumbers([10,25,33,40]))

//13.Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// function evensAndOdds(parm1){
//     if (parm1<0){
//         return "invalid"
//     }
//     let countofeven=0
//     let countofOdd=0
//     for (i=0;i<=parm1;i++){
//         if (i%2==0){
//             countofeven++
//         }else{
//             countofOdd++
//         }
//     }
//     return `The number of odds are ${countofOdd}.
//     The number of evens are ${countofeven}.`      
// }
// console.log(evensAndOdds(100))

//14.Write a function which takes any number of arguments and return the sum of the arguments
// function sumofNums(){
//     let sum=0
//     for (let i=0;i<arguments.length;i++){
//         sum=sum+arguments[i]
//     }
//     return sum
// }
// console.log(sumofNums(1,2,3,4,5))

//15.Write a function which takes any number of arguments and return the sum of the arguments
// function randomUserIP(){
//     const num1=Math.floor(Math.random()*256)
//     const num2=Math.floor(Math.random()*256)
//     const num3=Math.floor(Math.random()*256)
//     const num4=Math.floor(Math.random()*256)
//     let userip=`${num1}.${num2}.${num3}.${num4}`
//     return userip
// }
// console.log(randomUserIP())

//16.Write a function which generates a randomMacAddress
// function randomMacAddress(){
//     const hexadigits='123456789ABCDEF'
//     let Macaddress=" "

//     for (let i=0;i<6;i++){
//         for(let j=0;j<2;j++){
//             Macaddress=Macaddress+hexadigits.charAt(Math.floor(Math.random()*hexadigits.length))
//         }
//         if (i!==5){
//             Macaddress+=":"
//         }
//     }
//     return Macaddress
// }
// console.log(randomMacAddress())


//17.Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// function randomHexaNumberGenerator(){
//     let randomhexa=Math.floor(Math.random()*300.).toString(16)
//     return `#${randomhexa}`
// }
// console.log(randomHexaNumberGenerator())

//18.Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// function userIdGenerator() {
//     const length = 7;
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let Id = '';
//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * characters.length)
//       Id += characters.charAt(randomIndex)
//     }
//     return Id
//   }
//   console.log(userIdGenerator())
  
