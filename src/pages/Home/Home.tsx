import imgGirl from "../../assets/girl.webp";
import logo from "../../assets/logo.svg";
import imgBoy from "../../assets/boy.webp";
import "./Home.scss";
import HeroBannerHome from "../../molecules/HeroBannerHome/HeroBannerHome";
import Slider from "../../atoms/Slider/Slider";

const Home = () => {
    return (
        <div className="hero">
            <div className="container">
                <header className="header-container">
                    <img className="logo" src={logo} alt="logo" />
                </header>
                <HeroBannerHome bannerImage1={imgGirl} bannerImage2={imgBoy} />
                <Slider />
            </div>
        </div>
    );
};

export default Home;
