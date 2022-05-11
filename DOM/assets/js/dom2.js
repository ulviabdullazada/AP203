let inp = document.getElementById("name");
let btn = document.querySelector("#add");
let ul = document.getElementById("list");
let deleteBtn = document.querySelectorAll(".la-times");

btn.onclick = () => {
    let li = document.createElement("li");
    let i = document.createElement("i");
    i.classList.add("las","la-times");
    li.innerText = inp.value;
    li.append(i);
    inp.value = "";
    ul.append(li);
    i.onclick = function() {
        deleteLi(this);
        // this.parentElement.remove();
    }
    // ul.style.backgroundColor = "red";
    // ul.style.marginLeft = "100px";
    // ul.style = "margin-left:100px";
    deleteBtn = document.querySelectorAll(".la-times");
}


deleteBtn.forEach(btnI=>{
    
    btnI.addEventListener("click",function () {
        deleteLi(this)
    })
    deleteBtn = document.querySelectorAll(".la-times");
    // btn.onclick = function () {
    //     console.log(this);
    // }
});
function deleteLi(elem) {
    elem.parentElement.remove()
}
// show.addEventListener("click",function () {
//     deleteBtn.forEach(btn=>{
//         console.log(btn);
//     });
// })