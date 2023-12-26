//1. Declare an empty array;
//const arr=[]
//console.log(arr)

//2. Declare an array with more than 5 number of elements
//const arr=[1,2,3,4,5,6]
//console.log(arr)

//3. Find the length of your array
//const arr=[1,2,3,4,5,6]
//console.log(arr.length)

//4.Get the first item, the middle item and the last item of the array
//const arr=[1,2,3,4,5,6,7]
//console.log(arr[0])
//console.log(arr[3])
//console.log(arr[6])

//5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
//const mixeddatatypes=[1,"uma",true,null,[1,2,3],["uma","jyothi"]]
//console.log(mixeddatatypes.length)


//6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
//const itcompanies=['facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
//7.Print the array using console.log()
//console.log(itcompanies)

//8.Print the number of companies in the array
//console.log(itcompanies.length)

//9.Print the first company, middle and last company
//console.log(itcompanies[0])
//console.log(itcompanies[3])
//console.log(itcompanies[6])

//10.Print out each company
//console.log(itcompanies[0])
//console.log(itcompanies[1])
//console.log(itcompanies[2])
//console.log(itcompanies[3])
//console.log(itcompanies[4])
//console.log(itcompanies[5])
//console.log(itcompanies[6])

//11.Change each company name to uppercase one by one and print them out
//console.log(itcompanies[0].toUpperCase())
//console.log(itcompanies[1].toUpperCase())
//console.log(itcompanies[2].toUpperCase())
//console.log(itcompanies[3].toUpperCase())
//console.log(itcompanies[4].toUpperCase())
//console.log(itcompanies[5].toUpperCase())
//console.log(itcompanies[6].toUpperCase())

//12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
//console.log(itcompanies.join())

//13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
//const itcompanies=['facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
//let index=itcompanies.indexOf('Google')
//if (index === -1){
    //console.log('Company not found')
//}
//else{
    //console.log('Company')
//}

//14.Filter out companies which have more than one 'o' without the filter method
const itcompanies=['facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
const companies=[];
i=0
while (i<itcompanies.length){
    const company=itcompanies[i];
    let count=0;
    let j=0;
    while (j<company.length){
        if (company[j]=="o"){
            count=count+1;
        }
        j=j+1;
    }
    if (count>=2){
        companies.push(company);
    }
    i=i+1
}
console.log(companies)  


itcompanies

//15.Sort the array using sort() method
//const arr=itcompanies.sort()
//console.log(arr)

//16.Reverse the array using reverse() method
//const reverse=itcompanies.reverse()
//console.log(reverse)

//17.Slice out the last 3 companies from the array
//console.log(itcompanies.slice(4,7))

//18.Slice out the middle IT company or companies from the array
//console.log(itcompanies.slice(3,4))

//19Slice out the first 3 companies from the array
//console.log(itcompanies.slice(0,3))

//20.Remove the first IT company from the array
//console.log(itcompanies.splice(1))

//21.Remove the middle IT company or companies from the array
//const itcompanies=['facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
//let s=itcompanies.splice(3,1)
//console.log(itcompanies)

//22.Remove the last IT company from the array
//let a=itcompanies.pop()
//console.log(itcompanies)

//23.Remove all IT companies
//let b=itcompanies.splice()
//console.log(b)






