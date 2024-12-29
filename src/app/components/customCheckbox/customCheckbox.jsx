import React from 'react'
import style from "./customCheckbox.module.css"
const CustomCheckbox = ({...rest}) => {
  return (
    <div className={style.checkboxWrapper}>
      <input {...rest} type="checkbox" id="check" />
      <label for="check">
        <svg viewBox="0,0,50,50">
          <path d="M5 30 L 20 45 L 45 5"></path>
        </svg>
      </label>
    </div>
  )
}

export default CustomCheckbox