import { useState } from 'react'
import "./App.css"
import Create from './components/create.jsx'
import { Route, BrowserRouter as Router ,Routes} from 'react-router-dom'
import Update from './components/update.jsx'
import Read from './components/read.jsx'
function App() {
  

  return (
    <Router>
    <div className="main__cont">
    <h1> React crud Operations</h1>
    
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
