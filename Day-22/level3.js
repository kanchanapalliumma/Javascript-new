// var n=document.createElement("h1")
// var para=document.createElement("p")
// n.innerText="Asabeneh Yetayeh challenges in 2020"
// para.innerText="30DaysOfJavascript Chalenge"
// var parent=document.getElementById("second")
// parent.appendChild(n)
// parent.appendChild(para)

const currentdate = new Date();
const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
const date = currentdate.getDate();
const day = currentdate.getDay();
const month = currentdate.getMonth();
const year = currentdate.getFullYear();
let hours = currentdate.getHours(); 
let minutes = currentdate.getMinutes();
let seconds = currentdate.getSeconds();

if (hours < 10){
    hours = "0" + hours; 
}
if (minutes < 10){
    minutes = "0" + minutes; 
}
if (seconds < 10){
    seconds = "0" + seconds; 
}

const currenttime = `${months[month]} ${date}, ${year} ${hours}:${minutes}:${seconds}`;
var nn=document.createElement("h5")
nn.innerText=currenttime
// var parent=document.getElementsById("second")[0]

// parent.insertBefore(n,last)
nn.id="time"
parent.appendChild(nn)

let timeone=document.getElementById("time")
timeone.style.display="inline"
// updateTime()
// // console.log(currenttime);
// setInterval(updateTime,1000)

function changecolors(){
const colors=["black","white","red","yellow","pink","blue","green","skyblue"]
const randomcolor=colors[Math.floor(Math.random()*colors.length)]

timeone.style.backgroundColor=randomcolor
}
setInterval(changecolors,1000)
setInterval(updateTime,1000)
function updateTime() {
    const currentDate = new Date(); // Get the current date every second
    hours = currentDate.getHours(); // Update hours
    minutes = currentDate.getMinutes(); // Update minutes
    seconds = currentDate.getSeconds(); // Update seconds

    if (hours < 10){
        hours = "0" + hours; 
    }
    if (minutes < 10){
        minutes = "0" + minutes; 
    }
    if (seconds < 10){
        seconds = "0" + seconds; 
    }

    const updatedTime = `${months[month]} ${date}, ${year} ${hours}:${minutes}:${seconds}`;
    const timeone = document.getElementById("time");
    timeone.innerText = updatedTime; // Update the displayed time

    changecolors();
}



function changeyearcolor(){
    const yearcolor=document.querySelector("h1")
    const fullcolors=yearcolor.textContent
    let styledText=""
    for (let i=0;i<fullcolors.length;i++){
        if (fullcolors.substr(i,4)==="2020"){
            let differentcolors=["skyblue","red","yellow","pink","blue","green","skyblue"]
            let randomcolors=differentcolors[Math.floor(Math.random()*differentcolors.length)]
            const stylingyear=`<span style="color:${randomcolors}";display:inline;font-size:200px>2020</span>`
        styledText+=stylingyear
        i+=3
        }else{
            styledText+=fullcolors[i]
        }

    }
    yearcolor.innerHTML=styledText
}
setInterval(changeyearcolor,1000)




