import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AspectRatio,
  Container,
  Button,
  Heading,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { Context } from '../Provider';

function Location() {
  const { place } = useContext(Context);
  const nav = useNavigate();

  function returnHomeClick() {
    nav('/');
  }

  const searchString = encodeURI(`${place.name} ${place.displayAddress}`);

  const venue = {
    title: `Let's meet at ${place.name}`,
    text: 'I picked this place using Middley',
    url: `https://www.google.com/maps/search/?api=1&query=${searchString}`,
  };

  async function sharePlace() {
    if (!navigator.canShare) {
      await navigator.clipboard.writeText(venue.url);
    }
    await navigator.share(venue);
  }

  const routes = {
    route1: `https://www.google.com/maps/embed/v1/place?key=AIzaSyBY04gyee_CumsNrdlgV8_P9exvWMgSTc8&q=${searchString}`,
  };

  return (
    <Container minH="100vh">
      <Flex flexDirection="column" justifyContent="space-evenly">
        <Heading py={8} fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
          {`Let's go to ${place.name}!`}
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
