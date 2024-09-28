import { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import "./Slider.scss";

interface SliderProps {
    sliderData: Array<{ image: string; text: string }>;
}

const Slider = ({ sliderData }: SliderProps) => {
    useEffect(() => {
        let timer = null;

        timer = setInterval(() => {
            let items = document.querySelectorAll(".item");
            const slide = document.querySelector(".slide");
            if (slide) {
                slide.appendChild(items[0]);
            }
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="sliderWrapper">
            <div className="sliderContaniner">
                <div className="slide">
                    {sliderData.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="item"
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                }}
                            >
                                <div className="content">
                                    <Button>{item.text}</Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Slider;
