//es5 function syntax
const square = function(x){
    return x * x;
};

//arrow function syntax 
// const squareArrow = (x) => {
//     return x * x;
// };

//expression syntax
const squareArrow = (x) => x * x;

console.log(square(8));

console.log(squareArrow(4));

//getFirstName

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// };


const getFirstName = (fullName) => fullName.split(" ")[0]

console.log(getFirstName("mike smith"));