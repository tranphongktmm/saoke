import React, { useState } from 'react';
import './App.css';
import Header from './components/header'
import Body from './components/body'
import Table from './components/table'
import Footer from './components/footer';
function App() {

  const [color,setColor] = useState(false)
  const style = color ? { backgroundColor: "#1A202C",color:'#fff' } : {};
  const handleColor = () => {
      setColor(color==true ? false : true);
  }


  return (
    <div className="App min-w-40" style={style} >
      <Header method={handleColor}/>
      <Body />
      <Table />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
