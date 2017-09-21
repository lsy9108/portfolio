$(function(){  			


	/* 1초 마다 현재 시간값 재설정 */
	    var timer = setInterval(function(){
        //save data
        var now = new Date();   // user's computer time 
        var hr = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();
            
       //if HOUR only 1-digit number, put '0' in front
            if(hr>=10){
                hNum = hr;
            }else{
                hNum = "0"+hr;
            }
        //if MINUTE only 1-digit number, put '0' in front
            if(min>=10){
                mNum = min;
            }else{
                mNum = "0"+min;
            }
        //if SECOND only 1-digit number, put '0' in frond
            if(sec>=10){
                mSec = sec;
            }else{
                mSec = "0"+sec;
            }
            
        //output current time
        $('p span').eq(0).text(hr);
        $('p span').eq(1).text(min);
        $('p span').eq(2).text(sec);
        
    },1000); // repeat per 1s
	
    
    /* 시간에 따라 화면 테마 변경 */
    var now = new Date();
    var hr = now.getHours();
    
    if(hr >= 5 && hr < 11){             // if TIME >= 5, TIME < 11
        $('#wrap').removeClass();
        $('#wrap').addClass('morning');
        $('nav li').removeClass();
        $('nav li').eq(0).addClass('on');
    
    } else if(hr >= 11 && hr < 16){     // if TIME >= 11, TIME < 16    
        $('#wrap').removeClass();
        $('#wrap').addClass('afternoon');
        $('nav li').removeClass();
        $('nav li').eq(1).addClass('on');
      
    } else if(hr >= 16 && hr < 20){     // if TIME >= 16, TIME < 20  
        $('#wrap').removeClass();
        $('#wrap').addClass('evening');
        $('nav li').removeClass();
        $('nav li').eq(2).addClass('on');
        
    } else if(hr >= 20 && hr < 25){      // if TIME >= 20, TIME < 5
        $('#wrap').removeClass();
        $('#wrap').addClass('night');
        $('nav li').removeClass();
        $('nav li').eq(3).addClass('on');
    }
    
    /* nav 버튼 클릭시 화면 테마 변경 */
    $('nav li').on('click',function(){
    //save text to apply as classname of #wrap
        var className = $(this).children('a').text(); 
        $('nav li').removeClass();
        $(this).addClass('on');
        $('#wrap').removeClass();
    //apply css style on #wrap    
        $('#wrap').addClass(className);
    });
    
}); // function 끝








