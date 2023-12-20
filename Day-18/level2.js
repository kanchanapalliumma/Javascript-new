//1.Print out all the cat names in to catNames variable.
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
  fetch(catsAPI)
    .then((response)=>response.json())
       
    .then((data)=>{
        let catnames=data.map((cat)=>cat.name)
        console.log(data)
        console.log(catnames)
    })
    .catch((error)=>{
        console.error('Error:',error)
    })