import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import { useState } from 'react';

// import { useEffect, useState } from 'react';

// import ClipLoader from "react-spinners/ClipLoader";

function App() {
  // const [loading, setLoading] = useState(false);

  // useEffect(()=> {
  //   setLoading(true);
  //   setTimeout(()=>{
  //     setLoading(false);
  //   },8000);
  // }, [])
  
  // const [cursorX, setCursorX] = useState()
  // const [cursorY, setCursorY] = useState()

  // window.addEventListener ('mousemove', (e) => {
  //   setCursorX(e.pageX)
  //   setCursorY(e.pageY)   
  // })
  
  return (
    <div className='app'>
      {/* <div className='cursor' 
      style={{left:cursorX + 'px',
              top: cursorY + 'px'}}
      ></div> */}
      <Router>
      <Navbar/>
      {/* {
      loading ?
      <ClipLoader color={"red"} loading={loading}  size={150} 
        
      />
      : */}
      <Routes>
        <Route path='/My-React-Website/' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    {/* } */}
    </Router>
    
    </div>

  );
}

export default App;