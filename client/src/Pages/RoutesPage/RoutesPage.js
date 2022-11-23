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
} from '@chakra-ui/react';

import { ChevronRightIcon } from '@chakra-ui/icons';

function RoutesPage({ activity }) {
  const nav = useNavigate();
  function returnHomeClick() {
    nav('/');
  }
  const searchString = encodeURI(`${activity.name} ${activity.displayAddress}`);
  const routes = {
    route1: `https://www.google.com/maps/embed/v1/place?key=AIzaSyBY04gyee_CumsNrdlgV8_P9exvWMgSTc8&q=${searchString}`,
  };

  return (
    <Container>
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

      <div className="routes-page">
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

        <Button onClick={returnHomeClick}>Return Home</Button>
      </div>
    </Container>
  );
}

export default RoutesPage;
