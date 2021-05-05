import {Card, CardDeck} from 'react-bootstrap'
import microchip from '../../assets/microchip.png'
import gluwa from '../../assets/Gluwa.jpg'

const WorkExperiences = () => {
    const cardList = [
        {image: microchip, title: "Microchip Technology Inc.", text: "System Verification Engineer"},
        {image: gluwa, title: "Gluwa Inc.", text: "QA Analyst"},
    ]

    const renderCard = (card, index) => {
        return (
            <Card style={{ maxWidth: '200px' }} key={index} className="box">
                <Card.Img variant="top" src={card.image} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
    return (
        <div>
            <h1>Work Experiences</h1>
            <CardDeck style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', width: '100%'}} className="grid">{cardList.map(renderCard)}</CardDeck>
        </div>
    )
}

export default WorkExperiences
