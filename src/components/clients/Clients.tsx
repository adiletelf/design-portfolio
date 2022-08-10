import './clients.css'
import airbnb from '../../assets/airbnb.png'
import fedex from '../../assets/fedex.png'
import google from '../../assets/google.png'
import microsoft from '../../assets/microsoft.png'

const Clients = () => {
  return (
    <div className="clients" id='clients'>
      <div className='clients-content'>
        <h2><span>Some of the</span> clients I have designed for</h2>
      </div>
      <div className='clients-images'>
        <img src={airbnb} alt='airbnb' />
        <img src={fedex} alt='fedex' />
        <img src={google} alt='google' />
        <img src={microsoft} alt='microsoft' />
      </div>
    </div>
  )
}

export default Clients
