//console.log("Asynchorous programing");
//sync code
// console.log("Before");
// function fun(){
//     console.log("Hiii i am here");
// }
// fun();
// console.log("After)");
//async function
console.log("Before");
function fun(){
    console.log("Hiii i am here");
}
setTimeout(fun,100);
console.log("After");
let i=0;
let id = setInterval(()=>{
console.log("I am inside interval", ++i);
if(i == 20) clearInterval(id);
}, 1000);
