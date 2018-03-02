$(".arrow-btn").click(function() {
    console.log('button clicked');
    $('html,body').animate({
        scrollTop: $(".about-section").offset().top},
        'slow');
})

// $(".arrow-btn").on('click', function () {
//     console.log('button was clicked');
// })