import imgGirl from "../../assets/girl.webp";
import logo from "../../assets/logo.svg";
import imgBoy from "../../assets/boy.webp";
import "./Home.scss";
import HeroBannerHome from "../../molecules/HeroBannerHome/HeroBannerHome";
import Slider from "../../atoms/Slider/Slider";
import sliderImg1 from "../../assets/sliderImg1.webp";
import sliderImg2 from "../../assets/sliderImg2.webp";
import sliderImg3 from "../../assets/sliderImg3.webp";
import sliderImg4 from "../../assets/sliderImg4.webp";
import sliderImg5 from "../../assets/sliderImg5.webp";
import sliderImg6 from "../../assets/sliderImg6.webp";

const Home = () => {
    const sliderData = [
        {
            image: sliderImg1,
            text: "Explore Now",
        },
        {
            image: sliderImg2,
            text: "Explore Now",
        },
        {
            image: sliderImg3,
            text: "Explore Now",
        },
        {
            image: sliderImg4,
            text: "Explore Now",
        },
        {
            image: sliderImg5,
            text: "Explore Now",
        },
        {
            image: sliderImg6,
            text: "Explore Now",
        },
    ];
    return (
        <div className="hero">
            <div className="container">
                <header className="header-container">
                    <img className="logo" src={logo} alt="logo" />
                </header>
                <HeroBannerHome bannerImage1={imgGirl} bannerImage2={imgBoy} />
                <Slider sliderData={sliderData} />
            </div>
        </div>
    );
};

export default Home;
