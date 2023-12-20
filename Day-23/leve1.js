
let meassagedisplayed=false

function generateTable(){
  let  newInput=document.getElementById("numberInput").value
  // let emptyinput=document.createElement("emptyinput")
  // emptyinput.textContent="Enter a number on the input field to generate a number"
  // emptyinput.style.color="red"

  if (newInput===""){
    displaymessage("Enter a number on the input field to generate a number")
  }else if (isNaN(newInput)){
    displaymessage("input value must be number")
  }else{
    hidemessage()

    var table = document.getElementById('table');
      table.innerHTML = ''; // Clear previous content
      

      let numberows=Math.ceil(newInput / 9)
      let count=0
      for (let  i = 0; i <numberows; i++) {
        const row=table.insertRow()
        for(let j=0;j<9;j++){
            let cell = row.insertCell();
            
        if (count <= newInput){
            cell.textContent = count;
            
            let randomcolors=["green","red","yellow"]
            let random=randomcolors[Math.floor(Math.random()*randomcolors.length)]
            cell.style.padding="3px 34px"
            cell.style.backgroundColor=random

            cell.style.fontSize="40px"
            cell.style.color="white"
            // cell.style.paddingDown="0px"12
            cell.style.textalign ="center"
            count++;
        }
      }
    }

    }
}

function displaymessage(message){
  // if (!meassagedisplayed){
    let parent=document.getElementById("uma-two")
    let existingMessage = document.getElementById("uma-message");
    if (!existingMessage){
      let child=document.getElementById("numberInput")
      let newmessage = document.createElement("p")
    newmessage.textContent=message
    newmessage.style.color="red"

    newmessage.setAttribute("id","uma-message")
    parent.insertBefore(newmessage,child)
    newmessage.style.display="block"
    meassagedisplayed=true
    }
    else{
      existingMessage.textContent=message
      existingMessage.style.color="red"
      existingMessage.style.display="block"
      meassagedisplayed=true
    }
    
  }
function hidemessage(){
  let existingmeassage=document.getElementById("uma-message")
  if(existingmeassage){
  existingmeassage.style.display="none"
  meassagedisplayed=false
}
}

