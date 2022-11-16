import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './Activities.css';
import { IoRestaurantSharp } from 'react-icons/io5';
import { BiDrink } from 'react-icons/bi';
import { SiForestry } from 'react-icons/si';
import { HiOutlineMusicNote } from 'react-icons/hi';
import { MdOutlineSpa } from 'react-icons/md';
import { CgGym } from 'react-icons/cg';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';

function Activities() {
  // const nav = useNavigate();

  return (
    <div className="Activities">
      <h6>ACTIVITIES</h6>
      <div className="Activities-container">
        <div className="Activities-icon">
          <IoRestaurantSharp />
          <p>EAT</p>
        </div>
        <div className="Activities-icon">
          <BiDrink />
          <p>DRINK</p>
        </div>
        <div className="Activities-icon">
          <SiForestry />
          <p>OUTDOOR</p>
        </div>
        <div className="Activities-icon">
          <HiOutlineMusicNote />
          <p>MUSIC</p>
        </div>
        <div className="Activities-icon">
          <MdOutlineSpa />
          <p>SPA</p>
        </div>
        <div className="Activities-icon">
          <CgGym />
          <p>FITNESS</p>
        </div>
        <div className="Activities-icon">
          <GiPerspectiveDiceSixFacesRandom />
          <p>SURPRISE</p>

        </div>

      </div>

    </div>

  );
}

export default Activities;
