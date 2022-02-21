// var obj = {name: 'Mark'}

// var newObj = {obj, age: 33}         // Output (Without using Spread Operator): { obj: { name: 'Mark' }, age: 33 }
// console.log(newObj);

// var newObj = {...obj, age: 33}     // Output (Using Spread Operator): { name: 'Mark', age: 33 }
// console.log(newObj);


// // Spread Operator - Just used to Spread/Clone the array or object/document without mutating the original array and object.




// var params = [ "hello", true, 7 ]
// var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]
// f(1, 2, ...params) === 9




// var str = "foo"
// var chars = [ ...str ] // [ "f", "o", "o" ]



var array1 = [1, 2, "hello"];

var array2 = [3, 4, ...array1 ]


console.log(array2)

// var obj = {name: 'Mark'}