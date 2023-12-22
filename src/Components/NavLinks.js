import React, { useState } from 'react'
import classes from './NavLinks.module.scss'

function NavLinks() {
  const [activePage, setActivePage] = useState('home');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (

    <ul className={classes.nav_items}>
      <li
        onClick={() => handlePageChange('home')}
        className={activePage === 'home' ? classes.active : ''}
      >
        Features
      </li>
      <li
        onClick={() => handlePageChange('about')}
        className={activePage === 'about' ? classes.active : ''}
      >
        Pricing
      </li>
      <li
        onClick={() => handlePageChange('contact')}
        className={activePage === 'contact' ? classes.active : ''}
      >
        Contact
      </li>
    </ul >

  )
}

export default NavLinks