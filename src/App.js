import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/index.tsx'
import RQ from './Pages/ReactQuery/index.tsx'
import HOC from './Pages/HOC/index.tsx'
import ReactAPI from './Pages/ReactAPI/index.tsx'
function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/rc" element={<RQ />} />
                        <Route path="/hoc" element={<HOC />} />
                        <Route path="/rapi" element={<ReactAPI />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App
