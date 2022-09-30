import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    console.log(props.data);
    const {activityName,activityDescription,ageRange,time,img} =props.data;
    // console.log(jpg);
    return (
        <div className='unitA'>
            <img src={img} alt=""></img>
            <h3>{activityName}</h3>
            <p>{activityDescription}</p>
            <h4>For Age: {ageRange}</h4>
            <h4>Time Required: {time}</h4>
            <button>Add To List</button>
        </div>
    );
};

export default Exercise;