// import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Options.css';
import {
  Card, CardBody, CardFooter, Heading, Text, Button, Image, Stack,
} from '@chakra-ui/react';

function Options() {
  const nav = useNavigate();
  return (
    <div className="card-container">
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
        onClick={() => nav('/Results')}
      >
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '200px' }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">OPTION 1</Heading>

            <Text py="2">
              Caffè latte is a coffee beverage of Italian origin made with espresso
              and steamed milk.
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              GO
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
        onClick={() => nav('/Results')}
      >
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '200px' }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">OPTION 2</Heading>

            <Text py="2">
              Caffè latte is a coffee beverage of Italian origin made with espresso
              and steamed milk.
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              GO
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
        onClick={() => nav('/Results')}
      >
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '200px' }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">OPTION 3</Heading>

            <Text py="2">
              Caffè latte is a coffee beverage of Italian origin made with espresso
              and steamed milk.
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              GO
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>

  );
}

export default Options;
