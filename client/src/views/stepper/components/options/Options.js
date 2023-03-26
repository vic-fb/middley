import {
  Container,
  Flex,
  Spinner,
} from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { Context } from '../Provider';
import OptionsList from './components/OptionsList';
import getActivities from '../../../../common/helpers/activities';

function Options() {
  const {
    setLoading, midpoint, category, updateOptions, loading,
  } = useContext(Context);

  async function findOptions() {
    setLoading(true);
    const options = await getActivities(midpoint, category);
    updateOptions(options);
    setLoading(false);
  }

  useEffect(() => {
    findOptions();
  }, []);

  return (
    <Container>
      {loading ? (
        <Flex align="center" direction="column" py={8}>
          <Spinner thickness="5px" speed="0.65s" size="xl" />
        </Flex>
      ) : (
        <OptionsList />
      )}
    </Container>
  );
}
export default Options;
