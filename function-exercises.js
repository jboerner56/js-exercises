// return positive numbers
// set beginning array
const array1 = [1,2,-3,4,-5];
// define function
function positiveNumbers(newArray){
    // define new array that positive numbers will be put into
    // filter function checks to see if the value is mositive or negative in this case
    let positiveArry = array1.filter(value => value> 0);
    // return new array so it can be called by the function
    return positiveArry;
}
// call the function
positiveNumbers(array1)

// take an array and return only the even numbers

const array2 = [1,2,3,4,5,6];
function evenNumbers(newArray){
    // filter out the even numbers from the odd
    let evenArray = array2.filter(value =>  value % 2 === 0);
    // return new array so it cval be called by the function
    return evenArray;
}
evenNumbers(array2);


// square numbers

function squareNumbers(newArray){
    let squareArray = [];
    // use filter function to return the original array squared
    array2.forEach(function(num){
        let square = num ** 2;
        squareArray.push(square);
    });
    return squareArray;
}
squareNumbers(array2)

// cities 1
// return new array with only cities that have a temp lower than 70
const cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];
function coolCities(cool){
    let niceCities = [];
    console.log(cities.filter(city=> city.temperature > 70))
}
coolCities(cities)

// cities 2
// return the names of the cities

function nameCities(city){
// need to use map to return just the city names. filter returns everything that passes the test so it includes the temp values as well
    let niceCities = (cities.map(name => name.name))
    console.log(niceCities)
}
nameCities(cities)


// Good Job
// print out "Good Job, (persons name)"
var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];
function goodJob(name){
    // use for each to go thru each element and do something to them.
    let nameString = people.forEach(function(names){
        // console.log the results while adding the string before each name.
    console.log(`Good Job ${name}`)
    });
}
goodJob(people)


// 3 times
// use a function to print hello world 3 times
function call3Times(fun) {
    fun();
    fun();
    fun();
}
// can use anonymous function and console.log the string you want to repeat 3 times using the above function.
call3Times(function(){
    console.log("Hello World");
});

// n times
// same instructions as above but add the ability to print string as many times as you want

function callNTimes (times, fun){
    // counter to go through and print the string however many times is given.
    for (let i = 0; i < times; i++){
        fun();
    }
}
// use anonymous function to print the string the given number of times.
callNTimes(4, function(){
    // console.log the given string
    console.log("Hello World")
});

// string multiply
// write a function that will return the given string however many time is input

function strMultiply(str, times){
    // variable to return the string into
    let multiString = "";
    // counter to go loop through until it hits the given number of times
    for(let i = 0; i < times; i++){

    
    // add each time through loop to the end variable string
    multiString = multiString + str;
    }
    // need to return so it can be called
    return multiString;
}
// to print to the console
console.log(strMultiply('abcd', 4))
