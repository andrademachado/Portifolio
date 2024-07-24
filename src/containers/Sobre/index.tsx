import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

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
    </section>
)

export default Sobre