import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return(
        <input type="text" className='userInput' value={props.username} onChange={props.changeInput} />
    )
}
export default UserInput;