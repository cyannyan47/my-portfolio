import { ReactComponent as GithubLogo } from '../assets/github.svg'
import { ReactComponent as LinkedInLogo} from '../assets/linkedin.svg'
const Footer = () => {
    return (
        <div className="footer">    
            <a href="https://github.com/cyannyan47">
                <GithubLogo className="SMLogo" />
            </a>
            <a href="https://www.linkedin.com/in/minhdinh98/">
                <LinkedInLogo className="SMLogo" />
            </a>
        </div>
    )
}

export default Footer
