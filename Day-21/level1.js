//1.Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name.
// const paragraghs=document.querySelector("p")
// console.log(paragraghs.textContent)


//2.Get each of the the paragraph using document.querySelector('#id') and by their id.
// const firstparagragh=document.querySelector('#first')
// const secondparagragh=document.querySelector("#second")
// const thirdparagragh=document.querySelector("#third")
// const fourthparagragh=document.querySelector("#fourth")
// console.log(firstparagragh.textContent)
// console.log(secondparagragh.textContent)
// console.log(thirdparagragh.textContent)
// console.log(fourthparagragh.textContent)


//3.Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name.
// const languagesall=document.querySelectorAll("p")
// console.log(languagesall)


//4.Loop through the nodeList and get the text content of each paragraph.
// const alllanguages=document.querySelectorAll("p")
// alllanguages.forEach((para)=>{
//     console.log(para.textContent)
// })


//5.Set a text content to paragraph the fourth paragraph,Fourth Paragraph
// const titles=document.querySelectorAll("p")
// titles[3].textContent="Fourth paragragh"
// console.log(titles[3].textContent)


//6.Set id and class attribute for all the paragraphs using different attribute setting methods.
// const titles=document.querySelectorAll("P")
// titles[0].className="title"
// titles[0].id="First-id"
// titles[1].setAttribute("class","title")
// titles[1].setAttribute("id","third-id")
// titles[2].classList.add("title","third-id")
// titles[3].classList.add("title","fourth-id")
// const newone =document.querySelector("#First-id")
// console.log(newone.textContent)