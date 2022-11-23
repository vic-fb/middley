import { Link, useNavigate } from 'react-router-dom';
import './RoutesPage.css';
import {
  AspectRatio,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Button,
  Heading,
  Flex,
  Spacer,
} from '@chakra-ui/react';

import { ChevronRightIcon } from '@chakra-ui/icons';

function RoutesPage({ activity }) {
  const nav = useNavigate();
  function returnHomeClick() {
    nav('/');
  }

  const searchString = encodeURI(`${activity.name} ${activity.displayAddress}`);

  async function shareDirections() {
    const directions = {
      title: `Let's meet at ${activity.name}`,
      text: 'I picked this place using "NAME OF OUR APP"',
      url: `https://www.google.com/maps/search/?api=1&query=${searchString}`,
    };
    await navigator.share(directions);
  }

  const routes = {
    route1: `https://www.google.com/maps/embed/v1/place?key=AIzaSyBY04gyee_CumsNrdlgV8_P9exvWMgSTc8&q=${searchString}`,
  };

  return (
    <Container minH="100vh">
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

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Options">
            Options
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="/Routes">
            Routes
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex flexDirection="column" justifyContent="space-evenly">
        <Heading as="h1">ROUTES</Heading>
        <Heading as="h2">'{activity.name}'</Heading>
        <AspectRatio maxW="600px" ratio={4 / 3}>
          <iframe
            title="map"
            src={routes.route1}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </AspectRatio>
        <Flex my="35px">
          <Button onClick={shareDirections}>Share directions</Button>
          <Spacer />
          <Button onClick={returnHomeClick} variant="ghost">Return Home</Button>
        </Flex>
      </Flex>
    </Container>
  );
}

export default RoutesPage;
