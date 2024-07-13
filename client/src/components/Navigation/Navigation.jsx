import React, { useState } from 'react'
import './Navigation.css'

const Navigation = () => {
    const [authenticated, setAuthenticated] = useState(false)
    const user = 'yasirw212'
    

  return (
    <div className='navigation gradient_text'>
        <div className="nav-header">
            <h1 className="nav-title">Notely</h1>
            {
            authenticated ?
                <h3 className="nav-greeting">Welcome, {user}</h3>
            :
                null
            }
        </div>
    </div>
  )
}

export default Navigation