$(document).ready(function(){
    
    /* when click .btnMenu */
    $('.btnMenu').on('click',function(){
        $(this).fadeOut();
        $('section').addClass('on');
        $('nav').addClass('on');
    });
    
    /* when click category menu */
    $('.nav li').on('click',function(){
        $('.btnMenu').fadeIn();
        $('section').removeClass('on');
        $('nav').removeClass('on');
    });
    
    
    /* when click button in nav */
    $('nav li').on('click',function(){
        $('.btnMenu').fadeIn();
        $('section').removeClass('on');
        $('nav').removeClass('on');
        
        var i = $(this).index();
        $('section>div').removeClass('on');
        $('section>div').eq(i).addClass('on');
    });
    
    
}); // the end















