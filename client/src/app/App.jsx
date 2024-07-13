import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import Authentication from '../scenes/Authentication/Authentication'
import { Routes, Route } from 'react-router'

const App = () => {
  return (
    <>
      <header><Navigation /></header>
      <main>
        <Routes>
            <Route path='/auth' element={<Authentication />}></Route>
        </Routes>
      </main>
      <footer></footer>    
    </>
  )
}

export default App
