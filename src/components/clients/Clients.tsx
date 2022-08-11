import React from 'react'
import {
  airbnb, airbnbColored,
  fedex, fedexColored,
  google, googleColored,
  microsoft, microsoftColored
} from './imports'
import './clients.css'

const handleImage = (image: string, coloredImage: string) => {
  return {
    src: image,
    onMouseMove: (e: React.MouseEvent<HTMLImageElement>) => { e.currentTarget.src = coloredImage },
    onMouseOut: (e: React.MouseEvent<HTMLImageElement>) => { e.currentTarget.src = image }
  }
}

const airbnbProps = handleImage(airbnb, airbnbColored)
const fedexProps = handleImage(fedex, fedexColored)
const googleProps = handleImage(google, googleColored)
const microsoftProps = handleImage(microsoft, microsoftColored)

const Clients = () => {
  return (
    <div className="clients" id='clients'>
      <div className='clients-content'>
        <h2><span>Some of the</span> clients I have designed for</h2>
      </div>
      <div className='clients-images'>
        <img {...airbnbProps} alt='airbnb' />
        <img {...fedexProps} alt='fedex' />
        <img {...googleProps} alt='google' />
        <img {...microsoftProps} alt='microsoft' />
      </div>
    </div>
  )
}

export default Clients
