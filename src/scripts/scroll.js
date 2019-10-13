import $ from 'jquery';
import 'jquery-ui';

$(function() {

    // $('body').mousemove(function(e){
    //   let amountMovedX = (e.pageX* -1/300);
    //   let amountMovedY = (e.pageY* -1/300);

    //   let currentTop = $('.cat').css('top')
    //   let currentLeft = $('.cat').css('left');

    //   $('.rings').css('top', 'calc(50% + '+amountMovedY+'%)');
    //   $('.rings').css('left', 'calc(72.5% + '+amountMovedX+'%)');

    //   $('.cat').css('top', 'calc(50% + '+amountMovedY+'%)');
    //   $('.cat').css('left', 'calc(72.5% + '+amountMovedX+'%)');
    // });

    $.scrollify({
      section : ".panel",
      scrollbars: false,
      touchScroll: true,
      scrollSpeed: 2000,
      before:function(i,panels) {

        let ref = panels[i].attr("data-section-name");
        let panel = '.panel.'+ref;

        $(".pagination .active").removeClass("active");
  
        $(".pagination").find("a[href=\"#" + ref + "\"]").parent().addClass("active");

        if(ref==='home'){
          $('.scroll-down').removeClass('slideOutDown');
          $('.scroll-down').addClass('slideInUp');
          $('.scroll-down').fadeIn();

          $('.cat').show();
        }else{
          $('.scroll-down').removeClass('slideInUp');
          $('.scroll-down').addClass('slideOutDown');
          $('.scroll-down').fadeOut();
        }

        if(ref==='oat'){
          $('.projectImage.oat').addClass('expand');
          $('.projectTitlePrimary.oat').addClass('animated slideInLeft');
          $('.projectTitleSecondary.oat').addClass('animated slideInLeft');
          $('.projectNumber.oat').addClass('animated slideInRight');

          $('.projectNumber.oat').delay(500).fadeIn(1000);
          $('.projectTitle.oat').delay(500).fadeIn(1000);
          $('.btn.oat').delay(1500).fadeIn(1000);

          $('.catHide.oat').delay(1500).fadeIn(1000);
          $('.catHide.oat').addClass('animated slideInUp');
        }else{
          $('.projectImage.oat').removeClass('expand');
          $('.projectTitlePrimary.oat').removeClass('animated slideInLeft');
          $('.projectTitleSecondary.oat').removeClass('animated slideInLeft');
          $('.projectNumber.oat').removeClass('animated slideInRight');

          $('.projectNumber.oat').fadeOut();
          $('.projectTitle.oat').fadeOut();
          $('.btn.oat').fadeOut();

          $('.catHide.oat').fadeOut();
          $('.catHide.oat').removeClass('animated slideInUp');
        }
        
        if(ref==='vulcan'){
          $('.projectImage.vulcan').addClass('expand');
          $('.projectTitlePrimary.vulcan').addClass('animated slideInLeft');
          $('.projectTitleSecondary.vulcan').addClass('animated slideInLeft');
          $('.projectNumber.vulcan').addClass('animated slideInRight');

          $('.projectNumber.vulcan').delay(500).fadeIn(1000);
          $('.projectTitle.vulcan').delay(500).fadeIn(1000);
          $('.btn.vulcan').delay(1500).fadeIn();

          $('.catHide.vulcan').delay(1500).fadeIn(1000);
          $('.catHide.vulcan').addClass('animated slideInRight');
        }else{
          $('.projectImage.vulcan').removeClass('expand');
          $('.projectTitlePrimary.vulcan').removeClass('animated slideInLeft');
          $('.projectTitleSecondary.vulcan').removeClass('animated slideInLeft');
          $('.projectNumber.vulcan').removeClass('animated slideInRight');

          $('.projectNumber.vulcan').fadeOut();
          $('.projectTitle.vulcan').fadeOut();
          $('.btn.vulcan').fadeOut();

          $('.catHide.vulcan').fadeOut();
          $('.catHide.vulcan').removeClass('animated slideInRight');
        }

        if (ref==='about'){
          $.scrollify.setOptions({
            scrollSpeed: 3000,
          });

          $('.catHide.about').delay(500).fadeIn(1500);
          $('.catHide.about').addClass('animated slideInUp');

          setTimeout(function(){
            $('.catHideWink.about').show();
            $('.catHide.about').removeClass('animated slideInUp');
            $('.titleAbout').fadeIn(2500);

            setTimeout(function(){
              $('.catHide.about').hide();
            },50);

            setTimeout(function(){
              $('.aboutContent').fadeIn(2500);
              $('.catHideWink.about').addClass('animated slideOutDown');
            },500)
          }, 1500)
        }else{
          $.scrollify.setOptions({
            scrollSpeed: 2000,
          });

          $('.catHide.about').removeClass('animated slideOutDown');
          $('.catHideWink.about').removeClass('animated slideOutDown');
          $('.catHideWink.about').hide();
          $('.titleAbout').fadeOut();
          $('.aboutContent').fadeOut();
        }
      },
      afterRender:function() {
        let pagination = "<ul class=\"pagination\">";
        let activeClass = "";
        $(".panel").each(function(i) {
          activeClass = "";
          if(i===$.scrollify.currentIndex()) {
            activeClass = "active";
          }
        
          pagination += "<li class=\"" + activeClass + "\"><a href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
        });

        pagination += "</ul>";
  
        $(".home").append(pagination);
        $(".pagination a").on("click",$.scrollify.move);
        
        $('.logo').on('click', function(){
          $.scrollify.currentIndex=0;
          $.scrollify.move('#home');
        });
        
        $('.nav-home').on('click', function(){
          $.scrollify.currentIndex = 0;
          $.scrollify.move("#home");
        });

        $('.nav-works').on('click', function(){
          $.scrollify.currentIndex = 0;
          $.scrollify.move("#oat");
        });

        $('.nav-about').on('click', function(){
          $.scrollify.currentIndex = 0;
          $.scrollify.move("#about");
        });
      },
    });
  });