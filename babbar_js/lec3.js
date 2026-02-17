// define class
class human {
    // # lagane se vo private mark ho jata hai
    // properties
     age;   // explicitly public ho jate hai
    #wt=80;
    ht=120;
// we initialize private member in constructo but cannot acces in outside class
    constructor(nage,nht,nwt){
        this.age=nage;
        this.ht=nht;
        this.#wt=nwt
    }
    // behaviour
    walking(){
        console.log("i am walking",this.#wt)
    }
    #running(){
        console.log("i am running")
    }
    get fetchw() {            // getter
        return this.#wt;
    }
    set modiw(val){              //setter
        this.#wt=val;
    }
}
// let obj=new human();
let obj=new human(23,78,90);
// console.log(obj.ht)
// console.log(obj.fetchw)
// console.log(obj.#wt)
// obj.walking()

// part b: default parameter
// function sayname(myname="srishti"){
//     console.log("my name is ", myname);
// }
// sayname();
// sayname("love")
// function sayname(myname=["hii",9,"kl"]){  array and obj is also possible
//     console.log("my name is ", myname);
// }
// sayname()