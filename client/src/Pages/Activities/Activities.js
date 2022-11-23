import { useNavigate, Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { IoRestaurantSharp } from 'react-icons/io5';
import { BiDrink } from 'react-icons/bi';
import { SiForestry } from 'react-icons/si';
import { HiOutlineMusicNote } from 'react-icons/hi';
import { MdOutlineSpa } from 'react-icons/md';
import { CgGym } from 'react-icons/cg';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { ChevronRightIcon } from '@chakra-ui/icons';
import styles from './Activities.module.css';
import getActivities from '../../common/helpers/activities';

function Activities({ midpointValue, setActivities, setLoading }) {
  const nav = useNavigate();

  const handleClick = async (event, category) => {
    event.preventDefault();
    setLoading(true);
    nav('/Options');
    const options = await getActivities(
      midpointValue[0],
      midpointValue[1],
      category,
    );
    setActivities(options);
    setLoading(false);
  };

  const cardProps = {
    className: styles.card,
    role: 'presentation',
    align: 'center',
    variant: 'elevated',
    backgroundColor: 'rgba(215,212,224,0.2)',
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

      <div>
        <Heading py={8} fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
          ACTIVITIES
        </Heading>
        <Grid
          gap={6}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          <GridItem>
            <Card
              onClick={(event) => handleClick(event, 'eat')}
              {...cardProps}
            >
              <CardHeader>
                <Heading>
                  <IoRestaurantSharp boxsize={10} />
                </Heading>
              </CardHeader>
              <CardBody>
                <Text fontSize="xl">EAT</Text>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card
              onClick={(event) => handleClick(event, 'drink')}
              {...cardProps}
            >
              <CardHeader>
                <Heading>
                  <BiDrink boxsize={10} />
                </Heading>
              </CardHeader>
              <CardBody>
                <Text fontSize="xl">DRINK</Text>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card
              onClick={(event) => handleClick(event, 'outdoor')}
              {...cardProps}
            >
              <CardHeader>
                <Heading>
                  <SiForestry boxsize={10} />
                </Heading>
              </CardHeader>
              <CardBody>
                <Text fontSize="xl">OUTDOOR</Text>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card
              onClick={(event) => handleClick(event, 'music')}
              {...cardProps}
            >
              <CardHeader>
                <Heading>
                  <HiOutlineMusicNote boxsize={10} />
                </Heading>
              </CardHeader>
              <CardBody>
                <Text fontSize="xl">MUSIC</Text>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card
              onClick={(event) => handleClick(event, 'spa')}
              {...cardProps}
            >
              <CardHeader>
                <Heading>
                  <MdOutlineSpa boxsize={10} />
                </Heading>
              </CardHeader>
              <CardBody>
                <Text fontSize="xl">SPA</Text>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card
              onClick={(event) => handleClick(event, 'fitness')}
              {...cardProps}
            >
              <CardHeader>
                <Heading>
                  <CgGym boxsize={10} />
                </Heading>
              </CardHeader>
              <CardBody>
                <Text fontSize="xl">FITNESS</Text>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem colSpan={{ base: 1, sm: 2, md: 3 }}>
            <Card
              onClick={(event) => handleClick(event, 'surprise')}
              {...cardProps}
            >
              <CardHeader>
                <Heading>
                  <GiPerspectiveDiceSixFacesRandom boxsize={10} />
                </Heading>
              </CardHeader>
              <CardBody>
                <Text fontSize="xl">SURPRISE</Text>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </div>
    </Container>
  );
}

export default Activities;
