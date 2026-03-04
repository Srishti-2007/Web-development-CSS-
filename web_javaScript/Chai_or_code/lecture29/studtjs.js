// const coding=["js","hm","kl"]
// coding.forEach((item)=> {
// console.log(item)
// })

// const mynums=[1,2,3,4,5]
// const newnum=mynums.filter((num)=>num>4)   callback function
// console.log(newnum)
// const newnum=mynums.filter((num)=> {
//     return num>4
// })

// const newnum=mynums.map((num)=>num+10)
// console.log(newnum)

// const newnum=mynums
//                   .map((num)=>num*10)
//                   .map((num)=>num+1)
//                   .filter((num)=>num>=20)
            
//   console.log(newnum);

const mynums=[1,2,3]
// const total=mynums.reduce(function(ace,curr){
//     return ace+curr
// },0)
const total=mynums.reduce((ace,curr)=> ace+curr,0)
console.log(total)