// console.log("First Execution")
// setTimeout(()=>console.log("Second Execution"), 2000);
// console.log("Third Execution");

// callbacks
// function foo(callback){
//     setTimeout(()=> {
//         console.log("foo called up..");
//         callback("success")
//     }, 5000)
    
// }

//promises
function foo(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("foo called up..");
            resolve("success")
        }, 5000)
    })   
}

console.log('starting....');



// promises
// foo()
// .then(res=> console.log(res))
// .catch(err=> console.log(err))
async function test(){
    let result = await foo();
    console.log(result)    
}

test(); 



// fetch('http://localhost:8000')
// .then()


console.log('finishing....');


// let result = foo();
// console.log(result);

//callback
// foo((result)=>console.log(result))