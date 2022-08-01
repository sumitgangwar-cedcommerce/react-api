import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, Card, CardContent, CardHeader } from '@mui/material';

function App() {
  const [users , setUsers] = useState([])


  useEffect(()=>{
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(response => setUsers(response))
  },[])

  

  return (
    <div className="App">
      {
        users.map((user,i) =>
          <Card sx={{width: '25%' , bgcolor: 'crimson' , color: 'white'}}  key={i}>
            <CardHeader
              avatar = {
                <Avatar sx={{width: '220px' , height: '220px'}}>
                  <img src={user.avatar_url} alt="avatar"></img>
                </Avatar>
              }
              
            />
            <CardContent title={user.login}>
              <p>Name : {user.login}</p>
              <p>Type : {user.type}</p>
              <p>Github Link: <a target="_blank" href={user.html_url}>{user.html_url}</a></p>
            </CardContent>
          </Card>
        )
      }
    </div>
  );
}

export default App;
