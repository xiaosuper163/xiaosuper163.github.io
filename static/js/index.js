$(function() {
    $("#backToTop").on("click", function() {
        $("html, body").animate({scrollTop: 0}, 300);
    });
});