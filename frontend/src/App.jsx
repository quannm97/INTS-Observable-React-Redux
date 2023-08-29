import React from 'react'

import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";

function App() {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </div>
    );
}

export default App;
