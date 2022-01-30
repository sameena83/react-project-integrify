import logo from './logo.svg';
import './App.css';

import './App.css';
import {useState,useEffect} from 'react';
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';
import DisplayHome from './Components/DisplayPicture/DisplayHome';


function App() {
  const[user,setUser]=useState([]);
  useEffect(()=> {
    fetch("https://fakestoreapi.com/products")
    .then((response)=>response.json())
    .then((data)=>setUser(data));
  },[]);
  return (
    <div className="App">
      <Header/>
      <MainPage/>
      <DisplayHome userInfo={user} />
      
     
    </div>
  );
}

export default App;
