/* eslint-disable no-console */
import opencage from 'opencage-api-client';

const OCD_API_KEY = process.env.REACT_APP_OCD_API_KEY; // the API key is stored in the .env file

async function geocode(address) {
  const geoParams = {
    q: address,
    key: OCD_API_KEY,
    no_annotations: 1,
  };

  const myresponse = {
    ok: false, data: null, status: 0, error: '',
  };
  try {
    // OC sends response in JSON, API takes care of parsing etc.
    const response = await opencage.geocode(geoParams);
    if (response.status.code === 200) {
      if (response.results.length > 0) {
        myresponse.ok = true;
        const g = response.results[0].geometry;
        myresponse.data = {
          latLng: [g.lat, g.lng],
          formatted_address: response.results[0].formatted,
        };
      } else {
        myresponse.status = 404;
        myresponse.error = 'Address not found';
      }
    } else {
      myresponse.status = response.status.code;
      myresponse.error = response.status.text;
    }
  } catch (err) {
    myresponse.error = err.message;
  }

  console.log('geocode myresponse:', myresponse);

  return myresponse;
}
// arr1 will contain latitude for location 1 and longitude for location 1
// arr2 will contain latitude for location 2 and longitude for location 2
async function midpoint(arr1, arr2) {
  // create var midlat = lat1 + lat2 (from arrays) divided by 2
  const midlat = arr1[0] + arr2[0] / 2;
  // create var midlng = lng1 + lng2 (from arrays) divided by 2
  const midlng = arr1[1] + arr2[1] / 2;
  // create array containing midlat and midlng
  const midarr = [midlat, midlng];
  // return new array with both
  return midarr;
}

export default { geocode, midpoint };
