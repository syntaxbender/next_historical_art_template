"use client"
import { PiScissorsLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { LiaTapeSolid } from "react-icons/lia";
import header from "./header.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Image from 'next/image';
import Menu from "../menu/menu"
import logo from "../../../../public/images/logo_generic_white.png"
import Preloader from '../preloader/preloader'

import Link from "next/link";
import ButtonSet from "../buttonSet/buttonSet";
import { BsArrowDown, BsBell } from 'react-icons/bs';
import DesktopNav from '../menu/desktopNav/desktopNav'
import MobileNav from '../menu/mobileNav/mobileNav'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import {items} from "../../menuItems";
import { BsChevronCompactDown } from "react-icons/bs";
import { useRef } from 'react';

const Header = ({title,tawkRef=null}) => {
  const tawkMessengerRef = useRef();

  return (
    <>
      <Preloader />
      {
        tawkRef ? (
          <TawkMessengerReact
            propertyId="XXXXX"
            widgetId="XXXXX"
            ref={tawkRef}
          />) : (
          <TawkMessengerReact
            propertyId="XXXXX"
            widgetId="XXXXX"
            ref={tawkMessengerRef}
          />)
      }
      <div className={header.mainBanner}>
        <div className={header.overlay}>
          <div className={header.desktopNavContainer}>
          {/* <div className={`d-none d-lg-block ${header.desktopNavContainer}`}> */}
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <Image className={header.logo} src={logo} alt="logo" />
                </div>
                <div className="col-8">
                  <DesktopNav align="flex-end" items={items} />
                </div>
              </div>
            </div>
          </div>
          <div className={`d-block d-lg-none ${header.mobileNavContainer}`}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <MobileNav items={items} />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={header.bannerContent}>
                  {/* <h1 className={mainBanner.headerPretty}>Crafting Curtains</h1> */}
                  <h1 className={header.header}>{title}</h1>
                  <span className={header.downArrow}><BsChevronCompactDown /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <video autoPlay loop muted>
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div></div>
      </div>



    </>
  )
}

export default Header