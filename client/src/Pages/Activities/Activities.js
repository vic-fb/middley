import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Activities.css';
import { IoRestaurantSharp } from 'react-icons/io5';
import { BiDrink } from 'react-icons/bi';
import { SiForestry } from 'react-icons/si';
import { HiOutlineMusicNote } from 'react-icons/hi';
import { MdOutlineSpa } from 'react-icons/md';
import { CgGym } from 'react-icons/cg';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';

function Activities() {
  const nav = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    nav('/Options');
    console.log('The icon was clicked.');
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
    <div className="Activities">
      <h6>ACTIVITIES</h6>
      <div className="Activities-container">
        <div className="Activities-icon" role="presentation" onClick={handleClick}>
          <IoRestaurantSharp />
          <p>EAT</p>
        </div>
        <div className="Activities-icon" role="presentation" onClick={handleClick}>
          <BiDrink />
          <p>DRINK</p>
        </div>
        <div className="Activities-icon" role="presentation" onClick={handleClick}>
          <SiForestry />
          <p>OUTDOOR</p>
        </div>
        <div className="Activities-icon" role="presentation" onClick={handleClick}>
          <HiOutlineMusicNote />
          <p>MUSIC</p>
        </div>
        <div className="Activities-icon" role="presentation" onClick={handleClick}>
          <MdOutlineSpa />
          <p>SPA</p>
        </div>
        <div className="Activities-icon" role="presentation" onClick={handleClick}>
          <CgGym />
          <p>FITNESS</p>
        </div>
        <div className="Activities-icon" role="presentation" onClick={handleClick}>
          <GiPerspectiveDiceSixFacesRandom />
          <p>SURPRISE</p>

        </div>

      </div>

    </div>

  );
}

export default Activities;
