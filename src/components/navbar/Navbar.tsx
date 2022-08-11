import logo from '../../assets/logo.png'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='navbar-links'>
        <h2><a href='#home' className='underline-animation'>Home</a></h2>
        <h2><a href='#clients' className='underline-animation'>Clients</a></h2>
        <h2><a href='#work' className='underline-animation'>Work</a></h2>
        <h2><a href='#about' className='underline-animation'>About</a></h2>
        <h2><a href='#contact' className='underline-animation'>Contact</a></h2>
      </div>
    </div>
  )
}

export default Navbar
