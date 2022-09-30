import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDumbbell} from '@fortawesome/free-solid-svg-icons';

import './Header.css'

const Header = () => {

    return (
        
        <div className='header'>
            <FontAwesomeIcon icon={faDumbbell} className="icon"></FontAwesomeIcon>
            <h1>The Fitness Pack</h1>
            <h2>Pick Your Activity</h2>
            
        </div>
    );
};

export default Header;