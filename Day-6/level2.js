//1.Develop a small script which generate any number of characters random id:
//fe3jo1gl124g
// const prompt = require("prompt-sync")();
// let arr=""
// const num=Number(prompt("Enter a no"))
// for (i=0;i<num;i++){
//     arr+=Math.floor(Math.random()*16).toString(16)
// }
// console.log(arr)


//2.Write a script which generates a random hexadecimal number.
// '#ee33df'
// let a=""
// for (i=0;i<7;i++){
//      a+=Math.floor(Math.random()*16).toString(16)
// }
// console.log(a)


//3.Write a script which generates a random rgb color number.
// const arr=[]
// for(let i=0;i<1;i++){
//     const rgb=Math.floor(Math.random()*256)
//     const rgbcolor=Math.floor(Math.random()*256)
//     const thirdrgb=Math.floor(Math.random()*256)
//     arr.push(rgb,rgbcolor,thirdrgb)
// }
// console.log(`rgb(${arr.join(",")})`)

//4.Using the above countries array, create the following new array.
//["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// const countries = [
//     // 'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// const arr=[]
// for (let i=0;i<countries.length;i++){
    // arr.push(countries[i].toUpperCase())

// }
// console.log(arr)



//5.Using the above countries array, create an array for countries length'.
//let newarr=[]
//for (const country of countries){
//    newarr.push(country.length)
//}
//console.log(newarr)

//6.Use the countries array to create the following array of arrays:
//const arrnew=[];
//for(let i=0;i<countries.length;i++){
//    const country=countries[i];
//    const arr=country.substring(0,3).toUpperCase()
    // const lengthofarr=country.length
    // arrnew.push(country,arr,lengthofarr)
// }
// console.log(arrnew)

//7.In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// let newarr=[];
// for (i=0;i<countries.length;i++){
    // let country=countries[i].toLowerCase()
    // if (country.includes("land")){
        // newarr.push(countries[i])
    // }
// }
// if (newarr.length>0){
    // console.log(newarr)
// }else{
    //  console.log("All these countries are without land.")
// }


//8.In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
//let newarr=[];
// for (i=0;i<countries.length;i++){
    //  let country=countries[i].toLowerCase()
    //  if (country.endsWith("ia")){
        //  newarr.push(countries[i])
    // }
// }
// if (newarr.length>0){
    //  console.log(newarr)
// }else{
    //   console.log("These are countries ends without ia.")
// }

//9.Using the above countries array, find the country containing the biggest number of characters.
// let newarr="";
//  for (i=0;i<countries.length;i++){
//      let country=countries[i].length
//      if (country>=newarr.length){
//         newarr=countries[i]
//      }
//  }
//  console.log(newarr)

//10.Using the above countries array, find the country containing only 5 characters.
// let newarr=[]
// for(i=0;i<countries.length;i++){
    // let country=countries[i].length
    // if(country==5){
        // newarr.push(countries[i])
    // }
// }
// console.log(newarr)

//11.Find the longest word in the webTechs array
//  const webTechs = [
//      'HTML',
//      'CSS',
//      'JavaScript',
//      'React',
//      'Redux',
//      'Node',
//      'MongoDB'

//     ]
  
// let newarr=""
// for(i=0;i<webTechs.length;i++){
//     let length=webTechs[i].length
//     if(length>newarr.length)
//     newarr=webTechs[i]
// }
// console.log(newarr)


//12.Use the webTechs array to create the following array of arrays:
//let newarr=[]

// for(i=0;i<webTechs.length;i++){
//     let length=webTechs[i].length
//     newarr.push([webTechs[i],length])
// }
// console.log(newarr)

//14.Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
// for(i=0;i<webTechs.length;i++){
//     console.log(webTechs)
// }

//15.This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
//const friuts=['banana', 'orange', 'mango', 'lemon']
// let newarr=[]
// for(i=3;i>=0;i--){
//     newarr.push(friuts[i])
// }
// console.log(newarr)

//16.Print all the elements of array as shown below.
// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
// const newarr=fullStack[0].concat(fullStack[1])
// for(i=0;i<newarr.length;i++){
//     let arr=newarr[i].toUpperCase()
//     console.log(arr)
// }


