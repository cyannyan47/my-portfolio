import React from 'react'
import picMe from '../../assets/me.jpg'
import ReactRoundedImage from "react-rounded-image";

const AboutMe = () => {
    return (
        <div className="aboutMeContainer">
            <h1>About Me</h1>
            <div style={{ marginLeft: '30px' }} className="aboutMe">
                <div >
                    <ReactRoundedImage image={picMe} />
                </div>
                <div className="aboutMeContent">
                    <p>Hi, I'm Minh Dinh, a senior Computer Engineering student from Simon Fraser University. I am originally from Vietnam, but now I am based in Vancouver, BC, Canada. Nice to meet you</p>
                    <p>Hobbies: Rhythm games, TFT, Learning a new language, VTubers</p>
                    <p>My music: Classical music, Jazz, JPop, Techno, Rock, Metal, Jojo references</p>
                    <p>What I see myself five years ahead: Be able to speak four languages, have a girlfriend while simping vtubers. But for real, I want to improve myself so that five years later, I'm able to look back and say "You really are a better person now, you had been trying and training your best"</p>
                    <p>My plan to get there: Get a job and grind the monies :))</p>
                    <p>What's my main: Bard</p>
                </div>
                
            </div>
        </div>
    )
}

export default AboutMe
