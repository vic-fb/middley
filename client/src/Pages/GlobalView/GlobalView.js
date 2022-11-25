import { ChevronRightIcon, TimeIcon } from '@chakra-ui/icons';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './GlobalView.css';

function GlobalView() {
  const nav = useNavigate();

  function returnHomeClick() {
    nav('/');
  }
  return (
    <Container>
      <Breadcrumb separator={<ChevronRightIcon color="gray.500" />} py="4">
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/" color="#DCDCDC">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="/global" color="#DCDCDC">
            Global
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <SimpleGrid columns={1} spacingX={10}>
        <Box>
          <Heading
            pt={8}
            pb={10}
            fontSize={{ base: '24px', md: '40px', lg: '56px' }}
          >
            Coming soon! <TimeIcon color="#DCDCDC" />
          </Heading>
        </Box>
        {/* <Box pt={6} height="80px">
          <TimeIcon boxSize={8} color="#DCDCDC" />
        </Box> */}
        <Box height="80px">
          <Button className="Home" type="button" onClick={returnHomeClick}>
            Return Home
          </Button>
        </Box>
      </SimpleGrid>
    </Container>
  );
}

export default GlobalView;
