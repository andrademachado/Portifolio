import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";
import {Card, LinkBotao } from './styles'




const Projeto = () => {

    return (
        <Card>
            <Titulo>Projeto Lista de tarefas</Titulo>
            <Paragrafo tipo="secundario">listas de tarefas feita com Vue js</Paragrafo>
            <LinkBotao>Visualizar</LinkBotao>
        </Card>
    )

}
    


export default Projeto