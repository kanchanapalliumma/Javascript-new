// const newone=document.getElementsByClassName("div-container")
// for(i=0;i<102;i++){
//     const num=document.createElement("p")
//     num.textContent=i
//     newone.appendChild(num)
// }

    // JavaScript code to generate numbers and append them to the container
    // const container = document.getElementById('numberContainer');

    // if (container) {
    //   for (let i = 1; i <= 100; i++) {
    //     const numberDiv = document.createElement('div');
    //     numberDiv.textContent = i;

    //     if (i % 6 === 0) {
    //       numberDiv.textContent += '\n'; // Add a newline after every 6 numbers
    //     } else {
    //       numberDiv.textContent += '  '; // Add space between numbers
    //     }

    //     numberDiv.classList.add('number');
    //     container.appendChild(numberDiv);
    //   }
    // } else {
    //   console.error('Container not found');
    // }
 
    const tableContainer = document.getElementById('tableContainer');
    const table = document.createElement('table');

    if (tableContainer) {
      let count = 0;
      for (let i = 0; i < 17; i++) { 
        const row = table.insertRow();
        for (let j = 0; j < 6; j++) {
          const cell = row.insertCell();
          // cell.style.display="inline-block"
          cell.style.margin="1px"
          cell.style.padding="20px"
          cell.style.color="white"
          cell.style.fontSize="25px"
          cell.style.fontFamily="Arial"
          cell.style.paddingRight="30px"
          if (j%2==0){
            cell.style.backgroundColor="green"
          }else{
            cell.style.backgroundColor="yellow"
          }
          k=0
          counted=0
          while (k<=count){
            if(count%k==0){
                counted+=1
            }
            k=k+1
          }
          if (counted==2){
            cell.style.backgroundColor="red"
          }
          if (count <= 101) {
            cell.textContent = count;
            count++;
          }
        }
      }
      tableContainer.appendChild(table);
    } else {
      console.error('Table container not found');
    }