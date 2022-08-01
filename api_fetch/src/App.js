import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader } from '@mui/material';

function App() {

  const [data , setData] = useState([]) 

  useEffect(()=>{
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setData(res.data))
  },[])
 
  
  return (
    <div className="App">
     {
       data.map(item => 
         <Card sx={{ width: 300 }} elevation={5}>
           <CardHeader 
            title={item.title}
            subheader = {item.id}
            
           />
           <CardContent sx={{ fontSize: 14 }}>
            {
              item.body
            }
           </CardContent>
         </Card>
       )
     }
    </div>
  );
}

export default App;
