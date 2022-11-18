import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoutesPage.css';
import { AspectRatio } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
function RoutesPage() {
  const nav = useNavigate();

  function returnHomeClick() {
    nav('/');
  }
  return (
    <><div className="RoutesPage">
      <h1>Coming soon!</h1>
      <button className="Home" type="button" onClick={returnHomeClick}>
        Return Home
      </button>
      <Grid templateColumns='repeat(5, 1fr)' gap={4}>
  <GridItem colSpan={2} h='10' bg='tomato' /><AspectRatio ratio={16 / 9}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng' />
      </AspectRatio>
  <GridItem colStart={4} colEnd={6} h='10' bg='papayawhip' />
 
</Grid>
    </div></>
  );
}

export default RoutesPage;