import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
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

// eslint-disable-next-line react/prop-types
function Activities({ midpointValue, setActivities }) {
  const nav = useNavigate();

  const handleClick = async (event, category) => {
    event.preventDefault();
    nav('/Options');
    console.log('The icon was clicked.');
    const options = await getActivities(
      midpointValue[0],
      midpointValue[1],
      category,
    );
    console.log(midpointValue, category);
    setActivities(options);
  };

  // const ifEat = () => {
  //   fetch ('/api/eat', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ eat: 'eat' }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log('Success:', data);
  //     })
  //     .catch((error) => {

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

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="/activities">
            Activites
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <div className="Activities">
        <h6>ACTIVITIES</h6>
        <div className="Activities-container">
          <div
            className="Activities-icon"
            role="presentation"
            onClick={(event) => handleClick(event, 'eat')}
          >
            <IoRestaurantSharp />
            <p>EAT</p>
          </div>
          <div
            className="Activities-icon"
            role="presentation"
            onClick={(event) => handleClick(event, 'drink')}
          >
            <BiDrink />
            <p>DRINK</p>
          </div>
          <div
            className="Activities-icon"
            role="presentation"
            onClick={(event) => handleClick(event, 'outdoor')}
          >
            <SiForestry />
            <p>OUTDOOR</p>
          </div>
          <div
            className="Activities-icon"
            role="presentation"
            onClick={(event) => handleClick(event, 'music')}
          >
            <HiOutlineMusicNote />
            <p>MUSIC</p>
          </div>
          <div
            className="Activities-icon"
            role="presentation"
            onClick={(event) => handleClick(event, 'spa')}
          >
            <MdOutlineSpa />
            <p>SPA</p>
          </div>
          <div
            className="Activities-icon"
            role="presentation"
            onClick={(event) => handleClick(event, 'fitness')}
          >
            <CgGym />
            <p>FITNESS</p>
          </div>
          <div
            className="Activities-icon"
            role="presentation"
            onClick={(event) => handleClick(event, 'surprise')}
          >
            <GiPerspectiveDiceSixFacesRandom />
            <p>SURPRISE</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Activities;
