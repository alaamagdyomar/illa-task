import React from "react";
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import PokHeader from "./header/header";
import Home from "./home/home";
import Pokemon from "./pokemon/pokemon";
import './App.css'

const App = ()=>{
    return (
        <BrowserRouter>
            <div className="container">
                    <div>
                    <PokHeader />
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/pokemon"  element={<Pokemon/>} />
                    </Routes>
                    </div>
            </div>
        </BrowserRouter>
        )
}

export default App;