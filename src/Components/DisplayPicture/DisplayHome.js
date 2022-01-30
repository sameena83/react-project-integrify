import React from 'react';
import DisplayCard from './DisplayCard';

function DisplayHome(props) {
    return (
        <div>
            <DisplayCard info={props.userInfo} />
            
            
        </div>
    );
}

export default DisplayHome;