$(function() {

    // scroll to the top of the page
    $("#backToTop").on("click", function() {
        $("html, body").animate({scrollTop: 0}, 300);
    });

    // toggle the content
    $(".ac-item-hd").on("click", function(e) {
        if ($(this).parent().children(".ac-item-bd").css("display") == "none") {
            $(this).parent().children(".ac-item-bd").fadeIn("fast");
        }
        else {
            $(this).parent().children(".ac-item-bd").slideUp("fast");
        }
    });

    // toggle the first element on default
    $(".myAc > :first-child").children(".ac-item-hd").trigger("click");

});