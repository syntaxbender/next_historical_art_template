
import React from 'react'
import style from "./quarter.module.css"
import ButtonSet from "../buttonSet/buttonSet";
import CustomLink from "../customLink";
import ArrowButton from "../arrowButton/arrowButton";
import { BsArrowDown, BsBell } from 'react-icons/bs';
import { HiArrowLongRight } from "react-icons/hi2";
const Quarter = () => {
    return (
        <div className={style.quarterContainer}>
            <div className={style.quarterRow}>
                <div className={style.quarterCol}>
                    <h3 className={style.quarterHeader}>01. Repairing</h3>
                    <p className={style.quarterParagraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam magna neque, ut vulputate tortor porta sit amet. Nullam hendrerit dictum arcu, vitae pretium ipsum. Integer tincidunt nunc ante, ut vulputate augue euismod non. Proin condimentum, diam a sodales dictum, erat purus iaculis lectus, nec posuere ligula velit nec nunc. Curabitur sed elit rutrum, condimentum orci ac, dignissim leo. Proin ornare justo a aliquet congue. Proin vehicula tincidunt lorem vitae porta.
                    </p>
                    <ArrowButton><CustomLink href="#">Details <HiArrowLongRight/></CustomLink></ArrowButton>
                    {/* <ButtonSet classNames="secondary"><Link href="#">Details</Link></ButtonSet> */}
                </div>
                <div className={style.quarterCol}>
                    <h3 className={style.quarterHeader}>02. Sewing</h3>
                    <p className={style.quarterParagraph}>
                    Integer rhoncus purus id volutpat facilisis. In sit amet purus ac est pellentesque elementum vitae eu leo. Integer pulvinar dolor purus, vel porta quam eleifend id. Quisque eros velit, mattis et augue sit amet, egestas tincidunt ex. Donec dignissim scelerisque convallis. Aenean vitae quam justo. Nunc id pellentesque odio. Proin in tellus ut metus ornare tincidunt vel non velit. Aliquam ac massa eget metus aliquet rutrum. Suspendisse semper sodales libero. 
                    </p>
                    <ArrowButton><CustomLink href="#">Details <HiArrowLongRight/></CustomLink></ArrowButton>
                    {/* <ButtonSet classNames="secondary"><Link href="#">Details</Link></ButtonSet> */}
                </div>
                </div>
            <div className={style.quarterRow}>

                <div className={style.quarterCol}>
                    <h3 className={style.quarterHeader}>03. Cleaning</h3>
                    <p className={style.quarterParagraph}>
                    Phasellus convallis est in nisl dignissim finibus. Etiam ullamcorper velit vitae metus vestibulum facilisis. Proin auctor sem nec interdum dapibus. Suspendisse pulvinar dui eu lacus ullamcorper, a posuere odio ornare. Donec erat metus, gravida at est nec, mollis elementum quam. Nullam vestibulum magna porta urna feugiat, dictum ultrices tortor venenatis. In convallis, leo ac pellentesque dictum, tellus urna tempus dolor, eu interdum arcu magna nec ex.</p>
                    <ArrowButton><CustomLink href="#">Details <HiArrowLongRight/></CustomLink></ArrowButton>
                    {/* <ButtonSet classNames="secondary"><Link href="#">Details</Link></ButtonSet> */}
                </div>
                <div className={style.quarterCol}>
                    <h3 className={style.quarterHeader}>04. Removal & Installation</h3>
                    <p className={style.quarterParagraph}>Maecenas vel odio elementum, facilisis odio a, mattis ex. Sed nec lectus mattis, molestie tellus at, elementum velit. Fusce scelerisque iaculis ullamcorper. Nulla lectus metus, dignissim efficitur diam eu, efficitur porta tortor. Phasellus posuere vestibulum euismod. Sed iaculis massa tellus, quis pulvinar sem vehicula sit amet. Pellentesque vitae viverra arcu. Maecenas ultricies sapien ultrices ex pulvinar semper. Suspendisse sodales quam sit amet odio interdum posuere.</p>
                    <ArrowButton><CustomLink href="#">Details <HiArrowLongRight/></CustomLink></ArrowButton>
                    {/* <ButtonSet classNames="secondary"><Link href="#">Details</Link></ButtonSet> */}
                </div>
            </div>
        </div>
    )
}

export default Quarter