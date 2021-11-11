$(document).ready(function() {
    $("#image_list a").each(function() {
        // preload the image for each link
        var galleryImage = new Image();
        galleryImage.src = imageURL;

        // set up the event handlers for each link
        $(this).click(function(evt) {
            $("#caption, #image").fadeOut(3000, function() {
                $("#image").attr("src", imageURL);
                $("#caption").text(caption);
                $("#image").fadeIn(3000);
                $("#caption").fadeIn(3000, function() {
                    $(this).animate({ fontSize: "2.0em"}, 3000);
                });
            });
            // cancel the default action of each link
            evt.preventDefault();
        })
        // get the image URL and caption for each image and animate the caption
        var imageURL = $(this).attr("href");
        var caption = $(this).attr("title");
        });
        // move the focus to the first link
        $("li:first-child a").focus();
}); // end ready