import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div id='header'>
      <ul>
      <h2>Task App</h2>
        <Link to="/">
         <li>My Tasks</li>
        </Link>
      </ul>
    </div>
  )
}
