const countries=require('./countries')
console.log(countries)

//1.Destructure the countries object print name, capital, population and languages of all countries
// countries.forEach((user) =>{ 
// let {name,capital,population,languages}=user
// console.log(name,capital,population,languages)
// })

//2.A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
//const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// const [name, skills, scores] = student;
// const [,, jsscores, reactscores] = scores;
// console.log(name, skills, jsscores,reactscores);


//3.Write a function called convertArrayToObject which can convert the array to a structure object.
// const students = [
//     ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//     ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
//   ]
//   let newobject=new Set()
//   students.forEach((student) => {
//     let {name,skills,scores}=student
//     student.add(name,skills,scores)
//   })
//   console.log(students)


//4.Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// * Add Bootstrap with level 8 to the front end skill sets
// * Add Express with level 9 to the back end skill sets
// * Add SQL with level 8 to the data base skill sets
// * Add SQL without level to the data science skill sets


// const student = {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         { skill: 'HTML', level: 10 },
//         { skill: 'CSS', level: 8 },
//         { skill: 'JS', level: 8 },
//         { skill: 'React', level: 9 }
//       ],
//       backEnd: [
//         { skill: 'Node',level: 7 },
//         { skill: 'GraphQL', level: 8 },
//       ],
//       dataBase:[
//         { skill: 'MongoDB', level: 7.5 },
//       ],
//       dataScience:['Python', 'R', 'D3.js']
//     }
//   }
// const copieduser={...student}
// let newskill={skills:'Bootscrap',level:8}
// copieduser.skills.frontEnd.push(newskill)
// copieduser.skills.backEnd.push({skill:'Express',level:9})
// copieduser.skills.dataBase.push({skill:'SQL',level:'8'})
// copieduser.skills.dataScience.push({skill:'SQL'})
// console.log(copieduser)