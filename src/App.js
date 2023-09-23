import React, {useState} from 'react';
import './App.css';
import Home from './components/Home';
import Card from './components/Card';
import Morebooks from './components/Morebooks';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);
  
  return (
   <div>
    <Home setData={setData}/>
    <Card data={data}/>
    <h2>More Books</h2>
    <Morebooks data={data}/>
   </div>
  );
}


export default App;
