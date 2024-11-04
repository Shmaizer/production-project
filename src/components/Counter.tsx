import React, { useEffect, useState } from 'react'
import * as cl from './Counter.module.scss'
export const Counter = () => {
  const [count,setCount]=useState<number>(0)
  const Incriment=()=>{
    setCount(prev=>prev+1)
  }
  useEffect(()=>{
    console.log(count)
  },[count])
    return (
    <div>
        <button className={cl.button} onClick={Incriment}>{count}</button>
    </div>
  )
}