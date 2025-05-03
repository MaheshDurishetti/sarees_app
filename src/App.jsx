import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import { useEffect, useState } from "react"

const App = () => {
  const [show ,setShow]=useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setShow(true)
    },4000)
  },[])
  return (
    <div>
    { show ?(
        <Routes>
        <Route path="/" element={<Home/>}/>
        </Routes>):( <h1><center>LOADING...</center></h1>)}
     
     
    </div>
  )
}

export default App