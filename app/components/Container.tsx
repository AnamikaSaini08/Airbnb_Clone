import React from 'react'

interface ContainerProps{
    children: React.ReactNode
}

const Container:React.FC<ContainerProps> = ({children}) => {
  console.log("Container")
  return (
    <div>{children}</div>
  )
}

export default Container