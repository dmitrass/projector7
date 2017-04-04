/*
$(".has_a_sub>a").click(function(){
  $(this).next().slideToggle(300);
})
*/

var win_width = $(window).width();
/* вводим переменную */
console.log($(window).width());
/* выводим переменную в лог */
if(win_width<980){
  console.log("Этот экран меньше 980");
  $(".has_a_sub>a").click(function(event){
    event.preventDefault();
    $(this).next().slideToggle(300);
});
}
else {
  console.log("Этот экран больше 980");
}
$(".mobile_menu").click(function () {
  $(".menu").slideDown(300);
  $(".mobile_menu_back").fadeIn(300);
});

$(".mobile_menu_back, .close").click(function () {
  $(".menu").slideUp(300);
  $(".sub_menu").slideUp(300);
  $(".mobile_menu_back").fadeOut(300);

});
$(".search>.fa-search").click(function () {
  $(".search_block").fadeToggle(300);
});
