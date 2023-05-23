window.onload = function() {
  // Header scrolling behavior
  window.addEventListener('scroll', function(e) {
    if (window.pageYOffset > 100) {
      document.querySelector("header").classList.add('is-scrolling');
    } else {
      document.querySelector("header").classList.remove('is-scrolling');
    }
  });

  // Hamburger menu functionality
  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');
  const menu_links = mobile_menu.querySelectorAll('a'); // Select all links within the mobile menu

  menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
  });

  // Close menu when a link is clicked
  menu_links.forEach(function(link) {
    link.addEventListener('click', function() {
      menu_btn.classList.remove('is-active');
      mobile_menu.classList.remove('is-active');
    });
  });

  // Smooth scroll to the target section when a link is clicked
  function smoothScroll(targetSection) {
    const targetOffsetTop = targetSection.offsetTop - 50; // Adjusted offset to consider header height
    window.scrollTo({
      top: targetOffsetTop,
      behavior: 'smooth' // Add smooth scrolling behavior
    });
  }

  // Add event listeners to each menu link
  menu_links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default jump-to-anchor behavior
      const targetId = link.getAttribute('href'); // Get the target section ID

      const targetSection = document.querySelector(targetId); // Select the target section

      if (targetSection) {
        smoothScroll(targetSection);
      } else {
        // If the target section is not found, redirect to the home page
        window.location.href = targetId;
      }
    });
  });

  
};
