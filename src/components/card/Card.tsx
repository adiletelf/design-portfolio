import React from 'react'
import './card.css'

type Props = {
  reverseDirection: boolean;
  image: string;
  title: string;
  text: string;
  overview: string;
}

const Card = ({ reverseDirection, image, title, text, overview }: Props) => {
  const style = {
    flexDirection: reverseDirection ? '' : 'row-reverse'
  } as React.CSSProperties

  return (
    <div className='card' style={style}>
      <div className='card-logo'>
        <img src={image} alt={title} />
      </div>
      <div className='card-content'>
        <h4>{title}</h4>
        <h2>{text}</h2>
        <p>{overview}</p>
      </div>
      <button type='button'>
        View Work <span>&gt;</span>
      </button>
    </div>
  )
}

export default Card
