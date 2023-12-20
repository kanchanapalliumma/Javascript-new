//1.Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal{
    constructor(name,age,color,legs){
        this.name=name
        this.age=age
        this.color=color
        this.legs=legs
    }
    get getname(){
        return this.name
    }
    set setlegs(legs){
        this.legs-=legs
    }
    getanimalinfo(){
        let fullinfo=`The dog name is ${this.name}.It have age of ${this.age} and it is in color ${this.color}.It have ${this.legs}.`
        return fullinfo
    }
    static chileddog(){
        let Name='vfool'
        let Color='black'
        let Age=1
        let Legs=2
        let fullinfoOfchild= `${Name} have age ${Age}},in color ${Color},have ${Legs}legs.`
        return fullinfoOfchild
    }
}

const Animal1=new Animal('dog',2,'white',4)
console.log(Animal1)
console.log(Animal1.getname)
console.log(Animal1.legs)
console.log(Animal1.getanimalinfo())
console.log(Animal.chileddog())

//2.Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal{

}
const s1=new Dog('smily',3,'brown',4)
console.log(s1.getanimalinfo())
console.log(s1.getname)

class Cat extends Animal{

}
const s2=new Cat('bassy',2,'white',4)
console.log(s2.legs)
console.log(s2.getanimalinfo())