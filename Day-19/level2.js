//1.Create a closure which has three inner functions
function outsidefunction(){
    let number={
        firstname:"uma",
        lastname:"kanchanapalli",
        skills:["html","css"]
    }
    function insidefunction(){
        number.nationality="Indian"
        return number.nationality
    }
    function inside_function(){
        number.skills.push("javascript")
        return number.skills
    }
    function inside__function(){
        number.lastname="mudiraj"
        return number
    }
    return {
        insidefunction:insidefunction(),
        inside_function:inside_function(),
        inside__function:inside__function(),
    }
}
const innfun=outsidefunction()
console.log(innfun.insidefunction)
console.log(innfun.inside_function)
console.log(innfun.inside__function)