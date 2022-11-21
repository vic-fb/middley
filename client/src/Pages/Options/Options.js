import { useNavigate } from 'react-router-dom';
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
} from '@chakra-ui/react';

function Options({ activities }) {
  const nav = useNavigate();
  return (
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
            src={activity.imgUrl}
            alt={activity.name}
          />

          <Stack>
            <CardBody>
              <Heading size="md">{activity.name}</Heading>

              <Text py="2">
                {activity.displayAddress}
              </Text>
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
  );
}
export default Options;
