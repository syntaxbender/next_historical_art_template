import React from 'react'
import Image from "next/image";
import style from "./imageContent.module.css"


// export default MiniParagraphHeader
const ImageContent = ({ children,leftColumn,rightColumn, image, direction }) => {
  return (
    <>
      <div className={style.imageContent}>
        <div className="container">
          <div className="row align-items-center">
            <div className={`col-${leftColumn}`}>
              {children}
            </div>
            <div className={`col-${rightColumn}`}>
              <Image src={image} alt="an image"></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageContent