import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ name }) => {
    const onClick = () => {
        console.log("Button pressed")
    }

    return (
        <div className='header'>
            <h1 className="logo">{name}</h1>
            <div className="header-right">
                <Button onClick={onClick} text={"HOME"} />
                <Button onClick={onClick} text={"CONTACT ME"} />
            </div>
        </div>
    )
}

Header.defaultProps = {
    name : 'MD'
}

Header.propTypes = {
    name : PropTypes.string,
}

export default Header
