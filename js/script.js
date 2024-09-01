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
    spaceBetween:40,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
        delay: 3000
    },

    breakpoints:{
      // 0:{
      //   slidesPerView: 1
      // },
      480:{
        slidesPerView: 1
      },

      900:{
        slidesPerView: 2
      },

      1200:{
        slidesPerView: 3
      },


    }
    
  });