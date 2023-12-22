import React from 'react';
import classes from './Navigation.module.scss';
import ButtonOutline from './Atoms/ButtonOutline';
import Bookmark from './Atoms/Bookmark';
import NavLinks from './NavLinks';

function Navigation() {

  return (
    <div >
      <nav className={classes.nav} >
        <div className={classes.bookmark_nav}>
          <Bookmark />
        </div>
        <NavLinks />
        <ButtonOutline color="light_red">Login</ButtonOutline>
      </nav >
    </div >
  );
}

export default Navigation;