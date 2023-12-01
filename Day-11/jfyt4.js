function sayHellow(){
    console.log("hello");
}

function add(num1, num2,Callback){
    console.log(num1+num2);
    Callback()
}
let a=10
let b=20
add(a,b,sayHellow)