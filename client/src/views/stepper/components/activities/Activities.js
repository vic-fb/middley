import { useContext, useEffect } from 'react';
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import {
  FaCocktail, FaTree, FaSpa, FaMusic,
} from 'react-icons/fa';
import { GiPerspectiveDiceSixFacesRandom, GiForkKnifeSpoon, GiGymBag } from 'react-icons/gi';
import { Context } from '../Provider';

const categories = [
  { name: 'EAT', icon: GiForkKnifeSpoon },
  { name: 'DRINK', icon: FaCocktail },
  { name: 'OUTDOOR', icon: FaTree },
  { name: 'MUSIC', icon: FaMusic },
  { name: 'SPA', icon: FaSpa },
  { name: 'FITNESS', icon: GiGymBag },
  { name: 'SURPRISE', icon: GiPerspectiveDiceSixFacesRandom },
];

function Activities() {
  const {
    updateMidpoint, category, updateCategory,
  } = useContext(Context);

  useEffect(() => {
    updateMidpoint();
  }, []);

  const cardProps = {
    role: 'presentation',
    align: 'center',
    variant: 'elevated',
    backgroundColor: 'rgba(215,212,224,0.2)',
    cursor: 'pointer',
  };

  return (
    <Container maxW="container.md">
      <div>
        <Heading py={8} fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
          Activities
        </Heading>
        <Grid
          gap={6}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          {categories.map(({ name, icon: Icon }) => {
            const isSelected = category === name.toLowerCase();
            return (
              <GridItem key={name} colSpan={name === 'SURPRISE' && { base: 1, sm: 2, md: 3 }}>
                <Card onClick={() => updateCategory(name.toLowerCase())} {...cardProps} border={isSelected && '2px'} borderColor={isSelected && '#8763D7'}>
                  <CardHeader>
                    <Heading>
                      <Icon boxsize={10} />
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Text fontSize="xl">{name}</Text>
                  </CardBody>
                </Card>
              </GridItem>
            );
          })}
        </Grid>
      </div>
    </Container>
  );
}

export default Activities;
