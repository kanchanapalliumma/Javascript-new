fetch(countriesAPI)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then((data) => {
    
//     const country = data[2];
//     const countryName = country.name;
//     const population = country.population;
//     const capital = country.capital;
//     const languages = country.languages.map((lang) => lang.name).join(', ');
//     const area = country.area;

//     console.log(`${countryName} - Population: ${population}, Area: ${area}, Languages: ${languages}, Capital: ${capital}`);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });