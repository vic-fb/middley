// import the address1 and address2 values from the app.js file

import { Link, useNavigate } from 'react-router-dom';
import './RoutesPage.css';
import {
  Grid,
  GridItem,
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
  console.log(activity);

  function returnHomeClick() {
    nav('/');
  }

  const routes = [
    {
      id: 1,
      route: `https://www.google.com/maps/embed/v1/place?key=AIzaSyBY04gyee_CumsNrdlgV8_P9exvWMgSTc8&q=${activity.displayAddress}`,
    },
  ];

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
        <h1>Routes</h1>

        <Grid
          templateColumns="repeat(2, 1fr)"
          templateRows="repeat(3, 1fr)"
          gap={4}
        >
          <GridItem colSpan={1} rowSpan={1}>
            <Heading>'{activity.name}'</Heading>
            <AspectRatio maxW="560px" ratio={16 / 9}>
              <iframe
                title="map"
                src={routes[0].route}
                width="560"
                height="315"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </AspectRatio>
          </GridItem>
        </Grid>
        <Button onClick={returnHomeClick}>Return Home</Button>
      </div>
    </Container>
  );
}

export default RoutesPage;
