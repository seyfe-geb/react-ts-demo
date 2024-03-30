import React from 'react'

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

const ButtonComponent = (props: ButtonProps) => {
  return (
    <div>
        <button onClick={(event) => props.handleClick(event, 1)}>Click Me!</button>
    </div>
  )
}

export default ButtonComponent