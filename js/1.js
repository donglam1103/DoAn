$(function(){
    $(window).scroll(function(){
        if($('html, body').scrollTop()>100){
            $('.navbar').addClass('nentrang'); //nền Menu đổi màu trắng
            $('.nav-link').addClass('mneucam')
        }
        else{
            $('.navbar').removeClass('nentrang'); //nền Menu đổi màu trắng
            $('.nav-link').removeClass('mneucam')
        }
    })
})

