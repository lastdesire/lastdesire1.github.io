import React from 'react'
import "../App.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub, faTelegram} from "@fortawesome/free-brands-svg-icons";
const Main = () =>
{
    return (
        <div className="page " style={{color: "white"}}>

            <span className="name_text" >lastdesire</span>

            <a href={"https://github.com/lastdesire"}>
                <FontAwesomeIcon className="github_icon" color="white" icon={faGithub}/>
            </a>
            <a href={"https://t.me/lastdesir3"}>
                <FontAwesomeIcon className="telegram_icon" color="white" icon={faTelegram}/>
            </a>

            <a href={"https://discordapp.com/users/899249601251532850"}>
                <FontAwesomeIcon className="discord_icon" color="white" icon={faDiscord}/>
            </a>

        </div>
    );
}
export default Main;
