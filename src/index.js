import './reset.css';
import './style.css';

import contact from './app/pages/contact';
import home from './app/pages/home';
import notFound from './app/pages/not-found';

import init, { navigate } from './app/utils/navigation';

init({ contact, home, notFound });

document.querySelector('#navigation-home').onclick = () => {
  navigate('');
};
document.querySelector('#navigation-contact').onclick = () => {
  navigate('contact');
};

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
