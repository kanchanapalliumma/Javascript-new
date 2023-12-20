//`1.Read the cats api and find the average weight of cat in metric unit.
// const catsAPI = 'https://api.thecatapi.com/v1/breeds'
// fetch(catsAPI)
//     .then((Response)=>Response.json())
//     .then((data)=>{
//         let averageweight=0
//         for (let cat of data){
//             averageweight=avera
//         }
//     })

//2.Read the countries api and find out the 10 largest countries
// const countriesAPI = 'https://restcountries.com/v2/all'
// fetch(countriesAPI)
//     .then((Response)=>Response.json())
//     .then((data)=>{
//         let countries=data.sort((a,b)=>a.area-b.area)
//         let topcountries=countries.slice(0,10)
//         console.log(topcountries)
//     })
//     .catch((error)=>{
//         console.error('Error:',error)
//     }
//     )

//3.Read the countries api and count total number of languages in the world used as officials.
const countriesAPI = 'https://restcountries.com/v2/all'
fetch(countriesAPI)
    .then((Response)=>Response.json())
    .then((data)=>{
        let countrylanguage=data.map((country)=>country.languages.map((lang) => lang.name).join(', '))
        let totallaguages=new Set(countrylanguage)
        let allanguages=totallaguages.size
        console.log(allanguages)
        console.log(totallaguages)
    })
    .catch((error)=>{
        (console.error())}
        )