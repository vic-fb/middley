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
  Flex,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { FaRegSadCry } from 'react-icons/fa';
import { Context } from '../../Provider';
import { ratingStars } from './stars/stars';
import yelpLogo from '../../../../../common/assets/yelp-logo.png';

function OptionsList() {
  const {
    options, setPlace, loading, place,
  } = useContext(Context);

  return (
    !loading && options.length === 0 ? (
      <Heading py={8}>
        Sorry, no activities available
        <FaRegSadCry />
      </Heading>
    ) : (
      <Flex flexDirection="column" gap={5}>
        <Heading py={8} fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
          Why not try...
        </Heading>
        {options.slice(0, 5).map((venue) => {
          const isSelected = venue.displayAddress === place?.displayAddress;
          return (
            <Card
              direction={{ base: 'column', sm: 'row' }}
              width="100%"
              overflow="hidden"
              variant="elevated"
              backgroundColor="rgba(215,212,224,0.2)"
              onClick={() => setPlace(venue)}
              cursor="pointer"
              border={isSelected && '2px'}
              borderColor={isSelected && '#8763D7'}
              key={venue.displayAddress}
            >
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '50%' }}
                src={venue.imgUrl}
                alt={venue.name}
              />
              <Stack flex="1" spacing="4" py="6">
                <CardHeader py="0">
                  <Heading size="md">{venue.name}</Heading>
                </CardHeader>
                <CardBody py="0" textAlign="left">
                  <Stack divider={<StackDivider />} spacing="2">
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Address
                      </Heading>
                      <Text py="1" fontSize="sm">
                        {venue.displayAddress}
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Price
                      </Heading>
                      <Text py="1" fontSize="sm">
                        {venue.price}
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Rating
                      </Heading>
                      <Image src={ratingStars[venue.rating]} />
                      <Text py="1" fontSize="sm">
                        {venue.reviewCount}
                        {' '}
                        ratings
                      </Text>
                      <Image maxW="40px" src={yelpLogo} />
                    </Box>
                  </Stack>
                </CardBody>
              </Stack>
            </Card>
          );
        })}
      </Flex>
    ));
}

export default OptionsList;
