import { BsFillBriefcaseFill, BsFillHouseDoorFill } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { Tooltip } from '@chakra-ui/react';
import styles from './UserIcons.module.css';

function UserIcons({ user, setCurrentAddress, setSavedAddress }) {
  return (
    <div className={styles.userIcons}>
      {user && (
      <Tooltip label="Home address">
        <div role="presentation" onClick={() => setSavedAddress('home')} className={styles.icon}>
          <BsFillHouseDoorFill />
        </div>
      </Tooltip>
      )}
      {user && (
        <Tooltip label="Work address">
          <div role="presentation" onClick={() => setSavedAddress('work')} className={styles.icon}>
            <BsFillBriefcaseFill />
          </div>
        </Tooltip>
      )}
      <Tooltip label="Current location">
        <div role="presentation" onClick={setCurrentAddress} className={styles.icon}>
          <HiOutlineLocationMarker />
        </div>
      </Tooltip>
    </div>
  );
}

export default UserIcons;
