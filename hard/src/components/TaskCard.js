import React from 'react'

export default function TaskCard(props) {
  return (
    <div className='taskCard'>
        <input type='checkbox'></input>
        <input type="text" placeholder='Task...'></input>
        <button onClick={props.handleRemove}>&#10005;</button>
    </div>
  )
}
