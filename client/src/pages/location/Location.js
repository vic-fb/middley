import { Link, useNavigate } from 'react-router-dom';
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

function Location({ activity }) {
  const nav = useNavigate();
  function returnHomeClick() {
    nav('/');
  }

  const searchString = encodeURI(`${activity.name} ${activity.displayAddress}`);

  const place = {
    title: `Let's meet at ${activity.name}`,
    text: 'I picked this place using Middley',
    url: `https://www.google.com/maps/search/?api=1&query=${searchString}`,
  };

  async function sharePlace() {
    if (!navigator.canShare) {
      await navigator.clipboard.writeText(place.url);
    }
    await navigator.share(place);
  }

  const routes = {
    route1: `https://www.google.com/maps/embed/v1/place?key=AIzaSyBY04gyee_CumsNrdlgV8_P9exvWMgSTc8&q=${searchString}`,
  };

  return (
    <Container minH="100vh">
      <Breadcrumb separator={<ChevronRightIcon color="gray.500" />} py="4">
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/" color="#DCDCDC">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/local" color="#DCDCDC">
            Local
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/activities" color="#DCDCDC">
            Activities
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Options" color="#DCDCDC">
            Options
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="/Routes" color="#DCDCDC">
            Routes
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex flexDirection="column" justifyContent="space-evenly">
        <Heading py={8} fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
          {`Let's go to ${activity.name}!`}
        </Heading>

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
          <Button onClick={sharePlace}>Share place</Button>
          <Spacer />
          <Button onClick={returnHomeClick} variant="ghost" color="#DCDCDC">
            Return Home
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Location;
