$(document).ready(function(){
   topScroll();

    
});

    $(window).scroll(function topScroll(){
        if ($(window).scrollTop() > $('.navbar').height()){
            $('.navbar').addClass('nav-bar-scroll');
            $('.navbar').addClass('fixed-top');
            $('.nav-link').addClass('nav-link-scroll');
            $('.navbar-brand').addClass('navbar-brand-scroll');
        } 
        else {
            $('.navbar').removeClass('nav-bar-scroll')
            $('.navbar').removeClass('fixed-top')
            $('.nav-link').removeClass('nav-link-scroll');
            $('.navbar-brand').removeClass('navbar-brand-scroll');
        }
    });