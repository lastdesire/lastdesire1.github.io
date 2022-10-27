import React from 'react'

import "../App.css"
import Photo from "../photo.png";

const About = () => {
    return (
        <div className="about_me_text" color="white">
            <img className="photo_style" alt="fireSpot" src={Photo}/>
            <div>{"\n"} • About me: Gagin Artur{"\n"}</div>
            <div> • 19 years old, studying at SPbU, SE.{"\n"}</div>
            <div> • I've been studying programming since I was 16.{"\n"}</div>
            <div> • During this time, I managed to work with the{"\n"}</div>
            <div> following programming languages and libraries:{"\n"}</div>
            <div> • C, C++, C#, Delphi, Python, OCaml, JS (React).{"\n"}</div>
            <div> • Now I am studying OCaml and the ReactJS library more deeply. </div>
        </div>

    );
}
export default About;
