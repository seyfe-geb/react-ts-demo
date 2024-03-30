import React from 'react'
import { PersonProps } from './Person.types'

const PersonComponent = (props: PersonProps) => {
  return (
    <div>
        <h2>
            Hello {props.name.first} {props.name.last}!!
        </h2>
    </div>
  )
}

export default PersonComponent