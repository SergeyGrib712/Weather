import React from 'react';

type TWhen = { condition: any, };

const When: React.FC<TWhen> = ({ children, condition }) => {
    return <>{condition ? children : null}</>;
}

export default When;
