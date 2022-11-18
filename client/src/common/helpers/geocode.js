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

export default { midpoint };
