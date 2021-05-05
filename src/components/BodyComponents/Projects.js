import {Card, CardDeck} from 'react-bootstrap'

const Projects = () => {
    const cardList = [
        {title: "Embedded peer-to-peer text chat", text: "ENSC 452"},
        {title: "AES-128 core integration", text: "ENSC 450"},
        {title: "Movie Recommendation System", text: "nwHacks 2021"},
    ]

    const renderCard = (card, index) => {
        return (
            <Card style={{ maxWidth: '250px', minHeight: '100px' }} key={index} className="box">
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                </Card.Body>
            </Card>
        )
    }

    return (
        <div>
            <h1>Projects</h1>
            <CardDeck style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', width: '100%'}} className="grid">{cardList.map(renderCard)}</CardDeck>
        </div>
    )
}

export default Projects
