import Image from "next/image";
import React from "react";
import logo from "../../../../public/images/logo_generic.png";
import {items} from "../../menuItems";
import Link from "next/link";
import style from "./footer.module.css"
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { MdCircle } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
const serviceList = items;
console.log(serviceList);
const Footer = () => {
  const servicesJSX = [];
  const countPerSide = Math.floor(serviceList.length / 3);
  let divideRemainder = serviceList.length - countPerSide * 3;
  let stepper = countPerSide;
  let sideIndicator = 0;
  for (let i = 0; i < countPerSide * 3; i++) {
    if (stepper === i) {
      sideIndicator += 1;
      stepper += countPerSide;
    }
    if (!servicesJSX[sideIndicator]) servicesJSX[sideIndicator] = [];
    servicesJSX[sideIndicator].push(
      <div className={style.footerService}><MdCircle /> <Link href={serviceList[i].link}>{serviceList[i].title}</Link></div>
    )
  }
  for (let i2 = 0; i2 < divideRemainder; i2++) {
  //console.log(i2);
    if (!servicesJSX[i2]) servicesJSX[i2] = [];
    let serviceElement = serviceList[(serviceList.length - (i2+1))];
    servicesJSX[i2].push(
      <div className={style.footerService}><MdCircle /> <Link href={serviceElement.link}>{serviceElement.title}</Link></div>
    )
  }
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12">
            <div className={style.singleFooter}>
              <h2>Historical Art Template</h2>
              <Image src={logo}></Image>
              <div className={style.socialLinks}>
                <div className={style.socialLink}>
                  <FaInstagram />
                </div>
                <div className={style.socialLink}>
                <CiFacebook />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className={style.singleFooter}>
              <h2>Navigation</h2>
              <div className="row">
                <div className={`${style.footerServiceList} col-lg-4 col-md-4 col-12`}>
                  {servicesJSX[0]}
                </div>
                <div className={`${style.footerServiceList} col-lg-4 col-md-4 col-12`}>
                  {servicesJSX[1]}
                </div>
                <div className={`${style.footerServiceList} col-lg-4 col-md-4 col-12`}>
                  {servicesJSX[2]}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <div className={style.singleFooter}>
              <h2>Contact</h2>
              <div className={style.contactDetail}>
                <FaPhoneAlt />
                <span>(+1) XXX XXX XX XX</span>
              </div>
              <div className={style.contactDetail}>
                <FaEnvelope />
                <span>info@example.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.copyright}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className={style.copyrightContent}>
                                <p className={style.copyrightText}>© Copyright 2024  |  Created by <a href="https://www.syntaxbender.com" target="_blank">Syntaxbender</a></p>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
    </footer>
  );
};

export default Footer;
