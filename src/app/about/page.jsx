import Header from "../components/header/header";
import CustomHeading from "../components/customHeading/customHeading";
import Timeline from "../components/timeline/timeline";
export default function About() {
    return (
        <>
            {/* <MainBanner /> */}
            <Header title="About Us" />
            <section className="section">

                <div className="container">
                            <CustomHeading>
                                <h2>Harmony of Art</h2>
                                <h1>Art & Experiences & Scissors</h1>
                            </CustomHeading>
                            <Timeline />
                </div>
            </section>
        </>
    );
}
