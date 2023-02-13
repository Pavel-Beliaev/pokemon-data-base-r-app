import React from 'react';
import cl from './inputcustom.module.css'

const InputCustom = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} className={cl.custom}/>
    );
});

export default InputCustom;