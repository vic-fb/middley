import { Link, useNavigate } from 'react-router-dom';
import './Options.css';
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Image,
  Stack,
  CardHeader,
  StackDivider,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
} from '@chakra-ui/react';
import { FaRegSadCry } from 'react-icons/fa';
import { ChevronRightIcon } from '@chakra-ui/icons';
import yelpLogo from '../../common/assets/yelp_logo.png';
import star0 from '../../common/assets/YelpStars/small_0.png';
import star1 from '../../common/assets/YelpStars/small_1.png';
import star1Half from '../../common/assets/YelpStars/small_1_half.png';
import star2 from '../../common/assets/YelpStars/small_2.png';
import star2Half from '../../common/assets/YelpStars/small_2_half.png';
import star3 from '../../common/assets/YelpStars/small_3.png';
import star3Half from '../../common/assets/YelpStars/small_3_half.png';
import star4 from '../../common/assets/YelpStars/small_4.png';
import star4Half from '../../common/assets/YelpStars/small_4_half.png';
import star5 from '../../common/assets/YelpStars/small_5.png';

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

function Options({ activities, setActivity }) {
  const nav = useNavigate();

  function handleClick(activity) {
    setActivity(activity);
    nav('/routes');
  }

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
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="/Options">
            Options
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      {activities && activities.length === 0 && (
        <Heading>
          Sorry, no activities available <FaRegSadCry />
        </Heading>
      )}

      <div className="card-container">
        {activities.slice(0, 5).map((activity) => (
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            onClick={() => handleClick(activity)}
            key={activity.displayAddress}
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '200px' }}
              // maxH={{ base: '100%', sm: '200px' }}
              src={activity.imgUrl}
              alt={activity.name}
            />
            <Stack>
              <CardHeader>
                <Heading size="md">{activity.name}</Heading>
              </CardHeader>

              <CardBody>
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
                    <Text py="1" fontSize="sm">
                      {activity.rating} / 5
                    </Text>
                    <Image src={yelpStars[activity.rating]} />
                    <Text py="1" fontSize="sm">
                      {activity.reviewCount} ratings
                    </Text>
                    <Image maxW="40px" src={yelpLogo} />
                  </Box>
                </Stack>
              </CardBody>

              <CardFooter>
                <Button variant="solid" colorScheme="blue">
                  GO
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        ))}
      </div>
    </Container>
  );
}
export default Options;
