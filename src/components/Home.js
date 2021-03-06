import React from "react";
import "../styles/Home.css";
import mine from "../images/profile.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
    const effects = [
        "Glassomorphism",
        "Card Flip",
        "Gradient Movement",
        "Neon Effect",
        "Image Reflection",
        "Neuomorphism",
        "Parallax",
        "Rotating borders",
        "Rotating Image Gallery",
        "Smoke Effect",
        "Smooth Scrolling",
        "Video Inside Text",
    ];
    return (
        <div className="home">
            <h1>This is a cool css-effects and animation site and tutorials</h1>
            <div className="introduction">
                <p>
                    Hi, I'm Ashish Oli, <br />a full-stack web developer
                </p>

                <img
                    src={mine}
                    className="image-profile"
                    alt="Ashish Oli"
                ></img>
            </div>
            <p className="disclaimer-para">
                Don't judge too quickly, The real effects are waiting in.
            </p>

            <div className="card-container">
                {effects.map((effect) => {
                    return (
                        <Link
                            to={effect.toLowerCase()}
                            className="wrapper-link"
                        >
                            <div className="card">{effect}</div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
