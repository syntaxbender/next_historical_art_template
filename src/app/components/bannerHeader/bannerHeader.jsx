"use client"
import { PiScissorsLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { LiaTapeSolid } from "react-icons/lia";
import bannerHeader from "./bannerHeader.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Image from 'next/image';
import Menu from "../menu/menu"
import logo from "../../../../public/images/logo_generic_white.png"
import Preloader from '../preloader/preloader'
import CustomLink from '../customLink'

import Link from "next/link";
import ButtonSet from "../buttonSet/buttonSet";
import ReservationBell from "../reservationBell/reservationBell";
import { BsArrowDown, BsBell } from 'react-icons/bs';
import DesktopNav from '../menu/desktopNav/desktopNav'
import MobileNav from '../menu/mobileNav/mobileNav'
import bgImg from "../../../../public/images/2148970769.jpg"

const Header = ({ menuItems }) => {
  return (
    <>
      <Preloader />

      <div className={bannerHeader.mainBanner}>
        <div className={bannerHeader.overlay}>
          <div className={`d-none d-lg-block ${bannerHeader.desktopNavContainer}`}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <DesktopNav items={menuItems} />
                </div>
              </div>
            </div>

          </div>
          <div className={`d-block d-lg-none ${bannerHeader.mobileNavContainer}`}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <MobileNav items={menuItems} />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="reservationBell">
            <div className="container">
              <div className="col-12 text-align-right">
              </div>
            </div>
          </div> */}
          <div className={bannerHeader.bannerContentWrapper}>
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-xl-9  col-xxl-7">
                  <div className={bannerHeader.bannerContent}>
                    <Image src={logo} alt="logo" />
                    {/* <h1 className={mainBanner.headerPretty}>Crafting Curtains</h1> */}
                    <h1 className={bannerHeader.headerPretty}>Lorem Ipsum &<br />Historical Art Temp</h1>
                    {/* <h1 className={bannerHeader.header}>Art <PiScissorsLight /> Experiences <PiScissorsLight /> Scissors</h1> */}
                    <div className={bannerHeader.divider}></div>
                    <p className={bannerHeader.paragraph}>We create custom curtains tailored to your taste, design philosophy, and unique spaces. For us, attention to detail is essential.</p>
                    <ButtonSet classNames="secondary bigger animateBounce centerBlock iconRight"><CustomLink href="#">Explore More <BsArrowDown /></CustomLink></ButtonSet>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* <video autoPlay loop muted>
          <source src="/videos/banner2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <Image src={bgImg}></Image>
        <div></div>
      </div>



    </>
  )
}

export default Header