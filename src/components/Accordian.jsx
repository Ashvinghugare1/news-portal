import React, { useState } from 'react'

const Accordian = ({question,answer}) => {
const [click,setClick] = useState(false)
const clickHandler = ()=>{
    setClick(!click)
}
  return (
    <div className='p-2 min-w-150'>
        <div className='flex min-h-10 items-center p-5 bg-white justify-between'>
            <p>{question}</p>
            <button onClick={()=>clickHandler()}>+</button>
        </div>
        {click && <div className='flex min-h-10 items-center p-5 bg-white justify-between'>{answer}</div>}
    </div>
  );
}

export default Accordian