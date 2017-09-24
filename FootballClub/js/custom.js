$(function(){
    // move to Top when page loading
    $("body, html").stop().animate({"scrollTop":0},1500,"swing");
    
    $(window).on("scroll", function(){
        // save Scrolling Distance for current screen
        var scroll = $(this).scrollTop();
        
        // output var 'scroll' on 'h1'
        /*$("h1").text(scroll);*/
        
       // select each article, add the 'Scroll Distance' to 'TranslateZ' for each article
        /*
        $("section>article").eq(0).css({"transform":"translateZ(" + (0+scroll) + "px)"});
        $("section>article").eq(1).css({"transform":"translateZ(" + (-5000+scroll) + "px)"});
        $("section>article").eq(2).css({"transform":"translateZ(" + (-10000+scroll) + "px)"});
        $("section>article").eq(3).css({"transform":"translateZ(" + (-15000+scroll) + "px)"});
        $("section>article").eq(4).css({"transform":"translateZ(" + (-20000+scroll) + "px)"});
        */
        
        for(var i=0; i<5; i++){
            $("section>article").eq(i).css({"transform":"translateZ(" + ((i*-5000)+scroll) + "px)"});
        
         /*
    if(scroll>=0 && scroll<5000){
        $(".scrollNavi li").removeClass();
        $(".scrollNavi li").eq(0).addClass("on");
        $("article").removeClass();
        $("article").eq(0).addClass("on");
    }
    if(scroll>=5000 && scroll<10000){
        $(".scrollNavi li").removeClass();
        $(".scrollNavi li").eq(1).addClass("on");
        $("article").removeClass();
        $("article").eq(1).addClass("on");
    }
    if(scroll>=10000 && scroll<15000){
        $(".scrollNavi li").removeClass();
        $(".scrollNavi li").eq(2).addClass("on");
        $("article").removeClass();
        $("article").eq(2).addClass("on");
    }
    if(scroll>=15000 && scroll<20000){
        $(".scrollNavi li").removeClass();
        $(".scrollNavi li").eq(3).addClass("on");
        $("article").removeClass();
        $("article").eq(3).addClass("on");
    }
    if(scroll>=20000 && scroll<25000){
        $(".scrollNavi li").removeClass();
        $(".scrollNavi li").eq(4).addClass("on");
        $("article").removeClass();
        $("article").eq(4).addClass("on");
    }
    */
        
    /*  for(i=0; i<5; i++){ for문 중복 */ // 조금 일찍 활성화위해 -2500
            if(scroll>=(i*5000-2500) && scroll<((i+1)*5000-2500)){
                $(".scrollNavi li").removeClass();
                $(".scrollNavi li").eq(i).addClass("on");
                $("article").removeClass();
                $("article").eq(i).addClass("on");
            }; //if
        }; // for   
    }); // $(window) scroll
        

    
    /* when click Scroll Navigation */
    $(".scrollNavi li").on("click", function(){
        var li = $(this).index(); //get index # of selected 'li'
        $("body,html").stop().animate({"scrollTop":li*5000},1500,"swing");
    });
    
    
    
    /* moving contents as following by where mouse be at  */
    $("body").on("mousemove", function(e){
        var posX = e.pageX/100;
        var posY = e.pageY/150;
        
        $(".obj11").css({"left":-270-posX, "bottom":-100-posY});
        $(".obj12").css({"right":-593+posX, "top":-85+posY});
        $(".obj13").css({"left":-100+posX, "bottom":20+posY});
        
        $(".obj21").css({"right":-710-posX, "bottom":-420-posY});
        $(".obj22").css({"right":-50+posX, "bottom":-100+posY});
        
        $(".obj31").css({"right":110-posX, "bottom":70-posY});
        $(".obj32").css({"left":100-posX, "bottom":-160+posY});
        
        $(".obj41").css({"left":350+posX, "bottom":-150-posY});
        $(".obj42").css({"right":167+posX, "top":-255-posY});
        $(".obj43").css({"right":-100+posX, "bottom":-120+posY});
        
        $(".obj51").css({"left":-100-posX, "bottom":-290-posY});
        $(".obj52").css({"right":30+posX, "top":170-posY});
        $(".obj53").css({"left":-30+posX, "bottom":0-posY});
        
    });
    
    
    
}); //the end















