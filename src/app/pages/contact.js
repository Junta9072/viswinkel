import loadPage from '../utils/load-page';

export default async function initalizePage() {
  await loadPage('/pages/contact.htm');

  console.log('Contact');
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
      document.querySelector('.contact__adress').textContent =
        json.features[0].place_name;

      //loading
      document.querySelector('.loadingIcon').classList.add('loadingHide');
      console.log('loading has finished');
    } catch (error) {
      console.log(error);
    }
  }

  success();
}
