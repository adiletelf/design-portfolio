import logo from '../../assets/logo.png'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className="navbar-links">
        <h2><a href='#home' className='hover-underline-animation'>Home</a></h2>
        <h2><a href='#skills' className='hover-underline-animation'>Skills</a></h2>
        <h2><a href='#about' className='hover-underline-animation'>About</a></h2>
      </div>
    </div>
  )
}

export default Navbar
