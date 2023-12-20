//1.Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
const personAccount={
    firstName:'kanchanapalli',
    lastName:'Uma',
    income:[],
    expenses:[],

    get totalIncome(){
        sum=0
        for (let user of this.income){
            sum=sum+user.amount
        }
        return sum
    },
    get totalExpenses(){
        sum=0
        for (let user of this.expenses){
            sum=sum+user.amount
        }
        return sum
    },
    get accountInfo(){
        return `${this.firstName} ${this.lastName} have the totalincome is ${this.totalIncome} and totalexpences are ${this.totalExpenses}`
    },
    addIncome(description,amount){
        this.income.push({description,amount})
    },
    addExpences(description,amount){
        this.expenses.push({description,amount})
    },
    accountBalance(){
        let Totalincome=this.totalIncome
        let Totalexpences=this.totalExpenses
        return Totalincome-Totalexpences
    }
}
personAccount.addIncome('salary',2000)
personAccount.addIncome('interest',200)
personAccount.addExpences('rent',500)
personAccount.addExpences('vegetables',1200)

console.log(personAccount.accountInfo)
console.log(personAccount.accountBalance())

