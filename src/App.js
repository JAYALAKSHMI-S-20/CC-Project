//import logo from './logo.svg';
import './App.css';
import Useeffecthook from './components/day8';
import React from "react";
import Entry from './components/day6Entry';
import List from './components/day6List';
import Axioseg from './components/day7';
import NavBar from './components/NavBar';
import Singers from './components/Singers';
import Home from './components/Home';
import Display from './components/day1';
import Albums from './components/Albums';
import { Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import Comp from './components/day2';
import Coffee from './components/day3';
import Name from './components/day4';
import Listfn from './components/day5';

function createEntry(items) {
  return (
    <Entry
      key={items.id}
      name={items.name}
      imgUrl={items.imgUrl}
      price={items.price}
    />
  );
}
function App() {
  return (
      <div style={{textAlign:"center"}} >
      <h1 style={{color:"red"}}>Day-1</h1>
      <Display />
      <h1 style={{color:"red"}}>Day-2</h1>
      <Comp />
      <h1 style={{color:"red"}}>Day-3</h1>
      <Coffee />
      <h1 style={{color:"red"}}>Day-4</h1>
      <Name />
      <h1 style={{color:"red"}}>Day-5</h1>
      <Listfn />
      <h1 style={{color:"red"}}>Day-6</h1>
      <h2>Cosmectic Products</h2>
      <dl >{List.map(createEntry)}</dl>
      <h1 style={{color:"red"}}>Day-7</h1>
      <Axioseg />
      <h1 style={{color:"red"}}>Day-8</h1>
      <Useeffecthook />
      <h1 style={{color:"red"}}>Day-9</h1>
      <NavBar/>
        <Routes>
            <Route exact path='/home' element={<Home/>}></Route>
            <Route exact path='/singers' element={<Singers/>}></Route>
            <Route exact path='/albums' element={<Albums />}></Route>
        </Routes>
      <h1 style={{color:"red"}}>Day-10</h1>
      <Login />
      </div>
  );
}
export default App;