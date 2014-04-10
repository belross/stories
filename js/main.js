$(document).ready(function(){
    updateSizes();
    $(window).resize(updateSizes);
    
    $(".box").click(function(){openContent(this)});
    $("#back").click(function(){closeContent()});
});

function updateSizes() {
    $("#wrapper").height($(window).height());
    $("#wrapper").width($(window).width());
}

function openContent(pButton) {
    $(".box").not(pButton).fadeOut(function(){
        $(pButton).delay(200).fadeOut(function(){
            $("#back").delay(100).fadeIn();
            $("#content").delay(100).transition({width: "80%"}, function(){
                $("#container").fadeIn();
                $("#container").html("'" + $(pButton).data('link') + "'");
            });
        });
    });
}

function closeContent() {
    $("#container").html("");
    $("#container").fadeOut();
    $("#back").fadeOut();
    $("#content").transition({width: "0%"}, function(){
        $(".box").delay(100).fadeIn();                                  
    });
}