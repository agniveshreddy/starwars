import React, {memo} from 'react';
import './Legend.scss';

const Legend = memo((props) => {
    return(
        <div className='legendContainer'>
            Legend:<br></br>
            <div></div> High population<br></br>
            |<br></br>
            <div></div> Low population<br></br>
            <div></div> population Unknown<br></br>
        </div>
    );
});

export default Legend;