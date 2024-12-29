import React from 'react'
import Header from '../components/header/header'
import CustomHeading from "../components/customHeading/customHeading";
import CustomParagraph from "../components/customParagraph/customParagraph";
import Quarter from "../components/quarter/quarter";
import Image from 'next/image';
import curtain1 from "../../../public/images/curtain5.jpg"
import curtain2 from "../../../public/images/curtain6.jpg"
import style from "./page.module.css"
const Services = () => {
    return (
        <>
            <Header title="Our Services" />
            <section className="section">
                <div className="container">
                    <CustomHeading classNames="center">
                        <h2>Crafted Exclusively for You</h2>
                        <h1>Elegance in Art and Bespoke Design</h1>
                    </CustomHeading>
                    <CustomParagraph>
                        <p>Donec rhoncus ornare lacus, sit amet vestibulum justo porta sit amet. Duis tristique ipsum magna, et faucibus neque blandit ut. Nullam euismod lobortis tortor, ac pulvinar massa tincidunt egestas. Donec eleifend porta purus id blandit. Mauris non iaculis odio. Sed sed elit scelerisque, tempus purus quis, viverra quam. Phasellus blandit ante id ligula fermentum, ullamcorper molestie nisl porta. Ut imperdiet, tellus ac ullamcorper blandit, sem enim hendrerit lacus, eu mollis neque est sit amet dui. Suspendisse potenti. Aliquam erat volutpat. Donec in dapibus sapien. Mauris feugiat feugiat ultricies. Sed cursus vehicula felis nec tristique. Aenean sit amet diam a mi maximus eleifend eget facilisis tellus.</p>

                        <p>Ut sit amet nisi lectus. Nulla facilisi. Integer at maximus leo. Donec vitae viverra est, et posuere dui. Pellentesque sit amet ipsum nulla. Curabitur imperdiet velit elementum augue dapibus, aliquam maximus dolor fringilla. Phasellus fringilla ultrices tempus. In euismod dolor et pulvinar aliquet. Ut molestie in erat ac eleifend. Donec sed ullamcorper enim. Sed vitae pellentesque lorem, et aliquam urna. Pellentesque vel nisi ultricies, mollis nibh sollicitudin, pharetra nulla. Aliquam sed maximus magna, sed pretium neque. Ut a fringilla augue. Duis eu dolor quis sem ultricies sodales sed at orci. Aliquam eget fringilla tellus. Nunc sodales scelerisque erat ac imperdiet. Sed eu luctus ipsum, vitae fringilla diam. Nulla placerat ultricies quam non semper.</p>
                    </CustomParagraph>
                    <div className={`${style.imageContainer} row justify-content-center`}>
                        <div className="col-6">
                            <Image className={style.servicesImg} src={curtain1} />
                        </div>
                        <div className="col-6">
                            <Image className={style.servicesImg} src={curtain2} />
                        </div>
                    </div>
                    <Quarter />
                </div>
            </section>
        </>
    )
}

export default Services