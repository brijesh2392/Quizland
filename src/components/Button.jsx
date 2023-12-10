import React from 'react'

const Button = ({ButtonText}) => {
  return (
    <div>
      <div className=' border-2 border-sky-950 p-2 md:p-3 bg-sky-950 text-white rounded-2xl'>
        {ButtonText}
      </div>
    </div>
  )
}

export default Button