"use client"
import style from "./page.module.css";
import { useEffect, useRef } from "react";
import Header from "../components/header/header";
import CustomHeading from "../components/customHeading/customHeading";
import ButtonSet from "../components/buttonSet/buttonSet";
import CustomLink from "../components/customLink";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
export default function About() {
  const tawkMessengerRef = useRef();

  return (
    <>
      {/* <MainBanner /> */}
      <Header title="Contact" tawkRef={tawkMessengerRef} />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mb-5 mb-lg-0">
              <div class={style.contactDetails}>
                <div class={style.contactDetail}>
                  <div class={style.contactDetailImage}>
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <div class={style.contactDetailHead}>
                      <h4>Phone</h4>
                    </div>
                    <div class={style.contactDetailText}>
                      <p>(+1) XXX XXX XX XX</p>
                    </div>
                  </div>
                </div>
                <div class={style.contactDetail}>
                  <div class={style.contactDetailImage}>
                    <FaEnvelope />
                  </div>
                  <div>
                    <div class={style.contactDetailHead}>
                      <h4>E-mail</h4>
                    </div>
                    <div class={style.contactDetailText}>
                      <p>info@example.com</p>
                    </div>
                  </div>
                </div>
                    {/*<div class={style.contact-detail address}>
                  <div class={style.contact-detail-image}>
                    <FaMapMarker />
                  </div>
                   <div class={style.contact-detail-container}>col-12
                    <div class={style.contact-detail-head}>
                      <h4>Adres</h4>
                    </div>
                    <div class={style.contact-detail-text}>
                      <p>İstanbul/Türkiye, 35000</p>
                    </div>
                  </div> 
                </div>*/}
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <CustomHeading classNames="mini">
                <h2>Ask Your Questions, We’re Here to Help</h2>
                <h1>Have a Question?</h1>
              </CustomHeading>
              <p className={style.questionParagraph}>If you have any questions or would like to learn more, feel free to connect directly with our experts. We’re here to provide accurate information and tailored solutions to meet your needs. Start a conversation now and let us help you!</p>
              <ButtonSet classNames="secondary" customWidth={"270px"}>
                <CustomLink onClick={() => { tawkMessengerRef.current.maximize(); }} href="#">Create Conversation</CustomLink>
              </ButtonSet>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
