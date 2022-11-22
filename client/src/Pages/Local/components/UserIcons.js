import { BsFillBriefcaseFill, BsFillHouseDoorFill } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';

function UserIcons({ user }) {
  return (
    <div className="user-icons">
      {user && (
      <div className="home-icon" role="presentation">
        <BsFillHouseDoorFill />
      </div>
      )}
      {user && (
      <div className="work-icon" role="presentation">
        <BsFillBriefcaseFill />
      </div>
      )}
      <div className="currentLocation-icon" role="presentation">
        <HiOutlineLocationMarker />
      </div>
    </div>
  );
}

export default UserIcons;
