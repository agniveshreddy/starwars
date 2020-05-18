import React, {memo} from 'react';

const Planet = memo(({name, onClick, key}) => {
    return(<div 
        key={key}
        onClick={onClick}>
        {name}
    </div>);
});

export default Planet;