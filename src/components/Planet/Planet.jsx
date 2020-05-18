import React, {memo} from 'react';
import './Planet.scss';


const Planet = memo(({name, onClick, key, className}) => {
    const combinedClassNames = 'planet '+ className;
    return(
        
        <div className={combinedClassNames}
            key={key}
            onClick={onClick}>
            {name}
        </div>
    );
});

export default Planet;