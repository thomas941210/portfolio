$(function(){

    //검색창 애니메이트
    let scBar = true;

        $('.search').on('click', function(){
            if(scBar){
                $('.search_bar').animate({'width':'186px'},600);
                $('.search_btn').animate({'width':'50px'},600);
                $('.search_btn').css({'display':'inline-block'});
                scBar = false;
            }else{
                $('.search_bar').animate({'width':'0'},600);
                $('.search_btn').animate({'width':'0'},600);
                $('.search_btn').css({'display':'none'});
                scBar = true;
            }
        });
    
    //엔터칠때
    $('.search_bar').on('keyup', function(e){
        if(e.keyCode == 13){
            e.preventDefault();
            $('.search_btn').click();
        }
    });

    //검색 아무것도 없을때
    $('.search_btn').click(function(){
        if($('.search_bar').val() != ''){
            let data = $('#.search_bar').val();
        }else{
            alert('상품명을 검색해주세요');
            $('.search_bar').focus();
            $('.wrap1').html('');
        }
    });

    //유틸메뉴 이미지 변경
    $('#wrap .nav-right img').on('mouseenter', function(){
        $(this).attr('src', $(this).data('img'));
    }).on('mouseleave', function(){
        $(this).attr('src', $(this).data('origin'));
    });

    //베스트제품 이미지 변경
    
    for(let i = 1; i < 5; i++){
        let $img = $('#bestitem .best_content img');
        $(`#bestitem .best0${i}`).on('mouseenter', function(){
            $img.attr('src', $img.data(`best${i}`));
        })
    }
    
    // $('#bestitem .best_list .ative .best02').on('mouseenter', function(){
    //     $('#bestitem .best_content img').attr('src', $(this).data('best2'));
    // })
    // $('#bestitem .best_list .ative .best03').on('mouseenter', function(){
    //     $('#bestitem .best_content img').attr('src', $(this).data('best3'));
    // })
    // $('#bestitem .best_list .ative .best04').on('mouseenter', function(){
    //     $('#bestitem .best_content img').attr('src', $(this).data('best4'));
    // })



    // $(window).on('scroll',function(){
    //     if($(window).scrollTop() > 0){
    //         $('#wrap').addClass('fix');
    //     }else{
    //         $('#wrap').removeClass('fix');
    //     }
    // });

    //탑 버튼 사라졌다 나타나게
    $('.top').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({'scrollTop': 0}, 500);
    });
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('.backTop').removeClass('backTopShow');
        }else{
            $('.backTop').addClass('backTopShow');
        }
    });

    //데이터 메소드 값을 만들어준걸로 변경하는것 
    //attr은 속성값이므로 속성값을 만들어주고 그걸 바꿔치기 한것!

    var swiper = new Swiper("#slide_banner.mySwiper", {
        spaceBetween : 0,
        // autoplay:  {     //자동슬라이드 (false-비활성화)
        //     delay: 5000, // 시간 설정
        //     disableOnInteraction: false, // false-스와이프 후 자동 재생
        // },

          loop : true,   // 슬라이드 반복 여부
        cssMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination"
        }
    });


    var swiper = new Swiper(".mySwiper2", {
        autoplay: {     //자동슬라이드 (false-비활성화)
            delay: 3000, // 시간 설정
            disableOnInteraction: false, // false-스와이프 후 자동 재생
        },
        loop : true,
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        mousewheel: true
    });

    var swiper = new Swiper(".mySwiper3", {
        loop : true,
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });

    new WOW().init();
    AOS.init();

    //로그인 탭버튼
    $('.list').click(function(e){
        tabOpen(e.target.dataset.id);
    });
    function tabOpen(num){
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(num).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(num).addClass('show');
    }

    //모두동의
    let ckR =$('.check_style1:checked').length;

    $("#checkAll").on('click',function(){
        if($('#checkAll').prop('checked')){
            $('.check_style1').prop('checked', true);
        }else{
            $('.check_style1').prop('checked', false);
        }
    });

    $('.check_style1').on('click', function(){
        ckR = $('.check_style1:checked').length;

        if(ckR === 7){
            $('#checkAll').prop('checked', true);
        }else{
            $('#checkAll').prop('checked', false);
        }
    });

    //주소
    // $(function findAddr(){
    //     new daum.Postcode({
    //         oncomplete: function(data){
    //             $('#zipcode1').val(data.zonecode); // 우편번호 (5자리)
    //             $('#address1').val(data.address);
    //             $('#address1').val(data.buildingName);



                
                //new daum.Postcode({
                //    oncomplete: function(date){
                //        document.getElementById('zipcode1').value = data.zonecode;
                //        document.getElementById('address1').value = data.address;
                //    }
                // });



                // //사용자 주소를 받아올 변수를 정의
                // var addr = '';

                // //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져옴
                // if(data.userSelectedType === 'R'){
                //     //사용자가 도로명 주소를 선택했을 경우(R)
                //     addr = data.roadAddress;
                // }else{//사용자가 지번 주소를 선택했을 경우(J)
                //     addr = data.jibunAddress;
                // }

                // //부모창의 주소칸에 받아온 주소를 넣는다.
                // $('#zipcode1').val(addr);
    //         }
    //     }).open();
    // });

});