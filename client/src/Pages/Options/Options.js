import { Link } from 'react-router-dom';
import './Options.css';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Spinner,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import ActivitiesList from './components/ActivitiesList';

function Options({ activities, setActivity, loading }) {
  return (
    <Container maxW="container.md">
      <Breadcrumb separator={<ChevronRightIcon color="gray.500" />} py="4">
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/local">
            Local
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/activities">
            Activites
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="/Options">
            Options
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      {loading ? (
        <Flex alignItems="center" flexDirection="column">
          <Spinner thickness="5px" speed="0.65s" size="xl" />
        </Flex>
      ) : (
        <ActivitiesList activities={activities} setActivity={setActivity} />
      )}
    </Container>
  );
}
export default Options;
