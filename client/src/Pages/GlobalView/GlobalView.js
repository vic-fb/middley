import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
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
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="/global">
            Global
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <div className="Home">
        <h1>Coming soon!</h1>
        <button className="Home" type="button" onClick={returnHomeClick}>
          Return Home
        </button>
      </div>
    </Container>
  );
}

export default GlobalView;
