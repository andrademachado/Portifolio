import Titulo from "../../components/Titulo"
import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = ()=> (
    <aside>
        <SidebarContainer>
            <Avatar />
            <Titulo>Lígia Andrade</Titulo>
            <Paragrafo tipo="secundario" fontSize={16}>
                andrademachado
            </Paragrafo>
            <Descricao tipo="principal" fontSize={12}>Full Stack Pythom</Descricao>
            <BotaoTema>Trocar tema</BotaoTema>
        </SidebarContainer>
        
    </aside>
)

export default Sidebar