import './home.css'

const Home = () => {
  return (
    <div className='home' id='home'>
      <div className='home-content'>
        <h1>
          <span>I&apos;m a designer specialising in</span> UI/UX <span>and</span>
          <br />
          Interaction Design
        </h1>
        <div className='arrow-container'>
          <a href='#clients'>
            <div className='chevron'></div>
            <div className='chevron'></div>
            <div className='chevron'></div>
            <span className='text'>Scroll down</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
