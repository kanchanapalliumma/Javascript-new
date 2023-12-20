const countries=require('./countrylanguage')
let newset=[]
for (let country of countries){
    const newlanguages= country.languages
    newlanguages.forEach((language) => newset.push(language))
}
let setoflanguages=new Set(newset)
// console.log(setoflanguages)
// console.log(setoflanguages.size)