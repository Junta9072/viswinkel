import './reset.css';
import './styles.css';

import loadPage from './loadPage';

export default async function initalizePage() {
  await loadPage('/pages/home.htm');

  console.log('Home');
}

///////////SWIPER//////////////

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

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

//openingsUren script
let storeStatus = null;

function storeOpen() {
  let date = new Date();
  let dagNo = date.getDay();
  let uur = date.getHours();

  if (dagNo == 0) {
    storeStatus = 'Wij zijn gesloten, en terug open op maandag 7u';
  } else {
    if (uur > 18 || uur < 7) {
      storeStatus = "Wij zijn gesloten, en weer open vanaf 7u 's Ochtends";
    } else {
      storeStatus = 'Wij zijn NU open <br> (tot 18u)';
    }
  }

  openingsUren.innerHTML = storeStatus;
}

let openingsUren = document.querySelector('.openingsUren');
setInterval(storeOpen(), 1000);

//adressAPI scripts
async function success() {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/4.428022493438946,51.211614879653794.json?access_token=pk.eyJ1IjoianVudGEiLCJhIjoiY2t6eTVjb3FvMDBmdDJwbWx3N2h6ZWRtMCJ9.AxccJaxPcaqaot9HiUlnEg`;
  //const url = `https://api.mapbox.com/geocoding/v5/{mapbox.places}/${position.coords.longitude},${position.coords.latitude}.json`;
  //51.211614879653794, 4.428022493438946
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);
    console.log(json.features[0].place_name);
    document.querySelector('.adress').textContent = json.features[0].place_name;

    //loading
    document.querySelector('.loadingIcon').classList.add('loadingHide');
    console.log('loading has finished');
  } catch (error) {
    console.log(error);
  }
}

success();
