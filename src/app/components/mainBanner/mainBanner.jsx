"use client"
import Image from "next/image";
import mainBanner from "./mainBanner.module.css";
import { useEffect, useRef } from "react";
import bigLogo from "../../../../public/images/logo_big.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonSet from "../buttonSet/buttonSet";
import Link from "next/link";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
export default function MainBanner() {
  return (
    <div className={mainBanner.mainBanner}>
      <div className={mainBanner.overlay}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={mainBanner.bannerContent}>
                <Image src={bigLogo} alt="logo"/>
                <div><ButtonSet><Link href="#"><FontAwesomeIcon icon={faCalendarDays} className="fa-fw" /> Book Now</Link></ButtonSet></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <video autoPlay loop muted>
        <source src="/videos/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div></div>
    </div>
  );
}
