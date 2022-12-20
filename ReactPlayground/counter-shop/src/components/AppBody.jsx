import React from 'react'
import './style.css'
import { useState } from 'react'

const AppBody = () => {

    const [counter, setCounter] = useState(0) 
  return (
    <>
    <div className="reset-btn">
        <button>
            Reset
        </button>
    </div>


    <div className="counter-expres">
        <div className="operation">
            <p className='main'>{counter}</p>
            
            <button className='plus' onClick={() => setCounter((prevCounter) => prevCounter + 1)}>Increase</button>
            <button className='minus' onClick={() => setCounter((prevCounter) => prevCounter - 1 )}>Decrease</button>
            <button className='del'>Delete</button>
        </div>

        <div className="operation">
            <p className='main'>{counter}</p>
            
            <button className='plus' onClick={() => setCounter((prevCounter) => prevCounter + 1)}>Increase</button>
            <button className='minus' onClick={() => setCounter((prevCounter) => prevCounter - 1 )}>Decrease</button>
            <button className='del'>Delete</button>
        </div>
        <div className="operation">
            <p className='main'>{counter}</p>
            
            <button className='plus' onClick={() => setCounter((prevCounter) => prevCounter + 1)}>Increase</button>
            <button className='minus' onClick={() => setCounter((prevCounter) => prevCounter - 1 )}>Decrease</button>
            <button className='del'>Delete</button>
        </div>
    </div>

    </>
  )
}

export default AppBody
