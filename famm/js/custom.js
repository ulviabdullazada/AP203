
// client section owl carousel
// $(".client_owl-carousel").owlCarousel({
//     loop: true,
//     margin: 0,
//     dots: false,
//     nav: true,
//     navText: [],
//     autoplay: true,
//     autoplayHoverPause: true,
//     navText: [
//         '<i class="fa fa-angle-left" aria-hidden="true"></i>',
//         '<i class="fa fa-angle-right" aria-hidden="true"></i>'
//     ],
//     responsive: {
//         0: {
//             items: 1
//         },
//         768: {
//             items: 2
//         },
//         1000: {
//             items: 2
//         }
//     }
// });
console.clear();


/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}



let add2CartBtns = document.querySelectorAll(".option1");

checkBasket();
fillHTML();

add2CartBtns.forEach(btn=>{
    btn.addEventListener("click",function () {
       addBasket(this) 
    })
})

function addBasket(elem) {
    checkBasket();
    let basket = JSON.parse(localStorage.getItem("basket"));
    let basketItem = getProduct(elem)
    console.log();
    if (basket.find(b=>b.id == basketItem.id) == undefined) {
        basket.push(basketItem)
    }
    else{
        basket.find(b=>b.id == basketItem.id).count++;
    }
    localStorage.setItem("basket",JSON.stringify(basket))
    fillHTML();
}

function getProduct(elem) {
    return {
        id : elem.parentElement.parentElement.parentElement.dataset.id,
        name : elem.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].innerText,
        src : elem.parentElement.parentElement.nextElementSibling.children[0].src,
        count : 1,
        price : elem.parentElement.parentElement.nextElementSibling.nextElementSibling.children[1].innerText.substring(1)
    }
}

function fillHTML() {
    checkBasket();
    let basket = JSON.parse(localStorage.getItem("basket"));
    let totalCount = 0;
    shoppingCartTable.innerHTML = "";
    basket.forEach(b=>{
        let {id,name,src,count,price} = b;
        totalCount += count;
        shoppingCartTable.innerHTML += 
        `<tr data-id=${id}>
            <td class="w-25">
                <img src="${src}" width="200" height="200" alt="Sheep">
            </td>
            <td>${name}</td>
            <td>${price}$</td>
            <td>${count}</td>
            <td>${price*count}$</td>
            <td>
                <span class="btn btn-danger btn-sm">
                    <i class="fa fa-times"></i>
                </span>
            </td>
        </tr>`;
    });
    itemCount.innerText = totalCount;
}

function checkBasket() {
    if (!localStorage.getItem("basket")) {
        localStorage.setItem("basket",JSON.stringify([]))
    }
}