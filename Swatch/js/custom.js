$(function(){
    //처음실행되는 페이지의 p와 span을 보이게 on클래스 로드(데이터전송, 부하)
    $(window).on('load',function(){
        $('section').eq(0).addClass('on');
        $('section').eq(0).siblings().removeClass('on');
    });
    
    
    
    
    //변수 ht에 브라우저의 높이값을 저장
    var ht = $(window).height();
    //브라우저의 높이값을 section의 높이값으로 지정
    $('section').height(ht);
    
    $(window).on('resize',function(){
        var ht = $(window).height();
        //브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
        $('section').height(ht);
    });
    
    
    
    //각각의 section에서 마우스를 움직이면
    $('section').on('mousemove',function(e){
        //변수 posX에 마우스 커서의 x축 위치 저장
        var posX = e.pageX;
        //변수 posY에 마우스 커서의 y축 위치 저장
        var posY = e.pageY;
        
        //첫번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
        //임의의 숫자로 나눔. 나누는 숫자가 작을 수록 많이 움직임
        //빼주면 마우스와 반대방향, 더해주면 같은방향으로 움직임
        $('.p11').css({'right':20-(posX/30), 'bottom':20-(posY/30) });
        $('.p12').css({'right':140+(posX/20), 'bottom':-40+(posY/20) });
        $('.p13').css({'right':60+(posX/20), 'top':180+(posY/20) });
        
        //두 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
        $('.p21').css({'right':-180-(posX/30), 'bottom':-480-(posY/30) });
        $('.p22').css({'right':130+(posX/50), 'bottom':-40+(posY/50) });
        
        //세 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
        $('.p31').css({'right':280-(posX/30), 'bottom':30-(posY/30) });
        $('.p32').css({'right':110+(posX/20), 'bottom':-270+(posY/20) });
        $('.p33').css({'right':-70+(posX/20), 'bottom':-130+(posY/20) });
        
        //네 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
        $('.p41').css({'right':20-(posX/30), 'bottom':-120-(posY/30) });
        $('.p42').css({'right':0+(posX/20), 'bottom':-180+(posY/20) });
    });

	//메뉴 버튼 클릭시
    $('#menu li').on('click',function(e){
        e.preventDefault();
        //변수 ht에 브라우저의 높이값 저장
        var ht = $(window).height();
        //변수 i에 현재 클릭한 li의 순서값을 저장
        var i = $(this).index();
        // index() - 특정 태그가 몇번째 해당하는 요소인지 알아내는 방법. 0번부터 시작
        
        //브라우저의 높이값*박스의 순서값은 현재 박스의 스크롤 위치값과 동일
        var nowTop = i*ht;
        
        //해당 스크롤 위치값으로 문서를 이동
        $('html,body').stop().animate({'scrollTop':nowTop},1400); //1.4초
        /*화면완료후 글자등장효과 with style02.css*/
        $('section').eq(i).addClass('on');
        $('section').eq(i).siblings().removeClass('on');
        
    }); //$('#menu li').on('click',function(e){ 끝
    
    
    
    /*화면이 스크롤될 때마다 현재 영역에 해당하는 메뉴 활성화하기 - .on클래스 추가*/
    $(window).on('scroll',function(){
        //변수 ht에 현재 브라우저의 높이값 저장
        var ht = $(window).height();
        //변수 scroll에 현재 문서가 스크롤된 거리 저장
        var scroll = $(window).scrollTop(); //scrollTop() - 현재스크롤된거리값
        
        for(var i=0; i<5; i++){
            if(scroll >= ht*i && scroll < ht*(i+1)){
                $('#menu li').removeClass();
                $('#menu li').eq(i).addClass('on');
            };
        } //for 끝
        
        // section위에서 마우스 휠을 움직이면
        $('section').on('mousewheel', function(event,delta){
            //글자딜레이등장효과위한 인덱스 i 저장(with style02.css)
            var i = $(this).index();
            
            //마우스 휠을 올렸을때
            if(delta > 0){  
                //변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top 위치 저장
                var prev = $(this).prev().offset().top;
                //문서 전체를 prev에 저장된 위치로 이동
                $('html,body').stop().animate({'scrollTop':prev},1400,'easeOutBounce');
                //마우스휠사용할때에도 글자딜레이등장효과추가(with style02.css)
                //현재화면인덱스(i)-1 이전페이지 인덱스번호계산
                $('section').eq(i-1).addClass('on');
                $('section').eq(i-1).siblings().removeClass('on');
            
            //마우스 휠을 내렸을때
            } else if(delta < 0){   
                //변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top 위치 저장
                var next = $(this).next().offset().top;
                //문서 전체를 prev에 저장된 위치로 이동
                $('html,body').stop().animate({'scrollTop':next},1400,'easeOutBounce');
                //마우스휠사용할때에도 글자딜레이등장효과추가(with style02.css)
                //현재화면인덱스(i)+1 다음페이지 인덱스번호계산
                $('section').eq(i+1).addClass('on');
                $('section').eq(i+1).siblings().removeClass('on');
                
            }
        }); //$('section').on('mousewheel', function(event,delta){ 끝
    }); //$(window).on('scroll',function(){ 끝
    
    
}); // $(function(){ 끝















