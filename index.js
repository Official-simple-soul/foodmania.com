const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: {
      delay: 5000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination1',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    
    slidesPerView: 2,
  });

  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    effect: 'flip',

    autoplay: {
      delay: 3000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination2',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    
    slidesPerView: 1,
  });
