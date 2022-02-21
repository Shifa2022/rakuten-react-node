// //es5
// function f (x, y, z) {
//     if (y === undefined)
//         y = 0;
//     if (z === undefined)
//         z = 0;
//     return x + y + z;
// };
// f(1) === 1;
// f(1,2,3) === 6;


// //es6
// function f (x, y = 0, z = 0) {              // Passing default values for y and z as the arguments itself.
//     return x + y + z;
// }
// f(1) === 1;                                 // Default values are used for y (i.e. 0) and z (i.e. 0) when they are not passed as arguments.
// f(1,2,3) === 6;






function add(a, b=2, c=3){
    console.log(a+b+c)
}
add(1, 3)


// function add(a, b, c=4){
//     console.log(a+b+c)
// }
// add(1, 3)