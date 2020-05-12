import React from 'react'
import If from './If'

export default props => {

    return (
        <div>
            <h2>O número é {props.numero}</h2>
            <If test={props.numero % 2 === 0}>
                <span>Par</span>
            </If>
            <If test={props.numero % 2 === 1}>
                <span>Ímpar</span>
            </If>
        </div>
    )
}