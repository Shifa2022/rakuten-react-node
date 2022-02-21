

// //es6
// var odds = [1,3,5,7,9]
// var twos = []

// evens = odds.map(e => e+1);
// pairs = evens.map(e => {return {even: e, odd: e+1}})   // If body of the function returns a javascript object then it shpuld be enclosed wihin simple brackets () because javascript will confuse the curly braces with the return statement and will give undefined results.
// nums = evens.map((e,i) => {return (e+i)})              // Othrewise, if there is only one line of the body then write it as it is without any brackets. ( ex: e+1). This is similar to    return e+i;

// nums.forEach(e=>{
//     if(e%2===0)
//         twos.push(e)
// })

// console.log(pairs)
// console.log(nums)
// console.log(twos)



var odds = [1,3,5,7,9]

var evens = odds.map(e=>e+1)

const divisibleBy5 = odds.filter(function(e) {
    return e%5==0;
})

console.log(divisibleBy5)