// //es5
// function f (x, y) {
//     // a is array of arguments but first 2 arguments are sliced
//     var a = Array.prototype.slice.call(arguments, 1,4);               // .call() method is used to set the arguments object as the 'this' value of .slice() which would act like the array of arguments.
    
//     console.log(a);
//     return (x + y) * a.length;
// };
// const result = f(1, 2, "hello", true, 7, 8, 9, "hjjh");

// console.log(result);

// //es6
// function fun (x, y, ...a) {     
//      // (...a) is a Rest Parameter - The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.             
//      // A function definition can have only one ...restParam.
//      // The rest parameter must be the last parameter in the function definition.
//     return (x + y) * a.length
// }
// console.log(fun(1, 2, "hello", true, 7, 8))

// // const add = (x,y) => x + y;
// // const add = (x,y,z) => x + y + z;

// const add = (...x) => {
//     let total = 0;
//     x.forEach(value=> total+=value);
//     return total;
// }
// console.log(add(1,2,3));


// // const addn = (x,y)=>x+y;
// // const addn = (x,y, z)=>x+y;
// // const addn = (x,y, z, t)=>x+y;


// // console.log(addn(1, 2, 3, 4)); //Rest Parameter gives the solution to this problem.

// // const addin = (...x)=>{
// //     let total=0;
// //     x.forEach(value=>total+=value)
// //     return value;
// // }

// // console.log(addin(1, 2, 3, 4))


// const addition = (x,y)=>x+y;
// const addition2 = (x,y,z)=>x+y+z;
// const addition3 = (x,y,z, q , w ,e )=> x+y+z+ q+ w +e ;

// console.log(addition(1,2));
// console.log(addition2(1,2,3));
// console.log(addition(1, 2, 3, 4, 5, 6));


// const sum = (...x) => {      //  ...args is a rest paramter.
//     let total = 0;
//     x.forEach(e=>total+=e)
//     return total;
// }  

// console.log(sum(1, 2, 3, 4, 5, 6, 7))







// Rest Parameter - The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.

function print(a, b, ...restParams){  
   console.log(a, b, ...restParams);
}

print(1,2, 3, 4, 5, 6)
// add(1, 2, 3, 4)

function sum(...values){
  let total =0
  values.forEach(value=>total+=value)
  return total;
}
console.log(sum(1,2,3,4))

