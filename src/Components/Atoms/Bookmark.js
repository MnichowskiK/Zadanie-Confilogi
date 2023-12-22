import React from 'react'
import classes from './Bookmark.module.scss'
import bookmarkIcon from '../../images/logo-bookmark.svg'


function Bookmark() {
  return (
    <div className={classes.bookmark}> <img src={bookmarkIcon} alt="bookmark icon" /></div>
  )
}

export default Bookmark