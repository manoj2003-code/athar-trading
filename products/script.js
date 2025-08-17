 const menuBtn = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });




 let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const carouselSection = document.querySelector("section"); // Hero section container
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = (i === index) ? "1" : "0";
      slide.style.zIndex = (i === index) ? "1" : "0";
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("opacity-100", i === index);
      dot.classList.toggle("opacity-50", i !== index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    let newIndex = (currentSlide + 1) % slides.length;
    showSlide(newIndex);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  // Dot click navigation
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
    });
  });

  // Pause on hover
  carouselSection.addEventListener("mouseenter", stopAutoSlide);
  carouselSection.addEventListener("mouseleave", startAutoSlide);

  // Initialize
  showSlide(0);
  startAutoSlide();
