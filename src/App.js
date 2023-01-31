import React from "react";
import Welcome from "./pages/Welcome/Welcome";
import './App.css'
import Mobile from "./pages/Mobile/Mobile";
import Desktop from "./pages/Desktop/Desktop";

function App() {
    return (
        <div className='wrapper'>
            <Desktop/>
            {/*<Welcome/>*/}
            {/*<Mobile/>*/}
        </div>
    );
}

export default App;
