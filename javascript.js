// active page

$(document).ready(function () {
    var url = window.location;
    var element = $('ul.navbar-nav a').filter(function () {
        return this.href == url || url.href.indexOf(this.href) == 0;
    });
    $(element).parentsUntil('ul.navbar-nav', 'li').addClass('active');
});

//sticky-top

$(document).ready(function(){

    var navOffset, scrollPosition = 0;
    navOffset = $(".navbar").offset().top;

    $(window).scroll(function(){
        scrollPosition = $(window).scrollTop();

        if(scrollPosition >= navOffset){
            $(".navbar").addClass("fixed");
        }
        else{
            $(".navbar").removeClass("fixed");
        }

    });
});