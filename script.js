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


    // -------- Ocean background change --------

    if (region === "#home") {
      document.documentElement.className = "bg-home";
    }

    else if (region === "#about") {
      document.documentElement.className = "bg-about";
    }

    else if (region === "#contact") {
      document.documentElement.className = "bg-contact";
    }

  });

})(jQuery);
