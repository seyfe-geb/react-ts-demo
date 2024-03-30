import React from 'react'

type OscarProps = {
    children: React.ReactNode
}

const OscarComponent = (props: OscarProps) => {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default OscarComponent