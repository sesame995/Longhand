 $(function(){
 var swiper = new Swiper('.gallery-center .gallery-center_inner ', {
    slidesPerView: 3,//보여지는 갤러리 수
    spaceBetween: 50,//갤러리 사이 간격
    centeredSlides: true,//센터모드
    speed: 1500,//버튼을 슬라이드가 넘어가는 시간
	  autoplay: {
        delay: 10000,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '.gallery-center .swiper-button-next',
        prevEl: '.gallery-center .swiper-button-prev',
      },
	    pagination: {//블릿 버튼
        el: '.gallery-center .swiper-pagination',
        clickable: true,
      },
    });

    /갤러리2 이벤트부분/ 
    var swiper = new Swiper('.gallery-center2 .gallery-center_inner ', {
      slidesPerView: 2,//보여지는 갤러리 수
      spaceBetween: 150,//갤러리 사이 간격
      centeredSlides: false,//센터모드
      speed: 3000,//버튼을 슬라이드가 넘어가는 시간
      autoplay: {
          delay: 50000,//자동으로 넘어가기 전 머무르는 시간
          disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
          nextEl: '.gallery-center2 .swiper-button-next',
          prevEl: '.gallery-center2 .swiper-button-prev',
        },
      
      });
});