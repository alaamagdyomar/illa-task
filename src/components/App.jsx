import React from "react";
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import PokHeader from "./header/header";
import PokList from "./pokList/pokList";
import Pokemon from "./pokemon/pokemon";
import PokDetails from "./pokDetails/pokDetails";
import './App.css'

const App = ()=>{
    return (
        <BrowserRouter>
            <div className="container">
                    <div>
                    <PokHeader />
                    <Routes>
                        <Route path="/" exact element={<PokList />} />
                        <Route path="/pokemon"  element={<Pokemon/>} />
                        <Route path="/pokemon/:id"  element={<PokDetails/>} />
                    </Routes>
                    </div>
            </div>
        </BrowserRouter>
        )
}

export default App;