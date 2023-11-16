//1.Copy countries array(Avoid mutation)
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
//   'Kenya'
// ]
//  let newarr=[]
//  for(i=0;i<countries.length;i++){
//      newarr.push(countries[i])
//  }
//  console.log("Actual Array:",countries)
//  console.log("Newarray:", newarr)


//2.Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
// let newarr=[]
// for (i=0;i<countries.length;i++){
//     newarr.push(countries[i])
// }
// newarr.sort()
// console.log("Actual Array:",countries)
// console.log("New Array:",newarr)


//3.Sort the webTechs array and mernStack array
// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
// webTechs.sort()
// console.log(webTechs)  

// const mernStack = ['MongoDB', 'Express', 'React', 'Node']
// mernStack.sort()
// console.log(mernStack)

//4.Extract all the countries contain the word 'land' from the countries array and print it as array
// const countries = [
//     'Albania',
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
//   ]
// let newarr=[];
//  for (i=0;i<countries.length;i++){
//      let country=countries[i].toLowerCase()
//      if (country.includes("land")){
//          newarr.push(countries[i])
//      }
//  }
//  console.log(newarr)


//5.Find the country containing the hightest number of characters in the countries array
// let newarr=[]
// for(i=0;i<countries.length;i++){
//     const arr=countries[i].length
//     if (arr>newarr.length){
//         newarr=countries[i]
//     }
// }
// console.log(newarr)

//6.Extract all the countries contain the word 'land' from the countries array and print it as array

//7.Extract all the countries containing only four characters from the countries array and print it as array
// let newarr=[]
//  for(i=0;i<countries.length;i++){
//      let country=countries[i].length
//      if(country==4){
//          newarr.push(countries[i])
//      }
//  }
//  console.log(newarr)

//8.Extract all the countries containing two or more words from the countries array and print it as array
// let newarr=[]
//   for(i=0;i<countries.length;i++){
//       let country=countries[i].length
//       if(country>=2){
//           newarr.push(countries[i])
//       }
//   }
//   console.log(newarr)

//9.Reverse the countries array and capitalize each country and stored it as an array
// const newarr=[]
// countries.reverse()
// for(i=0;i<countries.length;i++){
//     newarr.push(countries[i].toUpperCase())
// }
// console.log(newarr)


