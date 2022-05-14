let inp = document.getElementById("upload");

inp.onchange = function(){
    [...this.files].forEach(file =>{
            let reader = new FileReader();
            let img = document.createElement("img");
            img.classList.add("col-md-1")
            reader.onload = (e) =>{
                img.src = e.target.result
            }
            reader.readAsDataURL(file);
            document.querySelector(".box").append(img)
        }
    );
}