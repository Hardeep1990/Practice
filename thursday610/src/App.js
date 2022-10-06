import axios from 'axios';
import Home from './home';
import Names from './Names';
import './App.css';
import { useState, useEffect } from 'react';
function App() {
  const [users, setUsers] = useState([]);
    // Call the API once, when the page is loaded for the first time.
    useEffect(() => { 
      getTheUsers();
    }, []);
  


  // calls the API to get the list of users
  const getTheUsers = () => {

    
    axios.get('https://reqres.in/api/users').then((result) => {
      setUsers(result.data.data); // updating the state with an array of users
    });
  };
  return (
    
 
      <div className='main'>
        <div className='one'>
        {users.map((user, index) => (
         
          <h3 key={index}>
             <img src={user.avatar} alt="user profile pic" />
            {user.first_name} {user.last_name}
          </h3>
        ))}
        </div>
        <div  className="two"><Home /></div>
        <div className='three'> <Names /></div>
      </div>
   
 
  );
}
export default App;