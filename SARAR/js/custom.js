$(document).ready(function(){       
	/* make an empty variable */
    var imgs = "";
    
    /* increase variable 'i' from 0 to 199 using for script */
    for(var i=0; i<200; i++){
        
        /* add imgs until they become 200 */
        imgs += "<img src = 'img/pic" + i + ".jpg'>"
    }
	
    /* add all those created imgs in html */
    $("section").html(imgs);

    
    /* when mouse moving */
    $("body").on("mousemove", function(e){
        
        /* save current screen width */
        var wid = $(window).width();
        
        /* save where mouse be at */
        var posX = e.pageX;
        
        /* save persentage devided by 200 (number of imgs) */
        var percent = Math.floor((posX/wid)*200);
        
        /* output */
        /*$("h3").text(percent);*/
        
        /* hide all the imgs */
        $("section>img").hide();
        
        /* show the only applicable img of mouse location */
        $("section>img").eq(percent).show();
    });
    
    
}); // the end















