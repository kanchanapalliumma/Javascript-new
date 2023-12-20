let messagedisplayed=false
function display(){
        const mass=document.getElementById("input-field").value
        const planet=document.getElementById("select-option").value
        if (mass==""){
            displaymass("mass is required")
        }
        else{
            hidemessage()
            if(planet=="select-planet"){
                displayplanet("choose any planet")
            }else{
                hidingmessage()
                imageplanet(planet)
                const newplannet=document.getElementById("flex-container")
                newplannet.style.display="flex"
                newplannet.style.flexDirection="column"
            }
        }
}
    // })
// }
function displaymass(message){
    const parent=document.getElementById("message")
    const messagexist=document.getElementById("mass-message")
    if(!messagexist){
    let newmessage=document.createElement("p")
    newmessage.textContent=message
    newmessage.setAttribute("id","mass-message")
    parent.appendChild(newmessage)
    // newmeassage.style.display="block"
    messagedisplayed=true
}else{
    messagexist.textContent=message
    messagexist.style.display="block"
    messagedisplayed=true
}
}

function hidemessage(){
    let messagexist=document.getElementById("mass-message")
    if(messagexist){
        messagexist.style.display="none"
        messagedisplayed=false
    }
}
function displayplanet(message){
    const parent=document.getElementById("message")
    const messagexist=document.getElementById("mass-planet")
    if(!messagexist){
    let planetmessage=document.createElement("p")
    planetmessage.textContent=message
    planetmessage.setAttribute("id","mass-planet")
    parent.appendChild(planetmessage)
    messagedisplayed=true
    }else{
        messagexist.textContent=message
        messagexist.style.display="block"
        messagedisplayed=true
    }
}
function hidingmessage(){
    let messagexist=document.getElementById("mass-planet")
    if(messagexist){
        messagexist.style.display="none"
        messagedisplayed=false
    }
}

function imageplanet(planet) {
    const imageContainer = document.getElementById("image-container");
    const mass=document.getElementById("input-field").value
    const weight=document.getElementById("message")
    // const gravityforce=(6.674)*(10)**(-11)

    if (planet === "MERCURY") {
        const img = document.createElement("img");
        img.src = "images/mercury.png";
        img.alt = "Mercury Image";
        imageContainer.innerHTML = '';
        imageContainer.appendChild(img);

        const weight=document.getElementById("message")
        const weightinnewton=document.createElement("weight-in-newton")
        weightinnewton.innerHTML=mass*(3.59)
        weight.innerHTML=""
        weight.appendChild(weightinnewton)


    }else if (planet==="VENUS"){
        const img = document.createElement("img");
        img.src = "images/venus.png";
        img.alt = "venus Image";
        imageContainer.innerHTML = '';
        imageContainer.appendChild(img);

        const weight=document.getElementById("message")
        const weightinnewton=document.createElement("weight-in-newton")
        weightinnewton.innerHTML=mass*(8.87)
        weight.innerHTML=""
        weight.appendChild(weightinnewton)
    }else if (planet==="EARTH"){
        const img = document.createElement("img");
        img.src = "images/earth.png";
        img.alt = "earth Image";
        imageContainer.innerHTML = '';
        imageContainer.appendChild(img);

        const weight=document.getElementById("message")
        const weightinnewton=document.createElement("weight-in-newton")
        weightinnewton.innerHTML=mass*(9.81)
        weight.innerHTML=""
        weight.appendChild(weightinnewton)

    }else if (planet==="MOON"){
        const img = document.createElement("img");
        img.src = "images/moon.png";
        img.alt = "moon Image";
        imageContainer.innerHTML = '';
        imageContainer.appendChild(img);

        const weight=document.getElementById("message")
        const weightinnewton=document.createElement("weight-in-newton")
        weightinnewton.innerHTML=mass*(1.62)
        weight.innerHTML=""
        weight.appendChild(weightinnewton)
    }else if (planet==="MARS"){
        const img = document.createElement("img");
        img.src = "images/mars.png";
        img.alt = "mars Image";
        imageContainer.innerHTML = '';
        imageContainer.appendChild(img);

        const weight=document.getElementById("message")
        const weightinnewton=document.createElement("weight-in-newton")
        weightinnewton.innerHTML=mass*(3.77)
        weight.innerHTML=""
        weight.appendChild(weightinnewton)
    }else if (planet==="JUPITER"){
        const img = document.createElement("img");
        img.src = "images/jupiter.png";
        img.alt = "jupiter Image";
        imageContainer.innerHTML = '';
        imageContainer.appendChild(img);

        const weight=document.getElementById("message")
        const weightinnewton=document.createElement("weight-in-newton")
        weightinnewton.innerHTML=mass*(25.95)
        weight.innerHTML=""
        weight.appendChild(weightinnewton)
    }else if (planet==="SATURN"){
        const img = document.createElement("img");
        img.src = "images/saturn.png";
        img.alt = "saturn Image";
        imageContainer.innerHTML = '';
        imageContainer.appendChild(img);

        const weight=document.getElementById("message")
        const weightinnewton=document.createElement("weight-in-newton")
        weightinnewton.innerHTML=mass*(11.08)
        weight.innerHTML=""
        weight.appendChild(weightinnewton)
    }else if (planet==="URANUS"){
        const img = document.createElement("img");
        img.src = "images/uranus.png";
        img.alt = "uranus Image";
        imageContainer.innerHTML = '';
        imageContainer.appendChild(img);

        const weight=document.getElementById("message")
        const weightinnewton=document.createElement("weight-in-newton")
        weightinnewton.innerHTML=mass*(10.67)
        weight.innerHTML=""
        weight.appendChild(weightinnewton)
    }else if (planet==="NEPTUNE"){
        const img = document.createElement("img");
        img.src = "images/neptune.png";
        img.alt = "neptune Image";
        imageContainer.innerHTML = '';
        imageContainer.appendChild(img);

        const weight=document.getElementById("message")
        const weightinnewton=document.createElement("weight-in-newton")
        weightinnewton.innerHTML=mass*(14.07)
        weight.innerHTML=""
        weight.appendChild(weightinnewton)
    }else if (planet==="PLUTO"){
        const img = document.createElement("img");
        img.src = "images/pluto.png";
        img.alt = "pluto Image";
        imageContainer.innerHTML = '';
        imageContainer.appendChild(img);

        const weight=document.getElementById("message")
        const weightinnewton=document.createElement("weight-in-newton")
        weightinnewton.innerHTML=mass*(0.42)
        weight.innerHTML=""
        weight.appendChild(weightinnewton)
    }else{
        const img = document.createElement("img");
        imageContainer.innerHTML = '';

        const weightinnewton=document.createElement("weight-in-newton")
        weight.innerHTML=""

    }
}

