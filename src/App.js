import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { useEffect, useState } from 'react';
import Exercise from './components/exercise/Exercise';
import Aside from './components/aside/Aside';

function App() {
  const [activities, setActivities] = useState([]);
  useEffect( ()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data =>{
      setActivities(data);
     
    })
  },[])
  console.log(activities);
  const increaseTime = (id)=>{
    activities.map(activity => activity.id === id)
    <Exercise data={activity}></Exercise>

  }
  return (
    <div className='container'>
      <div className='section'>
      <Header></Header>
      <div className='exerciseList'>
      {
        activities.map(activity => <Exercise data={activity} key={activity.id} handler={increaseTime}></Exercise>)
      }
      </div>
      </div>
      <Aside></Aside>

    </div>
  );
}

export default App;
