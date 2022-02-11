// Plotly.newPlot("graphArea", [{x: [-6,-5,-4,-3,-2,-1,0,1, 2, 3,4,5,6], y: [216,125,64,27,8,1,0,1,8,27,64,125,216]}]);

/* var drinks = ["nonalcoholic beer", "nonalcoholic wine", 
"nonalcoholic martini", "nonalcoholic margarita", 
"ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"]

var pctOrdered = [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6]

var trace1 = {
    x: [1,3,5,8,55],
    y: [4,5,11,5,41],
    mode: "markers",
    type: "scatter"
};

var trace2 = {
    x: [22,54,10,2,8],
    y: [3,5,7,9,11],
    mode: "markers",
    type: "scatter"
}; */

/* var layout = {
    title: "Pie Chart"
    }; */
/* var data = [trace1, trace2]

Plotly.newPlot("graphArea",data);
 */

var words = ["capitalize", "these", "words"]

let caps = words.map(word=>word.toUpperCase())

console.log(caps);

var numbers =[1,2,3,4,5]

let squares = numbers.map(number=>number**2)

console.log(squares);

let doubled = numbers.map(function(num){
    return num*2;
});
console.log(doubled)

var evens = [0,2,4,6,8]
let plusFive = evens.map(function(num) {
    return num + 5
})
console.log(plusFive)

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city) {
    return city.City;
});
var cityPops = cities.map(city=>city.population)
console.log(cityNames)
console.log(cityPops)

let numArray =[1,3,5,6,18,99,104]
let evenNumbers = numArray.filter(number=>number % 2 ==0)
console.log(evenNumbers)

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

let sWords = words.filter(function(word) {
    return word.slice(0,1) == 's'
}
)

console.log(sWords)

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement - anotherElement);
console.log(sortedAge)
console.log(sortedAge.reverse())

console.log(words.slice(0,3))