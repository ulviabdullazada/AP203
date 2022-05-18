// $(".container .box").css("background-color","blue");

// $(".btn").eq(0).click(function () {
//     let color = $("input[type='color']").val();
//     $(".container .box").css({"background-color":color,borderRadius:"10px"});
// })

// $(".modal-container,.modal-container .box").hide();

// $("[data-type='modal']").click(function () {
//     let elem = $(this).attr("data-target");
//     $(elem).show("slow");
//     $(elem).children(".box").delay(300).slideDown("slow");
// })
// $(".modal-container").click(function () {
//     $(this).hide("slow");
// })

// $(".notifications").hide();

// $(".btn").click(function () {
//     $(".notifications").toggle(400);
//     // $(".notifications").slideToggle(400);
//     // $(".notifications").fadeToggle(400);
//     // $(".notifications").css("right","5%")
//     // $(".notifications").animate({width:"15%",opacity:1},500)
//     // SlideXToggle($(".notifications"),1000);
//     $(".line").animate({"width":"100%"},2000)
//     setTimeout(() => {
//         $(".notifications").hide(400);
//     }, 2000);
// })
// $(".notifications").click(function(){
//     // $(".notifications").slideUp(400);
//     // $(".notifications").fadeOut(400);
//     // $(".notifications").animate({width:"0",opacity:0,right:"20%"},500)
// })
// function SlideXToggle(elem,sec=0) {
//     if (elem.css("width") == "0px") {
//         $(".notifications").css("right","5%")
//         $(".notifications").animate({width:"15%",opacity:1},sec)
//     }
//     else{
//         $(".notifications").animate({width:"0",opacity:0,right:"20%"},sec)
//     }
// }
// setTimeout(() => {
//     console.log("timeout");
// }, 500);
// setInterval(showAlert, 500);
// $(".fade")
// function showAlert() {
//     console.log("Salam");
// }

// $(".btn").click(function(){
//     $("ul").append("<li>"+$("input").val()+"</li>")
//     $("input").val('');
// })

// $("ul").on("click","li",function(){
//     $(this).remove();
// })

// $("li").click(function(){
//     $(this).remove();
// })
$("input").on("keyup keypress",function () {
    console.log("a");
})
