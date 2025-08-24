import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({ title}) => {


  const [hasliked, setHasliked] = useState(false)
  return(
    <div className='card' >
     <h2>{title}</h2>
     <button onClick={() => setHasliked(!hasliked)}>
      {hasliked ? '❤️' : '🤍'}
     </button>
     
    </div>
  )
}

const  App = () => {

  return(
    <div> 
      <div className="card-container"></div>
      <Card title="Inception" rating={0.5} actors={[{name:'Actors'}]}/>
      <Card title="Interstellar"/>
      <Card title="The Dark Knight"/>
     
    </div>
  )
  
}
export default App
