// Smooth scroll to "Register Now" section
function scrollToRegister() {
  const registerSection = document.getElementById("register");
  if (registerSection) {
    registerSection.scrollIntoView({ behavior: "smooth" });
  }
}

// 3D hover tilt effect for offering cards
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.offering-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `rotateY(${x * 0.05}deg) rotateX(${-y * 0.05}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
    });
  });

  // Initialize Swiper for offerings carousel
  const offeringsSwiper = new Swiper('.offeringsSwiper', {
    // Display 3 slides at a time on desktop
    slidesPerView: 3,
    spaceBetween: 30,
    
    // Auto-play configuration
    autoplay: {
      delay: 3000, // 3 seconds between slides
      disableOnInteraction: false, // Continue autoplay after user interaction
      pauseOnMouseEnter: true, // Pause when hovering over the slider
    },
    
    // Loop the slides infinitely
    loop: true,
    
    // Enable centered slides for better visual appeal
    centeredSlides: false,
    
    // Pagination dots
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
    breakpoints: {
      // Mobile devices (320px and up)
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
      },
      // Tablets (768px and up)
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
        centeredSlides: false,
      },
      // Desktop (1024px and up)
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
      },
    },
    
    // Smooth transitions
    effect: 'slide',
    speed: 600,
    
    // Grab cursor
    grabCursor: true,
    
    // Keyboard navigation
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    
    // Mouse wheel control
    mousewheel: {
      enabled: false,
    },
    
    // Prevent clicks during transition
    preventClicks: true,
    preventClicksPropagation: true,
  });

  // Pause autoplay on hover and resume on leave
  const swiperContainer = document.querySelector('.offeringsSwiper');
  if (swiperContainer) {
    swiperContainer.addEventListener('mouseenter', () => {
      offeringsSwiper.autoplay.stop();
    });
    
    swiperContainer.addEventListener('mouseleave', () => {
      offeringsSwiper.autoplay.start();
    });
  }
});