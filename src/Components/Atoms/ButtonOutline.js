import React from 'react'
import classes from "./ButtonOutline.module.scss"

function ButtonOutline({ children, color }) {
  return (
    <button className={`${classes.button_outline} ${classes[color]}`}>{children}</button>
  )
}

export default ButtonOutline