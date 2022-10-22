import React from 'react'

import "../App.css"
import Photo from "../photo.png";

const About = () => {
    return (
        <div className="about_me_text page" color="white">
            <img src={Photo} className="photo_style" alt="fireSpot"/>
            <h1> • About me: Gagin Artur</h1>
            <h1> • 19 years old, studying at SPbU, SE.</h1>
            <h1> • I've been studying programming since I was 16.</h1>
            <h1> • During this time, I managed to work with the following programming</h1>
            <h1> languages (at different levels):</h1>
            <h1> • C, C++, C#, Delphi, Python, OCaml, JS (React).</h1>
            <h1> • At the moment, I am studying OCaml and the ReactJS library more deeply. </h1>
        </div>

    );
}
export default About;
