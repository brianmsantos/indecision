
//Setup constructor to take name and age default to 0 
//getDescription - Brian Santos is 36 years old. 

class Person{
    constructor(name = "Anonymous", age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        //template strings
        return `Hi, I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if (this.hasMajor()){
            description += ` Their major is ${this.major} `;
        }

        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, location){
        super(name, age);
        this.location = location;
    } 
    getGreeting(){
        let greeting = super.getGreeting();

        if(this.location) {
            greeting += `I am visiting from ${this.location}`
        }
        return greeting;
    }
    
}

// create a new subclass of person - traveler 
//add support for homeLocation
//Override getGreeting just like we overrode getDescription
//1. Hi I am Brian Santos. I'm visiting from Hawaii.
//2. Hi I am Brian Santos. 

const me = new Traveler("Brian Santos", 36, "Hawaii");
console.log(me.getGreeting());


const other = new Traveler();
console.log(other.getGreeting());
;