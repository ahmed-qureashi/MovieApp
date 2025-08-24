import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({ title}) => {

  const [count, setCount] = useState(0);
  const [hasliked, setHasliked] = useState(false);
  useEffect(() => {
    console.log(`${title} has been liked:${hasliked}`);
  }, [hasliked]);
  

  return(
    <div className="card" onClick={() => setCount(count+1)} >
     <h2>{title}<br/>{count ||null}</h2>
     <button onClick={() => setHasliked(!hasliked)}>
      {hasliked ? '❤️' : '🤍'}
     </button>
     
    </div>
  )
}

const App = () => {
  return(
    <div> 
      <div className="card-container">
        <Card title="Inception" rating={0.5} actors={[{name:'Actors'}]}/>
        <Card title="Interstellar"/>
        <Card title="The Dark Knight"/>
      </div>
    </div>
  )
}
export default App
