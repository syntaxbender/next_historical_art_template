"use client"
import styles from "./page.module.css";
// import MainBanner from "./components/mainBanner/mainBanner";
// import {MiniParagraph,MiniHeader} from "./components/ImageParagraph/miniParagraph";
import BannerHeader from "./components/bannerHeader/bannerHeader";
import QuarterCards from "./components/quarterCards/quarterCards";
import CustomHeading from "./components/customHeading/customHeading";
import Subscribe from "./components/subscribe/subscribe";
import CustomParagraph from "./components/customParagraph/customParagraph";
import Comments from "./components/comments/comments";
import { items } from "./menuItems";
import { IoIosMail } from "react-icons/io";
export default function Home() {
  return (
    <>
      {/* <MainBanner /> */}
      <BannerHeader menuItems={items} />
      <section className="section">
        <div className="container">
          <CustomHeading classNames="center">
            <h2>The beauty lies in the details.</h2>
            <h1>Comprehensive Curtain Solutions</h1>
          </CustomHeading>
          <CustomParagraph>
            <p>Integer rhoncus purus id volutpat facilisis. In sit amet purus ac est pellentesque elementum vitae eu leo. Integer pulvinar dolor purus, vel porta quam eleifend id. Quisque eros velit, mattis et augue sit amet, egestas tincidunt ex. Donec dignissim scelerisque convallis. Aenean vitae quam justo. Nunc id pellentesque odio. Proin in tellus ut metus ornare tincidunt vel non velit. Aliquam ac massa eget metus aliquet rutrum. Suspendisse semper sodales libero. Vestibulum tempor erat eu posuere finibus. Mauris pretium libero at neque dignissim, sed semper enim lobortis. Donec justo sapien, elementum a volutpat quis, mollis sit amet libero. Mauris quis malesuada risus. Fusce ante diam, blandit ac ex vitae, porttitor tincidunt orci.</p>
          </CustomParagraph>
        </div>
        <QuarterCards />
      </section>
      <section className="section">

        <CustomHeading classNames="center">
          <h2>Testimonials</h2>
          <h1>What Our Customers Say</h1>
        </CustomHeading>
        <Comments />
      </section>
      <section className="section bg-goldendark">
        <div className={styles.subscribeIcon}>
            <IoIosMail />
        </div>
        <CustomHeading classNames="center">
          <h2>Don’t miss the opportunities!</h2>
          <h1>New products, special campaigns...</h1>
        </CustomHeading>
        <Subscribe />
      </section>
    </>
  );
}
