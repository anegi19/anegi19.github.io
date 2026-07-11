// Wait for the document to load before running the script 
(function ($) {

  $(window).on('load hashchange', function(){

    // Hide all content regions
    $('.content-region').hide();

    // Remove active menu styles
    $('.main-menu a').removeClass('active');

    // Get selected section
    var region = location.hash.toString() || $('.main-menu a:first').attr('href');

    // Show selected section
    $(region).show();

    // Highlight selected menu
    $('.main-menu a[href="'+ region +'"]').addClass('active');


    // -------- Ocean background image change --------

    var bgImages = {
      "#home": "image_grey.png",
      "#about": "image_ocean.png",
      "#contact": "image_viridis.png"
    };

    if (bgImages[region]) {
      $('#ocean-link-img').attr('src', bgImages[region]);
    }

  });

})(jQuery);
