//arguments object is no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55,1));


//this keyword- no longer bound

const user = {
    name: 'Brian',
    cities: ["San Diego", "Oxnard", "Chula Vista"],
    //method we can use this instead of using functions
    printPlacesLived(){
       const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
          });

    console.log(this.name); 
    console.log(this.cities);
        this.cities.forEach((city) => {
            //this points to the object in reference to scope
            console.log(this.name + " has lived in " + city);
    });
    }
};

user.printPlacesLived();

console.log(user.printPlacesLived());

const multiplier ={
    //numbers - array of numbers
    numbers: [1,2,3],
    //muktiplyBy - single number 
    multiplyBy: 2,
    //multiply- return a new array of numbers where the numbers have been multiplied(use map)
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());