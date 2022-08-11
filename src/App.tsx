import './App.css'
import { Navbar, Home, Clients, Work, About } from './components'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Clients />
      <Work />
      <About />
    </div>
  )
}

export default App
