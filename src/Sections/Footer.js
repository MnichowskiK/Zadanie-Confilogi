import React from 'react'
import NavLinks from '../Components/NavLinks'
import classes from './Footer.module.scss'
import FacebookLogo from './../images/icon-facebook.svg'
import TwitterLogo from './../images/icon-twitter.svg'
import WhiteBookmark from './../images/logo-bookmark-white.svg'


function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_nav}>
        <img src={WhiteBookmark} alt='white bookmark logo' />
        <NavLinks />
      </div>
      <div className={classes.footer_logos}>
        <img src={FacebookLogo} alt='facebook logo' className={classes.facebook_logo} />
        <img src={TwitterLogo} alt='twitter logo' />
      </div>
    </footer>
  )
}

export default Footer