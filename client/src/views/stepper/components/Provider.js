import React, { useState, createContext } from 'react';
import { getMidpoint } from '../../../common/helpers/geocode';

export const Context = createContext(null);

function Provider(props) {
  const [locations, setLocations] = useState({ address: '', address2: '' });
  const [midpoint, setMidpoint] = useState([]);
  const [category, setCategory] = useState('');
  const [place, setPlace] = useState(null);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  async function updateMidpoint() {
    const coordinates = await getMidpoint(locations.address1, locations.address2);
    setMidpoint(coordinates);
  }

  return (
    <Context.Provider
      value={{
        locations,
        updateLocations: (newLocations) => setLocations(newLocations),
        midpoint,
        updateMidpoint,
        category,
        updateCategory: (newCategory) => setCategory(newCategory),
        loading,
        setLoading,
        options,
        updateOptions: (newOptions) => setOptions(newOptions),
        place,
        setPlace,
      }}
    >
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {props.children}
    </Context.Provider>
  );
}

export default Provider;
