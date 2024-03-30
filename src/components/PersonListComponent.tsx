import React from 'react'
import {Name} from './Person.types'

type PersonListProps = {
    names: Name[]
}

const PersonListComponent = (props: PersonListProps) => {
  return (
    <div>
        {
            props.names.map(person => {
                return (
                    <h2>{person.first} {person.last}</h2>
                )
            })
        }
    </div>
  )
}

export default PersonListComponent