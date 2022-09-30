import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import Header from './components/header/Header';
import { useEffect, useState } from 'react';
import Exercise from './components/exercise/Exercise';
import Aside from './components/aside/Aside';
import Details from './components/Details/Details';
import Duration from './components/duration/Duration';
// import Duration from './components/duration/Duration';

function App() {
  const [activities, setActivities] = useState([]);
  const [time, setTime] =useState([]);
  useEffect( ()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data =>{
      setActivities(data);
     
    })
  },[])
  

  const increaseTime = (selected)=>{
      console.log('clicked');
      // const clickedActivity = activities.map(activity => activity.id ===id);
    //  { <Details data={selected}></Details>}
    const newTime = [...time, selected];
    setTime(newTime);
    // <Aside calc={time}></Aside>
    
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
      <div className='aside-bg'>
        <div className='individual'>
            <div className='img-container'>
            <img src="https://media.istockphoto.com/photos/showing-off-his-pearly-whites-picture-id483627817?k=20&m=483627817&s=612x612&w=0&h=R409voaCnWc13mymea1LLd8U9kRjiRDCoITw1srPVAA=" alt="" />  
            </div>
            <div>
            <p className='name'>Kevin Jonas</p>
            <FontAwesomeIcon icon={faLocationDot} ></FontAwesomeIcon>

            <small>Sydney, Australia</small>
            </div>
        </div>

        <div className='measurements'>
        <p>75<small>kg</small></p>
        <p>6.5</p>
        <p>25<small>years</small></p>
        <small>Weight</small>
        <small>Height</small>
        <small>Age</small>
            
        </div>
        <Duration></Duration>
        <Details timeIncrement={increaseTime}></Details>
        </div><Aside>

      </Aside>
     

    </div>
  );
}

export default App;
// export {increaseTime};
