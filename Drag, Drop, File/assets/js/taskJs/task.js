let img = document.getElementById('imgId');

img.ondragstart= function(e){
    e.dataTransfer.setData("imgId",this.id);

}
let boxes = document.querySelectorAll(".box");

boxes.forEach(box=>{
    box.ondragover=function(el){
        el.preventDefault();

    }
    box.ondrop= function(e){
        var img = document.getElementById(e.dataTransfer.getData('imgId'))
        box.append(img);
    }
})
