import { Icon } from "./styles"
import { Contact } from "./styles"
import Linkedin from '../img/linkedin_3992606.png'
import Gmail from '../img/mail_15407566.png'

const Ferramentas = () => {
    return (
        <>
            <Icon>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/less/less-plain-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gulp/gulp-plain.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg" />
            </Icon>
            <h3>Contato</h3>
            <Contact>
                <a href="https://www.linkedin.com/in/l%C3%ADgia-andrade-de-paula/" rel="nofollow">
                    <img src={Linkedin} />
                </a>
                <a href="mailto:codarfull@gmail.com">
                    <img src={Gmail} />
                </a>
            </Contact>

        </>
        
        
    )
        
}

export default Ferramentas