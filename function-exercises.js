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