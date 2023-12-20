//1.Change skills array to JSON using JSON.stringify()
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
const skillstojson= JSON.stringify(skills)
console.log(skillstojson)

//2.Stringify the age variable
let age = 250;
let agejson=JSON.stringify(age)
console.log(agejson)

//3.Stringify the isMarried variable
let isMarried = true
let ismarriedjson=JSON.stringify(isMarried)
console.log(ismarriedjson)

//4.Stringify the student object
const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }
  const studentJSON=JSON.stringify(student)
  console.log(studentJSON)