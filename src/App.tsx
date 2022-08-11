import './App.css'
import { Navbar, Home, Clients, Work, About, Contact } from './components'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Clients />
      <Work />
      <About />
      <Contact />
    </div>
  )
}

export default App
