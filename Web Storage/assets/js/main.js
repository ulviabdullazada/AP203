// var a = 50;
// localStorage.setItem("a","Mustafa")
// localStorage.setItem("b","Sarvan")
// console.log(a);
// console.log(localStorage.getItem("a"));

// let btn = document.querySelector("button");

// sessionStorage.setItem("a","Mustafa")
// sessionStorage.setItem("b","Sarvan")
// btn.addEventListener("click",function() {
//     sessionStorage.clear();
// })


// document.cookie = "username = seimour; max-age = 5"

let student = {
    name:"Sarvan",
    surname: "Taghiyev",
    age: 21
}

// localStorage.setItem("sarvan",JSON.stringify(student))


// console.log(student);
console.log(JSON.parse(localStorage.getItem("sarvan")));