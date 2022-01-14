import React from 'react'
import store from '../store/store'

export const Test = () => {
  return (
    <div>
      <button onClick={()=>{
        store.dispatch({type:'increament'})
      }}></button>
    </div>
  )
}

