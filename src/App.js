import './App.css';
import { useEffect, useState } from 'react';
import User from './Components/Users/User';
import TeamMembers from './Components/Users/TeamMembers/TeamMembers';

function App() {
const [users, setUsers] = useState([]);
const [member, setMember] = useState([]);
useEffect(() => {
    fetch ('https://randomuser.me/api/?results=25')
    .then (res => res.json())
    .then (data => setUsers(data.results))  
} ,[])
  // const nums = [ 25, 33, 12, 44, 66, 64, 87, 99];
  // const total = nums.map(num => num  *  num)       // mapping system 
  // const total = nums.filter (num => num % 2 ==0)      // filtering system 

  // const total = nums.find(num => num > 70)        // find  methods 
  // const total = nums.reduce( (sum, amount) => sum + amount ,0);     // first reduce system

  // const total = nums.reduce((total, num) => {         // second reduce system
  //     return  total + num } , 0)
  const addMember = (name) => {
    const newMember = [...member, name];
    setMember(newMember);
  }
  return (
    <div className="App">
      <div className="left">
      {
        users.map(user => <User user ={user} addMember={addMember}></User>)
      }
      </div>
      <div className="right">
        <h1>Team Member : {member.length}</h1>
      <ul>
        {
           <TeamMembers member={member}></TeamMembers>
        }
      </ul>
      </div>
   
      
    </div>
  );
}

export default App;
