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

class Dog extends Animal{
    constructor (name,age,color,legs){
        super(name,age,color,legs)
        this.Age
    }
}
getanimalinfo(){
    let Gender=this.gender<2 ?'Big' :'Child'
    let info=`${this.name} id a dog name.It have `
}