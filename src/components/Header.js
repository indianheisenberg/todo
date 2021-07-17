import React from 'react'
import Button from './Button'

const Header = ({onAdd, showAdd}) => {

    return (
        <div className="header-wrapper" >
            <h1 style={{marginBottom: '20px', textShadow : 'black 2px 2px 2px', color: 'darkorange'}}>My Task App</h1>
            
            <Button title={showAdd ? 'Close' : 'Add Task'} color={showAdd ? 'red' : 'darkorange'} onAddTask={onAdd}/>
        </div>
    )
}

export default Header
