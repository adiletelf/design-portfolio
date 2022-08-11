import './about.css'
import aboutVertical from '../../assets/about-vertical.png'
import aboutCover from '../../assets/about-cover.png'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about-content'>
        <h2>A bit about me</h2>
        <h1>
          <span>I am a UI/UX designer who is passionate about creating</span> beautiful and jouful digital experiences.
          Besides Design, I love music, games and travelling.
        </h1>
      </div>
      <div className='about-images'>
        <img src={aboutCover} alt='Cover' />
        <img src={aboutVertical} alt='Vertical' />
      </div>
    </div>
  )
}

export default About
