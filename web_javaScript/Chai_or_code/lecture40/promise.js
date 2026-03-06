
const promiseone=new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log('Async task is completed');
        resolve()
    },1000)
})
promiseone.then(function(){
    // console.log("promise consumed")
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log("async task 2 ")
            resolve()
    },1000)

}).then(function(){
    // console.log("Async 2 resolved");
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Srishti",email:"chai@example.com"})
    },1000)
})
promiseThree.then(function(user){
    // console.log(user);
})

// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             resolve({username:"Srishti",password: "123"})
//         }else{
//             reject('Error: Something went wrong')
//         }
//     },1000)
// })
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch(function(er){
//     console.log(er);
// }).finally(()=> console.log("the promise is either resolve orrejected"))

 const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Srishti",password: "123"})
        }else{
            reject('Error: Something went wrong')
        }
    },1000)
})
async function consumePromisefive() {
    try{
        const response=await promiseFive
        console.log(response);
    }
    catch(er){
        console.log(er);
    }
}
consumePromisefive()