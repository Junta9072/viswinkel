import loadPage from '../utils/load-page';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

export default async function initalizePage() {
  await loadPage('/pages/home.htm');

  console.log('Home');
  // init Swiper:
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    spaceBetween: 30,
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
