import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  SimpleGrid,
  Text,
  Button,
} from '@chakra-ui/react';
import { IoRestaurantSharp } from 'react-icons/io5';
import { BiDrink } from 'react-icons/bi';
import { SiForestry } from 'react-icons/si';
import { HiOutlineMusicNote } from 'react-icons/hi';
import { MdOutlineSpa } from 'react-icons/md';
import { CgGym } from 'react-icons/cg';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { ChevronRightIcon } from '@chakra-ui/icons';
import getActivities from '../../common/helpers/activities';

function Activities({ midpointValue, setActivities }) {
  const nav = useNavigate();

  const handleClick = async (event, category) => {
    event.preventDefault();
    nav('/Options');
    const options = await getActivities(
      midpointValue[0],
      midpointValue[1],
      category,
    );

    setActivities(options);
  };

  return (
    <Container maxW="container.md">
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

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="/activities">
            Activities
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <div className="Activities">
        <Heading>ACTIVITIES</Heading>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          <Card
            role="presentation"
            onClick={(event) => handleClick(event, 'eat')}
            align="center"
          >
            <CardHeader>
              <Heading size="xl">
                <IoRestaurantSharp />
              </Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize="lg">EAT</Text>
            </CardBody>
            <CardFooter>
              <Button>View Options</Button>
            </CardFooter>
          </Card>
          <Card
            role="presentation"
            onClick={(event) => handleClick(event, 'drink')}
            align="center"
          >
            <CardHeader>
              <Heading size="xl">
                <BiDrink />
              </Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize="lg">DRINK</Text>
            </CardBody>
            <CardFooter>
              <Button>View Options</Button>
            </CardFooter>
          </Card>
          <Card
            role="presentation"
            onClick={(event) => handleClick(event, 'outdoor')}
            align="center"
          >
            <CardHeader>
              <Heading size="xl">
                <SiForestry />
              </Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize="lg">OUTDOOR</Text>
            </CardBody>
            <CardFooter>
              <Button>View Options</Button>
            </CardFooter>
          </Card>
          <Card
            role="presentation"
            onClick={(event) => handleClick(event, 'music')}
            align="center"
          >
            <CardHeader>
              <Heading size="xl">
                <HiOutlineMusicNote />
              </Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize="lg">MUSIC</Text>
            </CardBody>
            <CardFooter>
              <Button>View Options</Button>
            </CardFooter>
          </Card>
          <Card
            role="presentation"
            onClick={(event) => handleClick(event, 'spa')}
            align="center"
          >
            <CardHeader>
              <Heading size="xl">
                <MdOutlineSpa />
              </Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize="lg">SPA</Text>
            </CardBody>
            <CardFooter>
              <Button>View Options</Button>
            </CardFooter>
          </Card>
          <Card
            role="presentation"
            onClick={(event) => handleClick(event, 'fitness')}
            align="center"
          >
            <CardHeader>
              <Heading size="xl">
                <CgGym />
              </Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize="lg">FITNESS</Text>
            </CardBody>
            <CardFooter>
              <Button>View Options</Button>
            </CardFooter>
          </Card>
          <Card
            role="presentation"
            onClick={(event) => handleClick(event, 'surprise')}
            align="center"
          >
            <CardHeader>
              <Heading size="xl">
                <GiPerspectiveDiceSixFacesRandom />
              </Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize="lg">SURPRISE</Text>
            </CardBody>
            <CardFooter>
              <Button>View Options</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </div>
    </Container>
  );
}

export default Activities;
