import './App.css';
import video from './video.mp4';
import {Text, View} from 'react-native';
import {useEffect, useRef, useState} from "react";
import audio from './music.mp3'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCircleQuestion} from "@fortawesome/free-solid-svg-icons"
import {faGithub, faTelegram, faDiscord} from '@fortawesome/free-brands-svg-icons'


function App() {

    // use Audio constructor to create HTMLAudioElement
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
        <div className="App">

            <div>
                <video className='videoTag' autoPlay loop muted>
                    <source src={video} type='video/mp4'/>
                </video>
            </div>


            <button className="button_music" onClick={playSound}></button>


            <h1 className="name_text" style={{color: "white"}}>lastdesire</h1>


            <a href={"https://github.com/lastdesire"}>
                <FontAwesomeIcon className="github_icon" color="white" icon={faGithub}/>
            </a>
            <a href={"https://t.me/lastdesir3"}>
                <FontAwesomeIcon className="telegram_icon" color="white" icon={faTelegram}/>
            </a>

            <a href={"https://discordapp.com/users/899249601251532850"}>
                <FontAwesomeIcon className="discord_icon" color="white" icon={faDiscord}/>
            </a>

            <a href={"./about"}>
                <FontAwesomeIcon className="about_me_icon" color="white" icon={faCircleQuestion}/>
            </a>
        </div>

    );
}


export default App;
