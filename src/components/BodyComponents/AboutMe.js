import React from 'react'
import picMe from '../../assets/me.jpg'
import ReactRoundedImage from "react-rounded-image";
import {Card} from 'react-bootstrap'

const AboutMe = () => {
    return (
        <div className="aboutMeContainer">
            <h1>About Me</h1>
            <div className="aboutMe">
                <div className="aboutMePic">
                    <ReactRoundedImage image={picMe} hoverColor="#00FFBF"/>
                </div>
                <div className="aboutMeContent">
                    <Card>
                        <Card.Body>
                            <p>Hi, I'm Minh Dinh, a senior Computer Engineering student from Simon Fraser University. Nice to meet you</p>
                            <p><b>Hobbies:</b> Rhythm games, Soccer, Learning a new language, VTubers</p>
                            <p><b>My music:</b> Classical music, Jazz, JPop, Techno, Rock, Metal, Jojo references</p>
                            <p><b>What I see myself five years ahead:</b> Be able to speak four languages and have a girlfriend while simping vtubers. But for real, I want to improve myself so that five years later, I'm able to look back and say "You really are a better person than you were, you had been trying your best. Well done"</p>
                            <p><b>My plan to get there:</b> Get a job and grind the monies :))</p>
                        </Card.Body>
                    </Card>
                </div>
                
            </div>
        </div>
    )
}

export default AboutMe
