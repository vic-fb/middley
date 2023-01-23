import {
  Container,
  Flex,
  Spinner,
} from '@chakra-ui/react';
import OptionsList from './components/OptionsList';
import CustomBreadcrumb from '../../common/components/CustomBreadcrumb/Breadcrumb';

function Options({ activities, setActivity, loading }) {
  return (
    <Container maxW="container.md">
      <CustomBreadcrumb pages={[{ path: '/local', name: 'Local' }, { path: '/activities', name: 'Activities' }, { path: '/options', name: 'Options' }]} />
      {loading ? (
        <Flex alignItems="center" flexDirection="column">
          <Spinner thickness="5px" speed="0.65s" size="xl" />
        </Flex>
      ) : (
        <OptionsList activities={activities} setActivity={setActivity} />
      )}
    </Container>
  );
}
export default Options;
