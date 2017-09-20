$(function(){
	$('.box').on('mouseover',function(){
        var vid = $(this).children('video').get(0);
        vid.currentTime=0;
        vid.play();
    });
    
    
    $('.box').on('mouseout',function(){
        var vid = $(this).children('video').get(0); 
        vid.pause();
    });

});















