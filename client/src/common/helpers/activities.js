import { get } from './crud';

const getActivities = (latitude, longitude, category) => {
  const path = `/activities/${latitude}/${longitude}/${category}`;
  get(path);
};

export default getActivities;
