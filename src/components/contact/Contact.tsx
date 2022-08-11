import {
  mail, mailFull,
  behance, behanceFull,
  dribble, dribbleFull,
  linkedin, linkedinFull
} from './imports'
import { handleImage } from '../../util/handleImage'
import './contact.css'

const mailProps = handleImage(mail, mailFull)
const behanceProps = handleImage(behance, behanceFull)
const dribbleProps = handleImage(dribble, dribbleFull)
const linkedinProps = handleImage(linkedin, linkedinFull)

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className='contact-heading'>
        <h1>Get <span>in Touch.</span></h1>
        <p>So that we can talk more about...</p>
      </div>
      <div className='contact-links'>
        <a href='#'><img {...mailProps} alt='Mail' /></a>
        <a href='#'><img {...behanceProps} alt='Behance' /></a>
        <a href='#'><img {...dribbleProps} alt='Dribble' /></a>
        <a href='https://www.linkedin.com/in/adiletelf/'><img {...linkedinProps} alt='Linkedin' /></a>
      </div>
      <div className='contact-footer'>
        Made with <span id='heart'>&#10084;</span> by <a href='https://github.com/adiletelf' className='underline-animation'>adiletelf</a>
      </div>
    </div>
  )
}

export default Contact
