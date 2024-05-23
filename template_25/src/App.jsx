import React from 'react'
import './App.css'
import First from './components/Firstpage'
import Second from './components/Secondpage'
import Third from './components/Thirdpage'
import Fourth from './components/Fourthpage'
import Fifthpage from './components/Fifthpage'

function App() {
 

  return (
    <div className="global_container_">
    <First/>
    <Second/>
    <Third/>
    <Fourth/>
    <Fifthpage/>
    </div>
  )
}

export default App
