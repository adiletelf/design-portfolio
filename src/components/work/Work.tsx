import Card from '../card/Card'
import cards from './imports'
import './work.css'

const Work = () => {
  return (
    <div className='work' id='work'>
      <div className='work-content'>
        <h2><span>Selected</span> Works</h2>
      </div>
      <div className='work-cards'>
        {cards.map((card, index) => (
          <Card key={index} reverseDirection={index % 2 === 0} {...card} />
        ))}
      </div>
    </div>
  )
}

export default Work
