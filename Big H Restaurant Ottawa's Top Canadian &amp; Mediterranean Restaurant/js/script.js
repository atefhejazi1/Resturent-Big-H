$(function () {
    // $("body").css('paddingTop', $('.navbar').innerHeight());

    $(".navbar li a ,.homepage .arrowToExtraTasty").click(function (e) {
        if ($(this).data('scroll') != null) {
            e.preventDefault();
            $("html,body").animate({
                scrollTop: $("#" + $(this).data('scroll')).offset().top
            }, 1000)
        } else {

            e.returnValue = true;

        }

    })

    $('.pop').click(function () {
        var src = $(this).attr('src');
        $(".modal").modal("show");
        $("#popup-img").attr("src", src)
    })


});