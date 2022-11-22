const DEBUG = true;

async function _asyncGetCurrentPosition(options = {}) {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      // This is the JS function that actually gets the browser location
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    } else {
      reject(Error('Browser does not support geolocation'));
    }
  });
}

async function getCurrentLocation() {
  try {
    const opts = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 };
    const geoPos = await _asyncGetCurrentPosition(opts);
    const { latitude, longitude } = geoPos.coords;
    if (DEBUG) {
      console.log('geoloc: browser location:', latitude, longitude);
    }
    return [latitude, longitude];
  } catch (err) {
    console.log('geoloc: error:', err);
    return (Error('We could not find your location'));
  }
}

export default getCurrentLocation;
