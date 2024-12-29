import photo1 from "../../../../public/images/13058.jpg";
import photo2 from "../../../../public/images/23635.jpg";
import photo3 from "../../../../public/images/2148970772.jpg";
import Image from 'next/image';
import style from "./timeline.module.css"
const Timeline = () => {
  return (
    <div className="container">
      <div className="row">
        <div className={`col-lg-9 col-12 ${style.text}`}>
        <p>Phasellus facilisis odio non felis malesuada mollis. Integer efficitur volutpat felis, sed ultrices nunc gravida hendrerit. Mauris faucibus eros congue tortor viverra suscipit. Maecenas luctus tempor magna a molestie. Proin eget euismod justo. Fusce viverra tincidunt mauris quis laoreet. Quisque dignissim nulla ante. Nunc quis eleifend mauris. Vestibulum et turpis eros. Pellentesque elementum faucibus velit a venenatis.</p>
        </div>
        <div className={`col-lg-3 col-12 ${style.media}`}>
        <Image src={photo3} alt="about1" />

        {/* <video autoPlay loop muted>
          <source src="/videos/aboutus.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        </div>
      </div>
      <div className="row">
        <div className={`col-lg-9 col-12 ${style.text}`}>
        <p>Donec rhoncus ornare lacus, sit amet vestibulum justo porta sit amet. Duis tristique ipsum magna, et faucibus neque blandit ut. Nullam euismod lobortis tortor, ac pulvinar massa tincidunt egestas. Donec eleifend porta purus id blandit. Mauris non iaculis odio. Sed sed elit scelerisque, tempus purus quis, viverra quam. Phasellus blandit ante id ligula fermentum, ullamcorper molestie nisl porta. Ut imperdiet, tellus ac ullamcorper blandit, sem enim hendrerit lacus, eu mollis neque est sit amet dui. </p>
        </div>
        <div className={`col-lg-3 col-12 ${style.media}`}>
          <Image src={photo1} alt="about2" />
        </div>
      </div>
      <div className="row">
        <div className={`col-lg-9 col-12 ${style.text}`}>
        <p>Donec rhoncus ornare lacus, sit amet vestibulum justo porta sit amet. Duis tristique ipsum magna, et faucibus neque blandit ut. Nullam euismod lobortis tortor, ac pulvinar massa tincidunt egestas. Donec eleifend porta purus id blandit. Mauris non iaculis odio. Sed sed elit scelerisque, tempus purus quis, viverra quam. Phasellus blandit ante id ligula fermentum, ullamcorper molestie nisl porta. Ut imperdiet, tellus ac ullamcorper blandit, sem enim hendrerit lacus, eu mollis neque est sit amet dui. Suspendisse potenti. Aliquam erat volutpat. Donec in dapibus sapien. Mauris feugiat feugiat ultricies. Sed cursus vehicula felis nec tristique. Aenean sit amet diam a mi maximus eleifend eget facilisis tellus.</p>
        </div>
        <div className={`col-lg-3 col-12 ${style.media}`}>
          <Image src={photo2} alt="about3" />
        </div>
      </div>
    </div>
  )
}

export default Timeline