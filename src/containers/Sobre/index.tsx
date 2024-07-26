import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { Icon } from "./styles";
import { GithubSecao } from "./styles";
import Linkedin from "../img/linkedin_3991775.png";
import Gmail from "../img/mail_15407566.png";
import { Contact } from "./styles";
import { Touch } from "./styles";


const Sobre = () => (
    <section>
        <Titulo fontSize={20}>Sobre mim</Titulo>
        <Paragrafo tipo="principal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolore doloremque tempore. Quo iure corrupti reprehenderit praesentium accusamus mollitia quis ex omnis sint eum, iste illum dolore asperiores ipsam id?

        </Paragrafo>
        <GithubSecao>
            <img src="https://github-readme-stats.vercel.app/api?username=andrademachado&show_icons=true&theme=tokyonight" />
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=andrademachado&layout=compact&langs_count=7&theme=tokyonight" />
        </GithubSecao>
        <Touch>
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
            <h3>Contato :</h3>
            <Contact>                
                <a href="https://www.linkedin.com/in/l%C3%ADgia-andrade-de-paula/" rel="nofollow">
                    <img src={Linkedin} />
                </a>
                <a href="mailto:codarfull@gmail.com">
                    <img src={Gmail} />
                </a>
            </Contact>
        </Touch>       
    </section>
)

export default Sobre












