import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { Flex, Button, Container } from '@chakra-ui/react';
import Locations from './components/locations/Locations';
import Activities from './components/activities/Activities';
import Location from './components/location/Location';
import Options from './components/options/Options';
import Provider from './components/Provider';

const steps = [
  { label: 'Step 1', content: Locations },
  { label: 'Step 2', content: Activities },
  { label: 'Step 3', content: Options },
  { label: 'Step 4', content: Location },
];

function Stepper() {
  const {
    nextStep, prevStep, reset, activeStep,
  } = useSteps({ initialStep: 0 });

  return (
    <Provider>
      <Container py={8}>
        <Steps activeStep={activeStep} colorScheme="purple">
          {steps.map(({ label, content: Content }) => (
            <Step key={label}>
              <Content />
            </Step>
          ))}
        </Steps>
        {activeStep === steps.length ? (
          <Flex p={4}>
            <Button mx="auto" size="sm" onClick={reset}>
              Reset
            </Button>
          </Flex>
        ) : (
          <Flex width="100%" justify="flex-end" py={8}>
            <Button
              isDisabled={activeStep === 0}
              mr={4}
              onClick={prevStep}
              size="sm"
              variant="ghost"
            >
              Prev
            </Button>
            <Button size="sm" onClick={nextStep}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Flex>
        )}
      </Container>
    </Provider>
  );
}

export default Stepper;
