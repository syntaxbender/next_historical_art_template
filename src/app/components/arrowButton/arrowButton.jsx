import React from 'react'
import style from "./arrowButton.module.css"
const ArrowButton = ({children}) => {
  return (
    <button className={style.arrowButton}>{children}</button>
  )
}

export default ArrowButton