import React from 'react'

type ConteinerProps = {
    styles: React.CSSProperties
}

const ContainerComponent = (props: ConteinerProps) => {
  return (
    <div style={props.styles}>
        ContainerComponent
    </div>
  )
}

export default ContainerComponent