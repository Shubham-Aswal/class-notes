// let arr = [1,2,23,4,5,6,8];

// // let arr2 = new Array(10,20,30,50,34);

// console.log(arr);
// // console.log(arr2);

// let subarr = arr.slice(2,6);

// console.log(subarr);


// //splice

// arr.splice(2,3,55,87,87,56,98);
// console.log("slice arr",arr);




let a = { name: "Navneet",
          age: 30,
          address: {
            state: "pune",
            city: " delhi"
          }
}

let b = { ... a};
b.address = {... a.address};
a.address = { abd: " hello"};


console.log(b);
console.log(a);
