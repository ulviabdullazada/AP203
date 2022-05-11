let inp = document.querySelector("input");
let btn = document.querySelector("button");
// inp.onclick = () =>{
//     console.log("Click event");
// }
// inp.onfocus = () =>{
//     console.log("Focus event");
// }
// inp.onchange = ()=>{
//     console.log("Change event");
// }

// inp.onkeyup = ()=>{
//     // alert();
//     console.log("Keyup");
// }

// inp.onkeydown = ()=>{
//     console.log("Keydown")
// }

// inp.onkeypress = ()=>{
//     console.log("Keypress")
// }

// inp.addEventListener("change",function () {
//     for (let i = 0; i < this.value.length; i++) {
//         if (!isNaN(this.value[i])) {
//             this.nextElementSibling.classList.add("d-block")
//             return;
//         }
//     }
//     this.nextElementSibling.classList.remove("d-block")
// });
// inp.addEventListener("keyup",function () {
//     inputVal(this)
// });
// inp.addEventListener("keypress",function () {
//     inputVal(this)
// });
// btn.addEventListener("click",function (ev) {
//     ev.preventDefault();
//     inputVal(inp)
// });

// function inputVal(elem){
//     for (let i = 0; i < elem.value.length; i++) {
//         if (!isNaN(elem.value[i])) {
//             elem.nextElementSibling.classList.add("d-block")
//             return;
//         }
//     }
//     elem.nextElementSibling.classList.remove("d-block")
// }

let area = document.querySelector(".area")
let ball = document.querySelector(".ball")

// area.onmouseup = ()=> {
//     console.log("Mouse Up");
// }

// area.onmousedown = ()=> {
//     console.log("Mouse Down");
// }

// area.onmouseover = ()=> {
//     console.log("Mouse Over");
// }
// area.onmouseleave = ()=> {
//     console.log("Mouse Leave");
// }
// area.onmousemove = ()=> {
//     console.log(window.pageYOffset);
// }
// window.addEventListener("scroll",function(){
//     if (this.pageYOffset > 90) nav.classList.replace("bg-light","bg-dark")
//     else nav.classList.replace("bg-dark","bg-light")
// })

// let ballX = 0;
window.addEventListener("keyup",function(ev){
    if (ev.key == "ArrowUp") {
    }
    if (ev.key == "ArrowRight") {
        // ballX += 5;
        ball.style.left = Number(parseInt(ball.style.left)) + 20 + "px"
    }
})


console.log(parseInt("15a1"));