import React from 'react';
import {BrowserRouter} from "react-router-dom"
import PathFinder from "./path/pathFinder";

function App() {
  return (
    <BrowserRouter>
        <PathFinder/>
    </BrowserRouter>
  );
}
//React-Router-Dom
export default App;
