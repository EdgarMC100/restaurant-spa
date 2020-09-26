

// let menuElements = document.getElementById("nav").children;
// menuElements.
// console.log(menuElements);
$(document).ready(function(){
    let icon = document.getElementById("icon");
let menu = document.getElementById("nav");
let del = document.getElementById("delete");
icon.addEventListener("click",function showMenu() {
    menu.style.display="flex";
    icon.style.display="none";
});

del.addEventListener("click",function hideMenu() {
    menu.style.display="none";
    icon.style.display="block";
});
    if($(window).width() > 800){
        $('.menu a').each(function(index,element) {

            $(this).css({
                top: '-200px',
                position: 'relative'
            });
    
            $(this).animate({
                top: '0'
            },2000 + (index * 600));
        });

        $('header .texts').css({
            opacity:0,
            marginTop:0
        });

        $('header .texts').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }
});
