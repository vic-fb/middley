import { useNavigate } from 'react-router-dom';
import {
  AspectRatio,
  Container,
  Button,
  Heading,
  Flex,
  Spacer,
} from '@chakra-ui/react';

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
