// #### 1. Array Destructuring

// * Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). Use array destructuring assignment to complete this task.

let fruit;
let vegetable;
let food;

array_to_give = ["banana", "cucumber", "bread", "cakes", "pizza"];
const [item0, item1, ...item_rest] = array_to_give;

fruit = item0;
vegetable = item1;
food = item_rest;

console.log("fruit is: " + fruit);
console.log("vegetable is: " + vegetable);
console.log("food is: " + food);


// #### 2.Object Destructuring
// * Create an object which contains key pair values of names and the respective halloween costume e.g. `fran: "witch"`.   Assign each key pair value to corresponding variable. Print out the object values. 

const halloween = {
    fran: "witch",
    carl: "zombie",
    michela: "robot",
  };

  const {fran} = halloween;
  const {carl} = halloween;
  const {michela} = halloween;
  console.log("the costumes are: " + fran +", "+ carl + "and " + michela);

//   #### 3. Parameters: Object Destructuring 

// * Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc. 
// * Then, create a function to display all of the band/musician's data. 
// * Example
// ```javascript
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.
// ```


const band_info = {
    bandName: "Muse",
    greatest_hit: "Supermassive black hole",
    nationality: "English",
    genre: "pop-rock"

}
let {bandName, greatest_hit, nationality, genre} = band_info;

function give_band_info(obj){
    return `${bandName} is an ${nationality} ${genre} band. Their greatest hit is ${greatest_hit}.`
}

console.log(give_band_info(band_info));