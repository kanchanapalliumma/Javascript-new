
const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]

    //1.Iterate through the users array and get all the keys of the object using destructuring
    let newone=[]
    for (let user of users){
        let{name,scores,skills,age}=user
        const keys=Object.keys(user)
        newone.push(user.name,keys)
    }
    let keyset=new Set(newone)
    console.log(keyset)


    //2.Find the persons who have less than two skills
    let skillsize=new Set()
    for (let user of users){
        let{name,scores,skills,age}=user
        if(user.skills.length<2){
            skillsize.add(user.name)
        }
    }
    console.log(skillsize)


