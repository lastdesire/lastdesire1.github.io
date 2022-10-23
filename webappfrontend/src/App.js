import './App.css';
import Main from './pages/Main'
import About from './pages/About'
import Messages from './pages/Messages'
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import {CSSTransition} from 'react-transition-group';
import audio from "./music.mp3";
import video from "./video.mp4";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleQuestion, faHouse, faCirclePlay, faComments} from "@fortawesome/free-solid-svg-icons"
import React from 'react'
import gifStartImage from "./kiminonawa.gif"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

    const routes = [
        {path: '/', Component: Main},
        {path: '/about', Component: About},
        {path: '/messages', Component: Messages}
    ]

    const audioTune = new Audio(audio);

    // variable to play audio in loop
    const [playInLoop, setPlayInLoop] = useState(true);

    // load audio file on component load
    useEffect(() => {
        audioTune.load();
    }, [])

    // set the loop of audio tune
    useEffect(() => {
        audioTune.loop = playInLoop;
    }, [playInLoop])


    let isMusicTurned = false

    // play audio sound
    const playSound = () => {
        if (!isMusicTurned) {
            audioTune.play();
            isMusicTurned = true;
            return;
        }
        isMusicTurned = false;
        audioTune.pause();
    }




    return (

        <BrowserRouter>

            <img alt='' id='start_image_id' className="start_image" src={gifStartImage}/>

            <div className="start_text" id="start_text_id" style={{color: "white"}}>Press to start</div>
            <FontAwesomeIcon id='start_button_id' className="start_button" color="white" icon={faCirclePlay}
                             onClick={() => {
                                 let firstElem = document.getElementById('start_image_id');
                                 firstElem.style.opacity = "0";
                                 firstElem.style.zIndex = "-999998";
                                 let secondElem = document.getElementById('start_button_id');
                                 secondElem.style.display = "none";
                                 let thirdElem = document.getElementById('start_text_id');

                                 thirdElem.style.display = "none";
                                 playSound();
                             }}
            />


            <div className="App">

                <div>
                    <video className='videoTag' autoPlay loop muted>
                        <source src={video} type='video/mp4'/>
                    </video>
                </div>


                <button className="button_music" onClick={playSound}></button>


            </div>


            <div className="app">
                <div className="div">

                    <NavLink to="/"> <FontAwesomeIcon className="about_me_icon" color="white" icon={faHouse}/></NavLink>
                    <NavLink to="/about"> <FontAwesomeIcon className="from_about_me_to_main_icon" color="white"
                                                           icon={faCircleQuestion}/></NavLink>
                    <NavLink to="/messages"><FontAwesomeIcon className="messages_icon" color="white"
                        icon={faComments}/></NavLink>

                </div>
                {routes.map(({path, Component}) =>
                    <Route key={path} exact path={path}>
                        {({match}) =>
                            <CSSTransition
                                timeout={1000}
                                classNames="page"
                                unmountOnExit
                                in={match != null}

                            >
                                <Component/>
                            </CSSTransition>
                        }
                    </Route>
                )}
            </div>

        </BrowserRouter>);
}

export default App;
