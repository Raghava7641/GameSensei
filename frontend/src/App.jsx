// import './App.css';
import React from "react";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import {GameProvider} from './components/context/GameContext'
import SignIn from "./components/pages/Signin";
import SignUp from "./components/pages/signup";

function App() {
  return (
    <GameProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <NavBar/>

        <main className="container mx-auto px-3 pb-12 flex-grow">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/notfound" element={<NotFound/>}/>
            <Route path="*" element={<Home/>}/>
            <Route path="/signin/*" element={<SignIn>
              <Routes>
                <Route to={'/dashbord'} element={<Home/>}></Route>
                </Routes>
                </SignIn>}/>
            <Route path="/signup" element={<SignUp/>}/>

          </Routes>
        </main>

        <Footer/>
      </div>
      
    </Router>
    </GameProvider>
    
  );
}

export default App;
