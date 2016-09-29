$( document ).ready( function() {

    // Smooth scrolling for down angle
    $(".scroll").click( function() {
        $("html, body").animate( {
            scrollTop: $( $.attr(this, "href") ).offset().top
        }, 500);
        return false;
    });
});
