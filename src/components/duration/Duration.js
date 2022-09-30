import React from 'react';
import './Duration.css';

const Duration = () => {
    return (
        <div>
            <h3>Add A Break</h3>
            <div className='breakTime'>
                <p><span>10</span>s</p>
                <p><span>20</span>s</p>
                <p><span>30</span>s</p>
                <p><span>40</span>s</p>
                <p><span>50</span>s</p>
            </div>
        </div>
    );
};

export default Duration;