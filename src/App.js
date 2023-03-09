import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'



const App =()=> {

const pageSize = 5

const [progress, setProgress] = useState(0)
  
  
    return (

<div>

<Navbar/>
<LoadingBar
        color='#f11946' progress={progress} height={4} />

<Routes>
<Route exact strict path="/"   element={<News setProgress={setProgress}   key="general" pageSize={9} country="in" category="general"/>}/>
<Route exact path="/business"  element={<News setProgress={setProgress}   key="business" pageSize={9} country="in" category="business"/>}/>
<Route exact path="/entertainment"  element={<News setProgress={setProgress}   key="entertainment" pageSize={9} country="in" category="entertainment"/>}/>
<Route exact path="/health"  element={<News setProgress={setProgress}   key="health" pageSize={9} country="in" category="health"/>}/>
<Route exact path="/science"  element={<News setProgress={setProgress}   key="science" pageSize={9} country="in" category="science"/>}/>
<Route exact path="/sports"  element={<News setProgress={setProgress}   key="sports" pageSize={9} country="in" category="sports"/>}/>
<Route exact path="/technology"  element={<News setProgress={setProgress}   key="technology" pageSize={9} country="in" category="technology"/>}/>
</Routes>
</div>
    )
  
}
export default App
