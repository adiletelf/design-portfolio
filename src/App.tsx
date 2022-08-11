import './App.css'
import { Navbar, Home, Clients, Work } from './components'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Clients />
      <Work />
    </div>
  )
}

export default App
