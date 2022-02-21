let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("resolved!"), 2000);
})

console.log(promise);                       // Shows Pending.



setTimeout(()=>console.log(promise)         //Shows resolved.
, 5000);

// // let promise = new Promise(function(resolve, reject) {
// //     setTimeout(() => resolve("done!"), 1000);
// //   });
  
// //   // resolve runs the first function in .then
// //   promise.then(
// //     result => alert(result), // shows "done!" after 1 second
// //     error => alert(error) // doesn't run
// //   );




// function delay(ms) {
//   // your code
// }

// delay(3000).then(() => alert('runs after 3 seconds'));


// let myPromise = new Promise(function(resolve, reject) {
//   let randomObject = {name: "Harshit", status: 200, response: "Got the response"}
  
//     setTimeout(() => {if (randomObject.status == 200) {
//         resolve(randomObject.response);
//       } else {
//        reject("Response not Found");
//       }
//     }, 3000)
// });

// myPromise.then(result => console.log(result), error => console.log(error))


// setTimeout(() => console.log("Computer"), 3000)






// I want to custom implement the setTimeout() function using promises.i.e. instead of providing the callback, 
// we will take promise from that function and then after the fulfillment of that promise i.e. after getting the 
// delay as required we will write the stuff which needs a delay.

var delay = (time)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, time)
  });
};

delay(6000).then(()=>console.log("result"))