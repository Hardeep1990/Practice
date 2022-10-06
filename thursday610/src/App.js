import axios from 'axios';
import { useState } from 'react';
function App() {
  const [users, setUsers] = useState([]);
  // calls the API to get the list of users
  const getTheUsers = () => {
    axios.get('https://reqres.in/api/users').then((result) => {
      setUsers(result.data.data); // updating the state with an array of users
    });
  };
  return (
    <>
      <button onClick={getTheUsers}>Get me the users now ! </button>
      <div>
        {users.map((user, index) => (
          <h3 key={index}>
            {user.first_name} {user.last_name}
          </h3>
        ))}
      </div>
    </>
  );
}
export default App;