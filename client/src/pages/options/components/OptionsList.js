import {
  Heading,
  Card,
  CardBody,
  Text,
  Image,
  Stack,
  CardHeader,
  StackDivider,
  Box,
  Button,
  VStack,
} from '@chakra-ui/react';
import { FaRegSadCry } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import star0 from '../../../common/assets/yelp-stars/small_0.png';
import star1 from '../../../common/assets/yelp-stars/small_1.png';
import star1Half from '../../../common/assets/yelp-stars/small_1_half.png';
import star2 from '../../../common/assets/yelp-stars/small_2.png';
import star2Half from '../../../common/assets/yelp-stars/small_2_half.png';
import star3 from '../../../common/assets/yelp-stars/small_3.png';
import star3Half from '../../../common/assets/yelp-stars/small_3_half.png';
import star4 from '../../../common/assets/yelp-stars/small_4.png';
import star4Half from '../../../common/assets/yelp-stars/small_4_half.png';
import star5 from '../../../common/assets/yelp-stars/small_5.png';
import yelpLogo from '../../../common/assets/yelp-logo.png';

const yelpStars = {
  0: star0,
  1: star1,
  1.5: star1Half,
  2: star2,
  2.5: star2Half,
  3: star3,
  3.5: star3Half,
  4: star4,
  4.5: star4Half,
  5: star5,
};

function OptionsList({ activities, setActivity }) {
  const nav = useNavigate();

  function handleClick(activity) {
    setActivity(activity);
    nav('/routes');
  }

  return (
    activities && activities.length === 0 ? (
      <Heading>
        Sorry, no activities available
        <FaRegSadCry />
      </Heading>
    ) : (
      <div>
        <Heading py={8} fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
          Why not try...
        </Heading>
        <Stack gap={0.5} display="flex">
          {activities.slice(0, 5).map((activity) => (
            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow="hidden"
              variant="elevated"
              backgroundColor="rgba(215,212,224,0.2)"
              onClick={() => handleClick(activity)}
              key={activity.displayAddress}
            >
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '33%' }}
                maxH={{ base: '200px', sm: '100%' }}
                src={activity.imgUrl}
                alt={activity.name}
              />
              <Stack flex="1" spacing="4" py="6">
                <CardHeader py="0">
                  <Heading size="md">{activity.name}</Heading>
                </CardHeader>
                <CardBody py="0">
                  <Stack divider={<StackDivider />} spacing="2">
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Address
                      </Heading>
                      <Text py="1" fontSize="sm">
                        {activity.displayAddress}
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Price
                      </Heading>
                      <Text py="1" fontSize="sm">
                        {activity.price}
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Rating
                      </Heading>
                      {/* <Text py="1" fontSize="sm">
                      {activity.rating} / 5
                    </Text> */}
                      <Image py="1" src={yelpStars[activity.rating]} />
                      <Text py="1" fontSize="sm">
                        {activity.reviewCount}
                        {' '}
                        ratings
                      </Text>
                      <Image maxW="40px" src={yelpLogo} />
                      <VStack>
                        <Button alignSelf="flex-end" px={8}>
                          Go!
                        </Button>
                      </VStack>
                    </Box>
                  </Stack>
                </CardBody>
              </Stack>
            </Card>
          ))}
        </Stack>
      </div>
    ));
}

export default OptionsList;
