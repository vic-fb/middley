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
import { ChevronRightIcon } from '@chakra-ui/icons';

function Options({ activities }) {
  const nav = useNavigate();

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

      <div className="card-container">
        {activities.slice(0, 5).map((activity) => (
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            onClick={() => nav('/Routes')}
            key={`key${activity.name}`}
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
                    <Text py="1" fontSize="sm">
                      {activity.reviewCount} ratings
                    </Text>
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
