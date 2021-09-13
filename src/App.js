import './App.css';
import React,{useEffect} from 'react';
import axios from 'axios';
import {useSelector,useDispatch} from "react-redux";

function App (){
  const dispatch = useDispatch();
  const state = useSelector( state => state);
  const fetchdata = async () => {
    dispatch({type:"LOADING"});
    try{
     const {data} = axios.get('https://jsonplaceholder.typicode.com/posts');
     dispatch({type:"FETCH_DATA",payload:data});
     console.log('isi data',data)
    }catch(err){
      console.log(err)
    }
  }
  
  console.log(state)
  return (
    <div className="App">
      <button className="btn btn-primary" onClick={ fetchdata}>fetch</button>
    </div>
  );
}

export default App;
