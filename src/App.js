import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
// import Explore from './pages/Explore/Explore';
// import Profile from './pages/Profile/Profile';
// import Chat from './pages/Chat/Chat';
// import Latest from './pages/Latest/Latest';
import { Divider } from '@mui/material';
import Header from './components/Header/Header'


function App() {

  return(
    
    <>
    
    
    <Header />

    <Divider />

    <Home />
      {/* <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/explore" element={<Explore />} /> */}
        {/* <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/latest" element={<Latest />} />
      </Routes> */}

    </>  

  

  );
}

export default App;