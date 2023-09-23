import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faGlobe} />;

function Nav() {
  return (
    <div className='Header'>      
      <p>{element} My travel journel</p>
    </div>
  );
}

export default Nav;