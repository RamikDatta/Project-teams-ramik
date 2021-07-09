import React from "react";
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
const { v4: uuidv4 } = require('uuid');



const urlid = uuidv4();

export const UrlId = () => {

    return urlid;

};


const CreateRoom = (props) => {
    const history = useHistory();
    function handleRoomButtonPressed() {
        
        history.push(`/${urlid}`);
    
    };
    return (
        <div>
            <button onClick={handleRoomButtonPressed}>Let's Start</button>
        </div>
    );
};





export default CreateRoom;