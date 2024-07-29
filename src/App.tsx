import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Ferramentas from './containers/Ferramentas'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        
        <main>          
          <Sobre />
          <Ferramentas />
          <Projetos />
          
        </main>
        
      </Container>
      
    </> 
  )
}

export default App
