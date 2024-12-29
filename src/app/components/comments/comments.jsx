import React from 'react'
import CustomHeading from "../customHeading/customHeading";
import style from "./comments.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

import img1 from "../../../../public/images/13058.jpg"
import img2 from "../../../../public/images/2148970769.jpg"
import img3 from "../../../../public/images/23635.jpg"
import { PhotoProvider, PhotoView } from 'react-photo-view';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'react-photo-view/dist/react-photo-view.css';
import Image from 'next/image';
const Comments = () => {
  const comments = [
    {
      name: "Arelon Thandor",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      rating: 5,
      images: [img1, img2, img3]
    },
    {
      name: "Arelon Thandor",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      rating: 5,
      images: [img3, img2, img1]
    },
    {
      name: "Arelon Thandor",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      rating: 5,
      images: [img2, img1, img3]
    },
    {
      name: "Arelon Thandor",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      rating: 5,
      images: [img3, img3, img3]
    },
    {
      name: "Arelon Thandor",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      rating: 5,
      images: [img3, img3, img3]
    },
    {
      name: "Arelon Thandor",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      rating: 5,
      images: [img3, img3, img3]
    }
  ];
  let commentsX = [];
  for (let i = 0; i < comments.length; i++) {
    let images = [];

    for (let i2 = 0; i2 < comments[i].images.length; i2++) {
      images.push(
        <PhotoView key={i2} src={comments[i].images[i2].src}>
          <Image className={style.imageThumb} src={comments[i].images[i2]} />
        </PhotoView>
      )
      // images.push(
      // <Image className={style.imageThumb} src={comments[i].images[i2]}/>)
    }

    commentsX.push(<SwiperSlide>
      <div className={style.comment}>
        <div className={style.quoteL}><RiDoubleQuotesL /></div>
        {/* <div className={style.quoteR}><RiDoubleQuotesR /></div> */}
        <p className={style.commentText}>{comments[i].comment}</p>
        <div className={style.commentInfo}>
          <div className={style.name}><span>{comments[i].name}</span></div>
          {/* <div className={style.rating}>{Array(comments[i].rating).fill(<IoStar />)}{Array(5 - comments[i].rating).fill(<IoStarOutline />)}</div> */}

        </div>
        <div className={style.images}>
          <PhotoProvider
            overlayRender={() => (
              <div className={style.overlayContainer}>
                <span className={style.galleryName}>
                  {comments[i].name}
                </span>
                <span className={style.galleryText}>
                  {comments[i].comment}
                </span>
              </div>
            )}
          >
            {images}
          </PhotoProvider>
        </div>




      </div>
    </SwiperSlide>)
  }
  return (
    <div className={style.comments}>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView="auto"
        pagination={{ clickable: true }}
        slidesOffsetBefore={30} // Sol tarafta 30px boşluk
        slidesOffsetAfter={30}  // Sağ tarafta 30px boşluk
      >
        {commentsX}
      </Swiper>

      {/* <div className={style.comment}>

      </div> */}
    </div>
  )
}

export default Comments