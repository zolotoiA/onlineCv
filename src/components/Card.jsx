import React, {useState} from "react";
import profilePic from '../img/channel-1.jpeg';

function Card() {

    return (
        <div className="grid-container">

            <div className="card">
                <img className="card-image" src={profilePic} alt="profile picture"/>
                <h2 className="card-title">Hi Bro</h2>
                <p className="card-text">this is my own site</p>
            </div>
            <div className="card">
                <img className="card-image" src={profilePic} alt="profile picture"/>
                <h2 className="card-title">Hi Bro</h2>
                <p className="card-text">this is my own site</p>
            </div>
            <div className="card">
                <img className="card-image" src={profilePic} alt="profile picture"/>
                <h2 className="card-title">Hi Bro</h2>
                <p className="card-text">this is my own site</p>
            </div>
        </div>
    )
        ;
}

export default Card;