import React from 'react'

import "../App.css"
import Photo from "../photo.png";

const About = () => {
    return (
        <div className="about_me_text" color="white">
            <img src={Photo} className="photo_style" alt="fireSpot"/>
            <span> • About me: Gagin Artur{"\n"}</span>
            <span> • 19 years old, studying at SPbU, SE.{"\n"}</span>
            <span> • I've been studying programming since I was 16.{"\n"}</span>
            <span> • During this time, I managed to work with the{"\n"}</span>
            <span> following programming languages and libraries:{"\n"}</span>
            <span> • C, C++, C#, Delphi, Python, OCaml, JS (React).{"\n"}</span>
            <span> • Now I am studying OCaml and the ReactJS library more deeply. </span>
        </div>

    );
}
export default About;
