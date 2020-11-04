import React from 'react';
import DragAndDropText from '../DragAndDropText/DragAndDropText';
import Timg from '../../img/tshirt.jpg'
import './tshart.css'
const TShart = () => {
    return (
        <div className="tshart-container">
            <img className="tshart-img" src={Timg} alt=""/>
            <DragAndDropText/>
        </div>
    );
};

export default TShart;