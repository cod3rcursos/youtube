import './Card.css'
import React from 'react'

export default props => 
    <div className="Card" style={{
        borderColor: props.color || '#000'
    }}>
        <div className="Content">
            {props.children}
        </div>
        <div className="Footer" style={{
            backgroundColor: props.color || '#000'
        }}>
            {props.titulo}
        </div>
    </div>