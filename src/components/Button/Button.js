import React from 'react';

const Button = ({handler,children}) => {
    return (
        
            <button onClick={handler} type="button" class="btn btn-primary mb-2">
                {children}
            </button>
       
    );
};

export default Button;