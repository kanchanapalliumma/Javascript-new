let meassagedisplayed=false
function generateTable(){ 
    
      var numberInput = document.getElementById('numberInput').value;
    if (numberInput===""){
      var parent =document.getElementById("uma-two")
      if (!meassagedisplayed){
        var existingmeassage=document.getElementById("uma-message")
        if (!existingmeassage){
        var newone=document.createElement("uma")
        var one=document.getElementById('numberInput')
        newone.textContent="Enter a number on the input field to generate a number"
        newone.id="uma-message"
        parent.insertBefore(newone,one)
        newone.style.display="block"
        meassagedisplayed=true
      }else{
        existingmeassage.style.display="none"
        meassagedisplayed=true
      }
        
    }
}
    else if 
     (typeof numberInput==='String'){
        var parent =document.getElementById("uma-two")
        if (!meassagedisplayed){
        var existingmeassage=document.getElementById("uma-message")
        if (!existingmeassage){
            var newone=document.createElement("uma")
            var one=document.getElementById('numberInput')
            newone.textContent="input value must be number"
            newone.id="uma-message"
            parent.insertBefore(newone,one)
            newone.style.display="block"
            meassagedisplayed=true
        }else{
        existingmeassage.style.display="none"
        meassagedisplayed=true
        }
        
    }
}

    else{
        var existingmeassage=document.getElementById("uma-message")
        if (existingmeassage){
            existingmeassage.style.display="none"
            meassagedisplayed=false 
             }       

        var parent =document.getElementById("uma-two")
        document.addEventListener("onclick",(event)=>{
      var newone=document.createElement("uma")
      var one=document.getElementById('numberInput')
        newone.textContent="Enter a number on the input field to generate a number"
        parent.insertBefore(newone,one)
        newone.style.display="none"
        })
      var table = document.getElementById('table');
      table.innerHTML = ''; // Clear previous content
      

      let numberows=Math.ceil(numberInput / 8)
      let count=0
      for (let  i = 0; i <numberows; i++) {
        const row=table.insertRow()
        for(let j=0;j<8;j++){
            let cell = row.insertCell();
            
        if (count <= numberInput){
            cell.textContent = count;
            
            let randomcolors=["green","red","yellow"]
            let random=randomcolors[Math.floor(Math.random()*randomcolors.length)]
            cell.style.padding="5px 30px"
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

    