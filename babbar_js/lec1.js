// topic 1(a):dynamic nature of object

// let obj={
//     age:12,
//     wt:68,
//     ht:180
// };
// console.log(obj)
// obj.color="white";
// console.log(obj)

// topic 1(b) object cloning

// let src={
//     age:12,
//     wt:68,
//     ht:180
// };
// let dest =src;   point same
// 1st method

// let dest={...src}    point different
// console.log("src" ,src)
// console.log("dest" ,dest)
// src.age=90;
// console.log("src",src);
// console.log("dest" ,dest)
// 2nd method

// let src2={
//     name: "srishti",
//     rollno:345
// }
// let dest=Object.assign({},src,src2);  multiple assign
// let dest=Object.assign({},src);
// console.log("src" ,src)
// console.log("dest" ,dest)
// src.age=90;
// console.log("src",src);
// console.log("dest" ,dest)

// 3rd method

// let dest={};
// for(let key in src){
//     // console.log(key)
//     let newkey=key;
//     let newvalue=src[key];
//     // insert newkey and newvalue in dest and create a clone
//     dest[newkey]=newvalue;
// }
// console.log("src" ,src)
// console.log("dest" ,dest)
// src.age=90;
// console.log("src",src);
// console.log("dest" ,dest)

// topic 1(c):Garbage collector

