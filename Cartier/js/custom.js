$(function(){  		
    // 마우스 오버 시
    $('article').on('mouseenter', function(){
        
        /* 해당영역에 마우스 오버시 자동으로 동영상 재생되도록 만들기 */
        // 변수 vid에 video 파일 참조
        var vid = $(this).find('video').get(0);
        /*
        $('video').get(0); 첫번째 video를 가져온다.
        $('video').get(1); 두번째 video를 가져온다.
        $('video').get(2); 세번째 video를 가져온다.
        여기서는 비디오가 한개뿐
        */
        // 동영상의 재생 위치를 처음(0)으로 설정   // 만약 vid.currentTime=8; 동영상의 재생위치 8초로 설정, 재생이 지정된 위치로 점프됨 
        vid.currentTime=0;
        // 동영상을 재생
        vid.play();
        
        $(this).stop().animate({'width':'35%'},1000, function(){
            // article이 넓어진 바로 뒤에 아래 구문이 실행됩니다.
            $(this).find('h3').stop().animate({'right':'10px'},400);
            $(this).find('p').stop().animate({'right':'10px'},800);
        });
        $(this).find('video').stop().animate({'opacity':'0.9'},1200);
        
    });
    
    
    // 마우스 아웃 시
    $('article').on('mouseleave', function(){
        
        // 변수 vid에 video 파일 참조
        var vid = $(this).find('video').get(0);
        // 동영상을 정지
        vid.pause();
        
        $(this).stop().animate({'width':'12%'},700);
        $(this).find('video').stop().animate({'opacity':'0'},2000);
        $(this).find('h3').stop().animate({'right':'-310px'},200);
        $(this).find('p').stop().animate({'right':'-310px'},500);
    });

});















