import { useState } from 'react'
import "./App.css"
import Create from './components/create.jsx'
import { Route, BrowserRouter as Router ,Routes, useNavigate} from 'react-router-dom'
import Update from './components/update.jsx'
import Read from './components/read.jsx'

import Home from './components/home.jsx'
function App() {
  
  return (
    <Router>
    <div className="main__cont">
   
    <Routes>
    
    <Route  path='/create' Component={Create}/>
    <Route path='/update' Component={Update}/>
    <Route path='/read' Component={Read}/>
    
    </Routes>
    </div>
    </Router>
  )
}

export default App
