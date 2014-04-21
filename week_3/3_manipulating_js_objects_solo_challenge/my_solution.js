// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable the value of a JavaScript Object object with no properties.
// pseudocode
// call the variable adam
// set variable adam to have no properties

2. Give adam a name property with the value "Adam".
// pseudocode
// set variable adam to have a name property of "Adam"

3. Add a spouse property to terah and assign it the value of adam.
// pseudocode
// set variable terah to have a spouse property of adam

4. Change the value of the terah weight property to 125.
// pseudocode
// set variable terah to have a weight property of 125

5. Remove the eyeColor property from terah.
// pseudocode
// remove proerty of eyeColor from object terah

6. Add a spouse property to adam and assign it the value of terah.
// pseudocode
// set variable adam to have a spouse property of terah 

7. Add a children property to terah and and use object literal notation to assign this variable the value of a JavaScript Object object with no properties
// pseudocode
// add children property to terah and set it to nothing

8. Add a carson property to the value of the terah children property and assign it the value of an object with the property name with a value of "Carson".
// pseudocode
// add value of "Carson" to children property of object terah

9. Add a carter property to the value of the terah children property and assign it the value of an object with the property name with a value of "Carter".
// pseudocode
// add value of "Carter" to children property of object terah

10. Add a colton property to the value of the terah children property and assign it the value of an object with the property name with a value of "Colton".
// pseudocode
// add value of "Colton" to children property of object terah

11. Add a children property to adam and assign it the value of terah children.
// pseudocode
// add children property to object adam
// set children property to the value of terah children for object adam

*/

// __________________________________________
// Write your code below.
var adam = {
  name: "Adam",
  spouse: terah,
  children: terah.children
};

var terah = {
  spouse: adam,
  weight: 125,
  eyeColor: undefined,
  children: {carson: {name: "Carson"}, carter: {name: "Carter"}, colton: {name: "Colton"}}
};

adam.spouse = terah;
adam.children = terah.children;



// __________________________________________
// Reflection: Use the reflection guidelines
// 
// Like the last challenge, I feel really enjoyed this exercise. In this activity, I was able to better understand the point of pseudocode (and I think I definitely wrote some wrong). After running the tests, I was able to see why my thought process was off and how I could correct it. I ended up correcting in the code, but not the pseudocode, I feel like this is a more honest reflection of my work. All things considering, I think this was a perfectly appropriate challenge, that really got me thinking without having me completely stumped. I'm looking forward to more challenges like this one in the future!
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)