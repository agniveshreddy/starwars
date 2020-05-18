import React, {memo} from 'react';

const Planet = memo(({name, onClick}) => {
    return(<div onclick={onClick}>
        {name}
    </div>);
});

export default Planet;