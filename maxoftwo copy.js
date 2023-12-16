// create few variables that store string, number

const instrument = "piano";
let numberOfInstruments = 4;
numberOfInstruments = 5;
const isBandReady = false;

// Create an array if string called "codingLanguage" include 4 coding language of your choice'

const codingLanguage = ["JavaScript", "Python", "Java", "C++"];

// Access the 3rd elements of codingLanguage array
console.log(codingLanguage[2]);

//Copy the array using one of the array methods, and call it "codingLanguage2"

const codingLanguage2 = codingLanguage.slice(0);
console.log(codingLanguage2);

// Add another coding language to codingLanguage2 array
codingLanguage2.push("C");


let instruments = ["piano", "trumpet", "xylophone", "flute", "cello"];

// Use build in array function to remove "cello" from the instrument array
instruments.pop();

// same as above to remove "piano"
instruments.shift();

// same as above to add "guitar" to the front of the instruments array
instruments.unshift("guitar");

//same as above to replace "xylophone" to "glockensiel"
instruments.splice(2, 1, "glockensiel");
console.log(instruments);

//Discuss if-else statement
let num = 11;

// if num is even number, print num. otherwise print "num is not an even number"
if (num % 2 === 0) {
    console.log(num);
} else {
    console.log("num is not an even number.");
}

let score = 83;
// using if-else statement determine the grade of the above score
// If the score <= 10, print failed
if (score <= 10) {
    console.log("failed");
} else if(score > 10 && score <= 40) {
    console.log("The grade is C.");
} else if(score > 40 && score <= 70)


let price = [ 10, 5, 8];

// using for loop, calculate the total price from "price" array above
// let total = 0
// for (let i = 0; i < price.length; i++) {
//     total += price;
// }

for (const item of price) {
    total += price
}
// using the total price , find the avarage of price
const averagePrice = total / price.length;
console.log(total);
console.log(averagePrice);


let colors = ["red", "yellow", "green", "blue"];
// print appple if the colors is red, print melon if green, 
for (const color in colors) {
    if(color === "red") {
        console.log("apple");
    } else if (color === "yellow") {
        console.log("banana");
    }
}

Dicuss SDLC:
planning - analyze/ understand what the program is meant to do, desinating roles of who will do what
Analysis of Requirement- does client need certain platform, what data we need to access to 








// const meals = ["broccoli", "apple", "chilli", "pear"];

// // meals.unshift("tacos");
// // console.log(meals);

// const mealsSubset = meals.slice(1,3);
// console.log(mealsSubset);
// console.log(meals);

// const perfectTemp = 125;
// let teaTemp = 130;
// // if (teaTemp > perfectTemp) {
// //     teaTemp = teaTemp - 1 // add a chip of ice
// // }

// while (teaTemp > perfectTemp) {
//     teaTemp -= 1;
//     console.log("Tea Tempature is now", teaTemp);
// }
// console.log("You got perfect tempature now", teaTemp);

// const students = ['Alice', 'Bob', 'Charlie', 'Diana'];

// let i = 0; // i stands for index
// while (i < students.length) {
//   console.log(students[i]);

//   if (students[i] === 'Bob') {
//     console.log('Hi Bob!');
//     break; // we found Bob, no need to loop any further!
//   }
//   i += 1;
// }

const meals = ['artichokes', 'bbq', 'chili', 'donuts'];

// let i = 0;
// while (i < meals.length) {
//   console.log(meals[i]);
//   i += 1;
// }

// for (i = 0; i <meals.length; i++) {
//     console.log([i], meals[i]);
// }
// for ( const meal of meals){
//     console.log(meal);
// }

// const grid = [
//     ['A', 'B', 'C'],
//     ['D', 'E', 'F'],
//     ['G', 'H', 'I'],
//   ];
  
//   console.log(grid[0]); // ['A', 'B', 'C']
//   console.log(grid[0][1]); // 'B'
//   console.log(grid[1][0]); // 'D'
  
//   grid[2][2] = 'J'; // changes 'I' to 'J'
//   console.log(grid);

//   for (const row of grid) {
//     for (const letter of row) {
//       console.log(letter);
//     }
//   }