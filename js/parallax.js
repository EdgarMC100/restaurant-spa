$(document).ready(function () {
    $(window).scroll(function () {
        var windowWidth = $(window).width();
        if (windowWidth > 800) {
            var scroll = $(window).scrollTop();
            var  positionY = scroll / 2;
            
            $('header .texts').css({
                'transform': 'translate(0px,'+ positionY + '%)'
            });
            // alert(positionY);
            $('.about article').css({
                'transform': 'translate(0px,-'+ scroll / 4 + '%)'
            });
        }
    });
    //Detecting when window is resized

    $(window).resize(function () {
        var windowWidth = $(window).width();
        if(windowWidth < 800){
            $('.about .article').css({
                'transform': 'translate(0px,0px)'
            });
        }
    });
});