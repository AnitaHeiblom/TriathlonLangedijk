$(document).ready(function () {
    var url = window.location;
    var element = $('ul.navbar-nav a').filter(function () {
        return this.href == url || url.href.indexOf(this.href) == 0;
    });
    $(element).parentsUntil('ul.navbar-nav', 'li').addClass('active');
});

