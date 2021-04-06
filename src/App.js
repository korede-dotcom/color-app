
import React,{useState} from 'react';
import './App.css';
import GetColors from './components/GetColors';
import Footer from './components/Footer';

function App() {
  const [color,setColor] = useState("");
  const handleColorChange = (e) =>{
      setColor(e.target.value)
  }
  return (
    <div className="App" style={{backgroundColor:color}} >
      <input className="input" value={color} type="color" onChange={handleColorChange}/>
      <GetColors color={color}/>
      <Footer color={color}/>
    </div>
  );
}

export default App;
