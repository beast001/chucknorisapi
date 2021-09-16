import React, {useEffect, useState} from 'react';
import {Card, CardContent, CardActions, CssBaseline, Container, Typography} from '@material-ui/core';
import axios from 'axios';
function App() {
const [jokes, setCategory] = useState([])
const [state, setState] = useState({
joke:''
})

useEffect (()=>{
fetchData();
},[]);

const fetchData = async ()=>{
const results = await axios.get('https://api.chucknorris.io/jokes/random?category=science');
console.log(results);
setState({
...state,
joke:results.data.value})
};


useEffect(() =>{
fetch('https://api.chucknorris.io/jokes/categories')
.then(response =>response.json())
.then(response => {
console.log(response)

setCategory(response)
})
.catch(err=>console.log(err))
},[]);
  return (
    <div className="App">
    <CssBaseline/>
    <container>
     <Typography variant="h1" align="center">
     Chuck Norris Jokes
     </Typography>
     <Typography align="center">
     <select onclick='reload' name="cars" id="cars">
                   <option value="animal">Animal</option>
                   <option value="science">Science</option>
                   <option value="career">Career</option>
                   <option value="dev">Dev</option>

                    <option value="celebrity">Celebrity</option>
                    <option value="explicit">Explicit</option>
                    <option value="fashion">Fashion</option>
                     <option value="food">Food</option>
                      <option value="history">History'</option>
                       <option value="money">Money</option>
                       <option value="movie">Movie</option>
                       <option value="music">Music</option>
                       <option value="political">Political</option>
                       <option value="religion">Religion</option>
                        <option value="sport">Sport</option>
                        <option value="travel">Travel</option>

                 </select>
                 </Typography>
    <card>
    <cardContent>
    <Typography>{state.joke}</Typography>
    </cardContent>
    </card>

    </container>
    </div>
  );
}

export default App;
