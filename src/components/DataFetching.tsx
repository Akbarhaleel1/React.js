import axios from 'axios'
import React ,{useState,useEffect} from 'react'

const DataFetching = () => {
    const [user,setUser] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res=>{
            console.log(res);
            setUser(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    })
  return (
    <div>
          <div>
            {/* Display user details */}
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
        </div>
    </div>
  )
}

export default DataFetching
