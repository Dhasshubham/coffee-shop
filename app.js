const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () =>{
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});
// close menu when the close button is clicked
menuCloseButton.addEventListener("click", () =>  menuOpenButton.click());

// close menu when the nav link is clicked
navLinks.forEach(link =>{
  link.addEventListener("click",()=> menuOpenButton.click());
})
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from actually submitting

      const name = document.querySelector('input[type="text"]').value.trim();
      const email = document.querySelector('input[type="email"]').value.trim();
      const message = document.querySelector("textarea").value.trim();

      if (!name || !email || !message) {
          alert("Please fill in all fields.");
          return;
      }

      if (!validateEmail(email)) {
          alert("Please enter a valid email address.");
          return;
      }

      alert("Form submitted successfully!");
      form.reset(); // Clear the form fields
  });

  function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
  }
});

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor:true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints

    breakpoints:{
      0:{
        slidesPerView:1
      },
      768:{
        slidesPerView:2
      },
      1024:{
        slidesPerView:3
      }

    }
  });