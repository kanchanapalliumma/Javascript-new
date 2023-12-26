 const countriesall=[{
  "name": "Trinidad and Tobago",
  "capital": "Port of Spain",
  "languages": [
      "English"
  ],
  "population": 1399491,
  "flag": "https://flagcdn.com/tt.svg",
  "region": "Americas",
  "area": 5130
},
{
  "name": "Tunisia",
  "capital": "Tunis",
  "languages": [
      "Arabic"
  ],
  "population": 11818618,
  "flag": "https://flagcdn.com/tn.svg",
  "region": "Africa",
  "area": 163610
},
{
  "name": "Turkey",
  "capital": "Ankara",
  "languages": [
      "Turkish"
  ],
  "population": 84339067,
  "flag": "https://flagcdn.com/tr.svg",
  "region": "Asia",
  "area": 783562
},
{
  "name": "Turkmenistan",
  "capital": "Ashgabat",
  "languages": [
      "Turkmen",
      "Russian"
  ],
  "population": 6031187,
  "flag": "https://flagcdn.com/tm.svg",
  "region": "Asia",
  "area": 488100
},
{
  "name": "Turks and Caicos Islands",
  "capital": "Cockburn Town",
  "languages": [
      "English"
  ],
  "population": 38718,
  "flag": "https://flagcdn.com/tc.svg",
  "region": "Americas",
  "area": 948
},
{
  "name": "Tuvalu",
  "capital": "Funafuti",
  "languages": [
      "English"
  ],
  "population": 11792,
  "flag": "https://flagcdn.com/tv.svg",
  "region": "Oceania",
  "area": 26
},
{
  "name": "Uganda",
  "capital": "Kampala",
  "languages": [
      "English",
      "Swahili"
  ],
  "population": 45741000,
  "flag": "https://flagcdn.com/ug.svg",
  "region": "Africa",
  "area": 241550
},
{
  "name": "Ukraine",
  "capital": "Kyiv",
  "languages": [
      "Ukrainian"
  ],
  "population": 44134693,
  "flag": "https://flagcdn.com/ua.svg",
  "region": "Europe",
  "area": 603700
},
{
  "name": "United Arab Emirates",
  "capital": "Abu Dhabi",
  "languages": [
      "Arabic"
  ],
  "population": 9890400,
  "flag": "https://flagcdn.com/ae.svg",
  "region": "Asia",
  "area": 83600
},
{
  "name": "United Kingdom of Great Britain and Northern Ireland",
  "capital": "London",
  "languages": [
      "English"
  ],
  "population": 67215293,
  "flag": "https://flagcdn.com/gb.svg",
  "region": "Europe",
  "area": 242900
},
{
  "name": "United States of America",
  "capital": "Washington, D.C.",
  "languages": [
      "English"
  ],
  "population": 329484123,
  "flag": "https://flagcdn.com/us.svg",
  "region": "Americas",
  "area": 9629091
},
{
  "name": "Uruguay",
  "capital": "Montevideo",
  "languages": [
      "Spanish"
  ],
  "population": 3473727,
  "flag": "https://flagcdn.com/uy.svg",
  "region": "Americas",
  "area": 181034
},
{
  "name": "Uzbekistan",
  "capital": "Tashkent",
  "languages": [
      "Uzbek",
      "Russian"
  ],
  "population": 34232050,
  "flag": "https://flagcdn.com/uz.svg",
  "region": "Asia",
  "area": 447400
},
{
  "name": "Vanuatu",
  "capital": "Port Vila",
  "languages": [
      "Bislama",
      "English",
      "French"
  ],
  "population": 307150,
  "flag": "https://flagcdn.com/vu.svg",
  "region": "Oceania",
  "area": 12189
},
{
  "name": "Venezuela (Bolivarian Republic of)",
  "capital": "Caracas",
  "languages": [
      "Spanish"
  ],
  "population": 28435943,
  "flag": "https://flagcdn.com/ve.svg",
  "region": "Americas",
  "area": 916445
},
{
  "name": "Vietnam",
  "capital": "Hanoi",
  "languages": [
      "Vietnamese"
  ],
  "population": 97338583,
  "flag": "https://flagcdn.com/vn.svg",
  "region": "Asia",
  "area": 331212
},
{
  "name": "Wallis and Futuna",
  "capital": "Mata-Utu",
  "languages": [
      "French"
  ],
  "population": 11750,
  "flag": "https://flagcdn.com/wf.svg",
  "region": "Oceania",
  "area": 142
},
{
  "name": "Western Sahara",
  "capital": "El Aaiún",
  "languages": [
      "Spanish"
  ],
  "population": 510713,
  "flag": "https://flagcdn.com/eh.svg",
  "region": "Africa",
  "area": 266000
},
{
  "name": "Yemen",
  "capital": "Sana'a",
  "languages": [
      "Arabic"
  ],
  "population": 29825968,
  "flag": "https://flagcdn.com/ye.svg",
  "region": "Asia",
  "area": 527968
},
{
  "name": "Zambia",
  "capital": "Lusaka",
  "languages": [
      "English"
  ],
  "population": 18383956,
  "flag": "https://flagcdn.com/zm.svg",
  "region": "Africa",
  "area": 752618
},
{
  "name": "Zimbabwe",
  "capital": "Harare",
  "languages": [
      "English",
      "Shona",
      "Northern Ndebele"
  ],
  "population": 14862927,
  "flag": "https://flagcdn.com/zw.svg",
  "region": "Africa",
  "area": 390757
}
]

// const countriesall=require("./countries.js")
// console.log(countries_data)
// const countries=require('./countries')

let populationInfoVisible=false
function Population() {
  if(!populationInfoVisible){
  const countries = countriesall.slice();
  countries.sort((a, b) => b.population-a.population)
  const topcountries = countries.slice(0, 10);
  let worldpopulation = topcountries.reduce((total, country) => total + country.population, 0);

  let parentPopulation = document.getElementById("percentage-one");
  let parentcountryname=document.getElementById("names-one")
  let parentbar=document.getElementById("inside-bar")
  let parent_one=document.getElementsByClassName("parent-one")[0]
  parent_one.style.display="flex"
  // parent_one.style.
  
  let subparent_bar=document.getElementById("bar-one")

  topcountries.forEach((country) => {
    const population_ = document.createElement("span"); 
    const countryname = document.createElement("span");
     const bar = document.createElement("div");

    const top10countries = country.name;
    const countrypopulation = country.population;
    countryname.textContent = `${top10countries}`+"";
    population_.textContent = `${countrypopulation}`+"";
    bar.style.backgroundColor = "orange";
    bar.style.width = `${((countrypopulation /worldpopulation )*100)}%`;
    bar.style.height = "10px";
    subparent_bar.style.width="600px"
    subparent_bar.style.height="550px"
    bar.style.marginBottom="10px"

    parentcountryname.appendChild(countryname);
    parentbar.appendChild(bar)
    subparent_bar.appendChild(parentbar)
    parentPopulation.appendChild(population_)
  });
  // parent_one.appendChild(parentcountryname);
  parent_one.appendChild(subparent_bar)
  parent_one.appendChild(parentPopulation)
  parent_one.style.flexdirection="column"

 
  let newthing = document.getElementsByClassName("parent-one")[0]
    let languageInfo = document.getElementsByClassName("parent-two")[0]

    newthing.style.display = "block";
    // languageInfo.innerHTML=" "
    languageInfo.style.display="none"

    populationInfoVisible = true;
  // }else{
    // populationInfoVisible=false
  }
}
//   // if (!populationInfoVisible){
//     populationInfo.style.display="block"
//     populationInfoVisible=true
//   // }else{
//     // existmessage.textContent=" "
//     // populationInfoVisible=false
//   }
// }
// // Population()

function Languages(){
  if(populationInfoVisible){
    // parent_one.innerHTML=" "
    const newset=[]
    for(let country of countriesall){
    const languages=country.languages
    languages.forEach((language)=>newset.push(language))
  }
const languageCount = {}
newset.forEach(language => {
  if (languageCount[language]) {
    languageCount[language]++; 
  } else {
    languageCount[language] = 1; 
  }
});
let totalcount=Object.entries(languageCount)
totalcount.sort((a,b)=>(b[1]-a[1]))
let worldlanguages = totalcount.reduce((total, language) => total + language[1], 0);
let parentlanguagescount= document.getElementById("percentage-two");
  let parentlanguagename=document.getElementById("names-two")
  let parentlanguagebar=document.getElementById("inside-bar-two")
  let parent_two=document.getElementsByClassName("parent-two")[0]
  let subparent_barOfLanguages=document.getElementById("bar-two")


 let toplanguages=totalcount.slice(0,10)
for (const [language,count] of toplanguages) {
const languagename=document.createElement("p")
const countOflanguages=document.createElement("span")
const bars = document.createElement("div")
  const nameofcountries=language
  // languagename.innerHTML=nameofcountries
  const languagescount=count
  languagename.textContent=`${nameofcountries}`+""
  countOflanguages.textContent=`${languagescount}`+""

  bars.style.backgroundColor = "orange";
  bars.style.width = `${((languagescount /worldlanguages )*100)}%`;
  bars.style.height = "28px";
  subparent_barOfLanguages.style.width="800px"
  subparent_barOfLanguages.style.height="550px"
  bars.style.marginBottom="14.5px"

  parentlanguagename.appendChild(languagename)
  parentlanguagebar.appendChild(bars)
  subparent_barOfLanguages.appendChild(parentlanguagebar)
  parentlanguagescount.appendChild(countOflanguages)

  }
  // let parent_two=document.getElementsByClassName("parent-two")[0]
  parent_two.appendChild(parentlanguagename)
  parent_two.appendChild(subparent_barOfLanguages)
  parent_two.appendChild(parentlanguagescount)

  let parent_one = document.getElementsByClassName("parent-one")[0]
  let languageInfo = document.getElementsByClassName("parent-two")[0]

  parent_one.style.display="none"
  languageInfo.style.display = "block";
  populationInfoVisible = false;
  }
}