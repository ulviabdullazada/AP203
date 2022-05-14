let item = document.querySelector(".item");
let areas = document.querySelectorAll(".area");
// item.ondragstart = () =>{
//     console.log("Drag start");
// }
// item.ondragend = () => {
//     console.log("Drag end");
// }
// item.ondrag = () =>{
//     console.log("Continue");
// }
// area.ondragenter = () =>{
//     console.log("Drag enter");
// }
// area.ondragleave = () =>{
//     console.log("Drag leave");
// }
// area.ondragover = () =>{
//     console.log("Drag over");
// }
item.ondragstart = function(e){
    // console.log(e);
    // console.log("Drag start");
    // dropItem = this;
    e.dataTransfer.setData("elId",this.id)
}

areas.forEach(area => {
        area.ondrop = (e) =>{
            // area.appendChild(dropItem);
            // console.log("Drop");
            let dropItem = document.getElementById(e.dataTransfer.getData("elId"));
            area.appendChild(dropItem);
        }
        area.ondragover = (e) =>{
            e.preventDefault();
        }
    }
)

   
