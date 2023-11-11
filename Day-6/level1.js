//1.Iterate 0 to 10 using for loop, do the same using while and do while loop
//for loop
//for(let i=0; i<11;i++){
//    console.log(i)
//}
//while loop
//let i=0
//while (i<11){
//    console.log(i)
//    i=i+1
//}
//do while lopp 
//let i=0
//do {
//    console.log(i)
//    i=i+1
//} while(i<=10)


//2.Iterate 10 to 0 using for loop, do the same using while and do while loop
//for loop
//for(i=10;i>=0;i--){
//    console.log(i)
//}
//while loop
//let i=10
//while (i>=0){
//    console.log(i)
//    i=i-1
//}
//do while lopp 
//let i=10
//do {
//    console.log(i)
//    i=i-1
//} while(i>=0)

//3.Iterate 0 to n using for loop
//const prompt=require('prompt-sync')()
// let n=Number(prompt('Enter n value'))
// for(let i=0;i<n;i++){
//     console.log(i)
// }

//4.Write a loop that makes the following pattern using console.log():
//for(let i=0;i<7;i++){
//    str=''
//    for(let j=0;j<=i;j++){
//      str+="#"   
//   }
//    console.log(str)
//}
    

// let i=0;
// while (i<7){
//     let j=0;
//     while (j<=i){
//         process.stdout.write("#");
//         j=j+1;
//     }
//     console.log();
//     i=i+1
// }

//II-1.Use loop to print the following pattern:
//for (i=0;i<11;i++){
//    console.log(`${i} * ${i} = ${i*i}`)
//}

//II-Using loop print the following pattern
//for (i=0;i<11;i++){
//    console.log(`${i}  ${i*i}  ${i*i*i}`)
//}

//III-1.Use for loop to iterate from 0 to 100 and print only even numbers
//for(i=1;i<50;i++){
//    console.log(i*2)
//}

//III-2.Use for loop to iterate from 0 to 100 and print only odd numbers
//for(let i=0;i<100;i++){
//    if(i%2!=0){
//        console.log(i)
//    } 
//}

//III-3.Use for loop to iterate from 0 to 100 and print only prime numbers
//let i=0
//while (i<=100){
//    let j=0
//    let count=0
//    while (j<=i){
//        if (i%j==0)
//        count=count+1
//        j=j+1
//    }
//    if (count==2){
//        console.log(i)
//    }
//    i=i+1
//}

//III-4.Use for loop to iterate from 0 to 100 and print the sum of all numbers.
//let sum=0
//for (let i=0;i<=100;i++){
//    sum=sum+i
//}
//console.log(`The sum of all numbers from 0 to 100 is ${sum}.`)


//III-5.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let evensum=0
// let oddsum=0
// for(let i=0;i<=100;i++){
//    if (i%2==0){
        // evensum=evensum+i
//    }
    // else{
    //    oddsum=oddsum+i
//    }
//}
//console.log(`The sum of all events from 0 to 100 is ${evensum}. And the sum of all odd numbers from 0 to 100 is ${oddsum}.`)


//III-6.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
//let arr=[]
//let sumevents=arr.push(evensum)
//let sumodds=arr.push(oddsum)
//console.log(arr)


//III-7.Develop a small script which generate array of 5 random numbers
//let arr=[]
//for (let i=0;i<5;i++){
    // const num=Math.floor(Math.random()*11)
    // arr.push(num)
// }
// console.log(arr)


//III-8.Develop a small script which generate array of 5 random numbers and the numbers must be unique
//let arr=[]
// for(let i=0;arr.length<5;i++){
    // const num=Math.floor(Math.random()*11)
    // if (!arr.includes(num)){
        // arr.push(num)
    // }
// }
// console.log(arr)

//III-9.Develop a small script which generate a six characters random id:
// let a=""
//  for (i=0;i<6;i++){
//       a+=Math.floor(Math.random()*16).toString(36)
//  }
//  console.log(a)