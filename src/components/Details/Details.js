import React from 'react';
import './Details.css';
// import '../../App';

const Details = (props) => {
    console.log(props.timeIncrement);
    let initialTime =0;
    props.timeIncrement.map(item => {
       initialTime = initialTime+ item.time;
    })
    return (
        <div className='timeCalculator'>
            <div>
            <h3>Excercise Details</h3>
            <p>Exercise Time: {initialTime}</p>
            <p>Break Time</p>
        </div>
        </div>
    );
};

export default Details;