import $ from 'jquery';
import 'jquery-ui';

$(window).scroll(function(){
    if($(window).scrollTop() > 0){
        $('.top').fadeIn();
    }else{
        $('.top').fadeOut();
    }
})

if(window.location.href ==='https://chanroyc.ca/vulcan' || window.location.href ==='https://chanroyc.ca/vulcan#' || window.location.href ==='https://chanroyc.ca/oat' || window.location.href ==='https://chanroyc.ca/oat#') {
    $('html').addClass('smooth');
}else{
    $('html').removeClass('smooth');
}