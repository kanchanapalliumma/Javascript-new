//1.Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables.
// It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. 
//Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
// function personAccount(firstName,lastName){
//     let incomes=[]
//     let expenses=[]
//     function totalIncome(){
//         sum=0
//         for (i=0;i<incomes.length;i++){
//             sum=sum+incomes[i].amount
//         }
//         return sum
//     }
//     function totalexpences(){
//         sum=0
//         for(i=0;i<expenses.length;i++){
//             sum=sum+expenses[i].amount
//         }
//         return sum
//     }
//     function accountInfo(){
//         return `${firstName} ${lastName} have totalincome ${totalIncome()} and have ${totalexpences()}`
//     }
//     function addIncome(description,amount){
//         incomes.push({description,amount})
//     }
//     function addExpences(description,amount){
//         expenses.push({description,amount})
//     }
//     function accountBalance(){
//         return totalIncome()-totalexpences()
//     }
//     return{
//         totalIncome,
//         totalexpences,
//         addIncome,
//         addExpences,
//         accountInfo,
//         accountBalance,
//     }
    
// }
// const personaccount=personAccount("uma","kanchanapalli")

// personaccount.addIncome("salary",100000)
// personaccount.addIncome("rentreceived",5000)
// personaccount.addExpences("shopping",25000)
// personaccount.addExpences("vegetables",1000)
// personaccount.addExpences("fee",50000)

// const outsidefunction=personaccount

// console.log(outsidefunction.accountInfo())
// console.log(outsidefunction.accountBalance())

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
