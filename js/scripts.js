$(document).ready(function() {

  // Load Header
  $("#site-header").load("header.html", function() {
    console.log("Header loaded.");
  });

  // Load footer
  $("#site-footer").load("footer.html", function() {
    console.log("Footer loaded.");
    // Enable popovers
    $('[data-toggle="popover"]').popover();
    // Enable tooltips
    $('[data-toggle="tooltip"]').tooltip();

  });

  // Back to top button -- when the user scrolls down 20px from the top of the document, show the button

  // In-page sccroll-to links
  $("a.scroll-link").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 130
    }, 400);
  });


  window.onscroll = function() {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("topper").style.display = "block";
    } else {
      document.getElementById("topper").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  $("#topper").on("click", function() {
    $("html").animate({
      scrollTop: 0
    }, 400);
  });

  // iframe stuff

  $("iframe[title='Send Final Grades to Registrar']").contents().find("th:last-of-type").remove();

  $("iframe[title='Send Final Grades to Registrar']").contents().find("tr td:last-of-type").remove();





});
// document.ready
