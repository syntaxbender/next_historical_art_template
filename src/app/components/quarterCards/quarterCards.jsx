import React from 'react'
import style from "./quarterCards.module.css"
import CustomLink from "../customLink"
import sewing from "../../../../public/images/sewing.jpg"
import installing from "../../../../public/images/installing.jpg"
import repairing from "../../../../public/images/repairing.jpg"
import cleaning from "../../../../public/images/cleaning.jpg"
import Image from 'next/image';
const QuaterCards = () => {
  return (
    <div className={style.quarterCards}>
      <div className={style.cardsContainer}>
        <div className={style.card}>
          <div className={style.overlay}>
            <span className={style.counter}>01</span>
            <Image src={repairing}></Image>
          </div>
          <div className={style.content}>
            <h2 className={style.heading}>Repairing</h2>
            <CustomLink href="/services">
              <div className={style.detailsButton}>
                <span className={style.detailsText}>Details</span>
              </div>
            </CustomLink>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.overlay}>
            <span className={style.counter}>02</span>
            <Image src={sewing}></Image>
          </div>
          <div className={style.content}>
            <h2 className={style.heading}>Sewing</h2>
            <CustomLink href="/services">
              <div className={style.detailsButton}>
                <span className={style.detailsText}>Details</span>
              </div>
            </CustomLink>
          </div>
        </div>
      </div>
      <div className={style.cardsContainer}>

        <div className={style.card}>
          <div className={style.overlay}>
            <span className={style.counter}>03</span>
            <Image src={cleaning}></Image>
          </div>
          <div className={style.content}>
            <h2 className={style.heading}>Cleaning</h2>
            <CustomLink href="/services">
              <div className={style.detailsButton}>
                <span className={style.detailsText}>Details</span>
              </div>
            </CustomLink>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.overlay}>
            <span className={style.counter}>04</span>
            <Image src={installing}></Image>
          </div>
          <div className={style.content}>
            <h2 className={style.heading}>Removal & Installation</h2>
            <CustomLink href="/services">
              <div className={style.detailsButton}>
                <span className={style.detailsText}>Details</span>
              </div>
            </CustomLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuaterCards