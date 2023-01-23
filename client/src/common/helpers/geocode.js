import opencage from 'opencage-api-client';

const OCD_API_KEY = process.env.REACT_APP_OCD_API_KEY;

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
  return myresponse;
}

export async function revgeocode(latLng) {
  const geoParams = {
    q: latLng.join(','),
    key: OCD_API_KEY,
    no_annotations: 1,
  };

  const myresponse = {
    ok: false, data: null, status: 0, error: '',
  };
  try {
    const response = await opencage.geocode(geoParams);
    if (response.status.code === 200) {
      // Save bits of OC response that interest us
      const comps = response.results[0].components;
      myresponse.ok = true;
      myresponse.data = {
        formatted_address: response.results[0].formatted,
        street: comps.road,
        city: comps.city,
        country: comps.country,
      };
    } else {
      myresponse.status = response.status.code;
      myresponse.error = response.status.text;
    }
  } catch (err) {
    myresponse.error = err.message;
  }

  console.log('revgeocode myresponse:', myresponse);

  return myresponse;
}

export async function getMidpoint(address1, address2) {
  const response1 = await geocode(address1);
  const response2 = await geocode(address2);
  if (response1.ok && response2.ok) {
    const midLat = (response1.data.latLng[0] + response2.data.latLng[0]) / 2;
    const midLng = (response1.data.latLng[1] + response2.data.latLng[1]) / 2;
    return [midLat, midLng];
  }
  throw new Error('Error calculating midpoint');
}
