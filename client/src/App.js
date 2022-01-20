import React from 'react'
import {Container} from '@material-ui/core';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import memory_card from './images/memory-card.png'
import ParticlesBg from 'particles-bg'

const App = () => {

  return(
    <BrowserRouter>
      <Container maxWidth="lg">
        <ParticlesBg color="#66b3ff" type="cobweb" bg={true} />
        <Navbar></Navbar>
        <Routes>
          <Route path="/" exact component={Home}/>
          <Route path="/auth" exact component={Auth}/>
        </Routes>
        <Home></Home>
      </Container>
    </BrowserRouter>
  )
}

export default App