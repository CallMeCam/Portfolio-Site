// Get the button element
var scrollToTopBtn = document.getElementById("scroll-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
};

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.onclick = function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};