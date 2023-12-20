//1.Read the countries API using fetch and print the name of country, capital, languages, population and area.


// const fetch = require('node-fetch');
const countriesAPI = 'https://restcountries.com/v2/all';
fetch(countriesAPI)
  .then((response) =>response.json()
    // if (!response.ok) {
    //   throw new Error('Network response was not ok');
    // }
    // return response.json();
  )
  .then((data) => {
    
    const country = data[10];
    const countryName = country.name;
    const population = country.population;
    const capital = country.capital;
    const languages = country.languages.map((lang) => lang.name).join(', ');
    const area = country.area;

    console.log(`${countryName} - Population: ${population}, Area: ${area}, Languages: ${languages}, Capital: ${capital}`);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

