import axios from 'axios';
import  { useEffect, useState } from 'react';
import './App.css';

var id = 11;

function App(){
const [users,setUser] = useState([]);
const [name, setName] = useState("");
useEffect(() =>{
  axios.get("https://jsonplaceholder.typicode.com/users")
.then(res => setUser(res.data))},[])

const postUser = () => {
axios.post("https://jsonplaceholder.typicode.com/users",{id:id++,name:name})
.then(res => setUser([...users,res.data]))
}

  

return(
<div>
{users.map((u,i) => {

  return(
<div key={i}>
  {u.name}
</div>)

})}

<input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
<button onClick={postUser} >post</button>

</div>

)

}
export default App;
import axios from 'axios';
import  { useEffect, useState } from 'react';
import './App.css';
function App(){
const [users,setUser] = useState([]);
const [name, setName] = useState("");


useEffect(() =>{
  axios.get("https://jsonplaceholder.typicode.com/users/1")
.then(res => setUser(res.data))},[])

const updateUser = () => {
axios.put(`https://jsonplaceholder.typicode.com/users/${1}`,{name:name})
.then(res => setUser(res.data))
}
return(

<div>

  <div>
{users.name}
</div>



<input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
<button onClick={updateUser} >update</button>
</div>

)

}

export default App;
import axios from 'axios';
import  { useEffect, useState } from 'react';
import './App.css';


function App(){
const [users,setUser] = useState([]);
const [name, setName] = useState("");


useEffect(() =>{
  axios.get("https://jsonplaceholder.typicode.com/users/1")
.then(res => setUser(res.data))},[])

const deleteUser = () => {
axios.delete(`https://jsonplaceholder.typicode.com/users/${1}`)
.then(res => setUser(res.data))
}

if(!users) return "no users"

  

return(

<div>

  <div>
{users.name}
</div>
<input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
<button onClick={deleteUser} >delete</button>

</div>

)

}

export default App;




