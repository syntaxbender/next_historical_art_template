import React from 'react'
import style from "./reservationBell.module.css"
import { GoBell } from "react-icons/go";
const ReservationBell = ({onClick}) => {
  return (
    <div onClick={onClick} className={style.reservationBell}>
      <div className={style.rbContainer}>
        <div className={style.bellWrapper}><GoBell /></div>
        <span className={style.rbText}>Reservation</span>
      </div>
    </div>
  )
}

export default ReservationBell