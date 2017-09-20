$(document).ready(function(){    
	$(".btnMenu").on("click",function(){ 
		$("section>article").removeClass("on"); 
		$(".box2").addClass("on"); 
		$(".btnMenu2").fadeIn(); 
	}); 
	
	$(".btnMenu2").on("click",function(){ 
		$("section>article").removeClass("on"); 
		$(".box1").addClass("on"); 
		$(".btnMenu").fadeIn(); 
	});  
	
	$("h1").on("click",function(){  
		$(this).stop().animate({"top":"-110px","left":"0px"},1800,"easeInOutBack"); 
		$("address").stop().animate({"right":"0px","bottom":"-90px"},1800,"easeInOutBack");  
		$(".top").stop().delay(2200).animate({"width":"100%"},900,function(){ 
			$(".right").stop().animate({"height":"100%"},900,function(){ 
				$(".bottom").stop().animate({"width":"100%"},900,function(){ 
					$(".left").stop().animate({"height":"100%"},900,function(){ 
						$(".box1").addClass("on"); $(".top, .left, .right, .bottom").stop().delay(2000).animate({"opacity":"0"});
						$("#gnb").stop().delay(1500).animate({"top":"-25px","opacity":"1"},1800,"easeOutBack"); 
						$(".util").stop().delay(2000).animate({"top":"-122px","opacity":"1"},1800,"easeOutBack"); 
						$(".search").stop().delay(2500).animate({"bottom":"-60px","opacity":"1"},1800,"easeOutBack"); 
						$(".footer").stop().delay(3000).animate({"bottom":"-60px","opacity":"1"},1800,"easeOutBack");  
					});  //left end
				});  // bottom end
			});  //right end 
		});  //top end 
	});  // h1 end
}); // document end