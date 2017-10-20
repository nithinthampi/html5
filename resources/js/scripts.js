$(document).ready(function () {
    var waypoints = $('.section-features').waypoint(function(direction) {
        if(direction === 'down'){
            $('nav').addClass('sticky');     
        }else{
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px'
    });
    
    
    $('.js--wp-1').waypoint(function(direction) {
            $('.js--wp-1').addClass('animated bounce');     
    }, {
      offset: '60px'
    });
    
    $('.mobile-nav-icon').click(function (){
        var mainNav = $('.main-nav').slideToggle(200);
    });
    
    
})


