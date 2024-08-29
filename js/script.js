const heroSwiper = new Swiper('.heroSwiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
        delay: 4000
    }
  });

  const burgerSwiper = new Swiper('.burgerSwiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween:40,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
        delay: 4000
    }

    // If we need navigation buttons
    
  });