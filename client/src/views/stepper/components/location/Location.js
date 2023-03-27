import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AspectRatio,
  Button,
  Heading,
  Flex,
  Spacer, useToast,
} from '@chakra-ui/react';
import { Context } from '../Provider';

function Location() {
  const { place } = useContext(Context);
  const nav = useNavigate();
  const toast = useToast();

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
      navigator.clipboard.writeText(venue.url).then(() => toast({
        title: 'Google maps link copied to clipboard!',
        status: 'success',
        duration: 9000,
        isClosable: true,
      }), () => toast({
        title: 'Failed to copy link to clipboard',
        status: 'error',
        duration: 9000,
        isClosable: true,
      }));
    }
    await navigator.share(venue);
  }

  const routes = {
    route1: `https://www.google.com/maps/embed/v1/place?key=AIzaSyBY04gyee_CumsNrdlgV8_P9exvWMgSTc8&q=${searchString}`,
  };

  return (
    <Flex flexDirection="column">
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
        <Button onClick={sharePlace}>{!navigator.canShare ? 'Copy link' : 'Share place'}</Button>
        <Spacer />
        <Button onClick={returnHomeClick} variant="ghost">
          Return Home
        </Button>
      </Flex>
    </Flex>
  );
}

export default Location;
