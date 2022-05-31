
import './App.css';

import Navbar from './Component/Navbar';
import {ThemeContext} from "./Context/ThemeContext"
import { useContext } from 'react';
import Dashboard from './Component/Dashboard';
function App() {
  const {isLight,dark,light} = useContext(ThemeContext)
  
  return (
    <div style={{backgroundColor:isLight?light.backgroundColor:dark.backgroundColor,color:isLight?"black":dark.color}}>
      <Navbar/>
      <h1>My DashBoard</h1>
      <Dashboard/>
    </div>
  );
}

export default App;
