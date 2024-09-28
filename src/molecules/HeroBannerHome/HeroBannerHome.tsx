import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

import arrow from "../../assets/arrow-right.svg";

interface HeroBannerHomeProps {
    bannerImage1: string;
    bannerImage2: string;
}

const HeroBannerHome = ({
    bannerImage1,
    bannerImage2,
}: HeroBannerHomeProps) => {
    let app = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        let context = gsap.context(() => {
            const timeline1 = gsap.timeline();
            const timeline2 = gsap.timeline();
            const timeline3 = gsap.timeline();
            timeline1
                .from(["#title-1", "#title-2", "#title-3"], {
                    opacity: 0,
                    y: "+=30",
                    stagger: 0.5,
                    position: "start",
                })
                .from("#text-p", {
                    opacity: 0,
                    y: "+=30",
                    stagger: 0.5,
                });
            timeline2.from("#image-1", {
                opacity: 0,
                y: "+=1280",
                stagger: 0.9,
                ease: "ease-in",
                duration: 1.2,
                delay: 0.2,
            });
            timeline3.from("#image-2", {
                opacity: 0,
                y: "+=1280",
                stagger: 0.9,
                ease: "ease-in",
                duration: 1.2,
                delay: 0.5,
            });
        }, app);

        return () => context.revert();
    }, []);

    return (
        <div className="hero-inner" ref={app}>
            <div className="hero-content">
                <div className="hero-content-inner">
                    <h1>
                        <div className="hero-content-line" id="title-1">
                            <div className="hero-content-line-inner">
                                Your daily dose
                            </div>
                        </div>
                        <div className="hero-content-line" id="title-2">
                            <div className="hero-content-line-inner">
                                of tracking expenses
                            </div>
                        </div>
                        <div className="hero-content-line" id="title-3">
                            <div className="hero-content-line-inner">
                                and budget.
                            </div>
                        </div>
                    </h1>
                    <div id="text-p">
                        <p>
                            From managing your expenses to budgeting your
                            income, we got you covered. Also get insights on
                            your spending habits. All in one.
                        </p>
                        <div className="btn-row" id="btn">
                            <div className="explore-button">
                                Explore
                                <div className="arrow-icon">
                                    <img src={arrow} alt="row" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-images">
                <div className="hero-images-inner">
                    <div className="hero-image girl" id="image-1">
                        <img src={bannerImage1} alt="girl" />
                    </div>
                    <div className="hero-image boy" id="image-2">
                        <img src={bannerImage2} alt="boy" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBannerHome;
