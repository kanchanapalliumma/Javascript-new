//I-Find the person who has many skills in the users object.1.
// const users = {
//     Alex: {
//       email: "alex@alex.com",
//       skills: ["HTML", "CSS", "JavaScript"],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: "asab@asab.com",
//       skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: "daniel@daniel.com",
//       skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: "daniel@alex.com",
//       skills: ["HTML", "CSS", "JavaScript", "Python"],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: "john@john.com",
//       skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: "thomas@thomas.com",
//       skills: ["HTML", "CSS", "JavaScript", "React"],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: "paul@paul.com",
//       skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
//   }
// let personskils = 0
// let moreskill=0
// for(let user in users){
//     let objectlength=(users[user].skills.length)
//     if (objectlength>personskils){
//         personskils = objectlength
//         moreskill=user
//     }
// }
// console.log(moreskill,personskils)

//2.Count logged in users, count users having greater than equal to 50 points from the following object.
// Morepoints=0
// count=0
// for(user in users){
//     let morepoints=(users[user].points)
//     if (morepoints>=50){
//         // Morepoints=user
//         count++
//         // console.log(Morepoints,morepoints)
//     }
//  }
//  console.log(count)

 //II-1.Find people who are MERN stack developer from the users object
//  let username=[]
//  for (let user in users){
//     let mernstockdevelopers=users[user].skills
//     if (mernstockdevelopers.includes("MongoDB") && mernstockdevelopers.includes("Express") && mernstockdevelopers.includes("React") && mernstockdevelopers.includes("Node")){
//         username.push(user)
//     }
//  }
//  console.log(username)

 //2.Set your name in the users object without modifying the original users object

//  const copyuser=Object.assign({},users)
//  copyuser['uma']={
//     email:"kanchanapalliuma22@navgurukul.org",
//     skills:["HTML","CSS"],
//     age:20,
//     isloggedin:true,
//     points:50
//  }
//  console.log(copyuser)

//II-3.Get all keys or properties of users object
// let copyuser=Object.assign({},user)
// let userkeys=Object.keys(users)
// console.log(userkeys)

// //4.Get all the values of users object
// let uservalues=Object.values(users)
// console.log(uservalues)


//II-5.Use the countries object to print a country name, capital, populations and languages.
// const countries={
//     India:{
//         capital:"Delhi",
//         population:80000000,
//         languages:["Telugu","English","Hindhi"],
//     },
//     Southkorea:{
//         capital:"Seoul",
//         population:8089880,
//         languages:"korea",
//     },
//     America:{
//         capital:"Washington",
//         population:2993880,
//         languages:"English",
//     },
//     chaina:{
//         capital:"Beijing",
//         population:70948500,
//         languages:['Mandarin','Yue'],
//     }
// }
// console.log(countries)