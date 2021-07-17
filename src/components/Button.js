import React from 'react'

const Button = ({title,color, onAddTask}) => {

    return (
        <div>
            
            <button onClick={onAddTask} style={{ backgroundColor: color, color:'white', borderRadius: '0.35rem' }}>{title}</button>
        </div>
    )
}

export default Button;
