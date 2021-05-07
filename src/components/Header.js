import PropTypes from 'prop-types'

import { ReactComponent as GithubLogo } from '../assets/github.svg'
import { ReactComponent as LinkedInLogo} from '../assets/linkedin.svg'
import { ReactComponent as FacebookLogo} from '../assets/facebook.svg'

const Header = ({ name }) => {

    return (
        <div className='header'>
            <h1 className="logo">{name}</h1>
            
            <div className="header-right">
                <a href="https://www.facebook.com/minh.dinhquang.923/">
                    <FacebookLogo className="SMLogo" />
                </a>
                <a href="https://github.com/cyannyan47">
                    <GithubLogo className="SMLogo" />
                </a>
                <a href="https://www.linkedin.com/in/minhdinh98/">
                    <LinkedInLogo className="SMLogo" />
                </a>
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
