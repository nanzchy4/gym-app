import React from 'react';
import './Aside.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';

const Aside = () => {
    return (
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
    );
};

export default Aside;