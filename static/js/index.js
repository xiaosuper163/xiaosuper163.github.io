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

    // specific for small phone screen
    // wrap the code into a resize event handler
    function resizeHandler() {
        if (parseFloat($("#canvas").css("width")) <= 332) {
            console.log(1);
            var newWidth = $("#canvas").css("width");
            $("#introCard").css("width", newWidth);
            $("#introCard").css("max-width", newWidth);
            $("#introCard").css("float", "initial");
            $("#header").css("max-width", newWidth);
            $('#header').css("background-size", "100% auto");
            // hide the navigation bar in the body
            $("#sideBar").css("display", "none");
    
            // change the size of the iframe
            $("#VMHC").css("width", newWidth);
            $("#VMHC").css("max-width", newWidth);
            $("#VMHC").css("height", "auto");
    
            // change the size of the accordion
            $(".myAc").css("max-width", newWidth);
        }
    }

    $("html").on("resize", resizeHandler);
    $("html").trigger("resize");

});