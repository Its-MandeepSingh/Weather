import React, { useRef } from 'react'

const Card = () => {
    const name = useRef(null)
  return (
    <div>
        <form onSubmit={}>
            <input type="text" 
            placeholder='Type Your City Name'
            rel={name}/>
            <button type='submit'>Search City</button>
        </form>
    </div>
  )
}

export default Card