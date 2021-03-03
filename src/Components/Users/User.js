import React, { useState } from 'react';
import './User.css';

const User = (props) => {       
    const addMember = props.addMember;
        const {name, email , phone, picture} = props.user;
        const [mobile, setMobile] = useState('')
        const img = picture.medium;
        const {title, first, last} =  name;
        const fullName = title +' ' +first +' '+ last; 
        const addMobileNumber = () => setMobile(phone)
    return (
        <div className="userDiv">
            <div className="userImg">
               <img src={img} alt=""/>
           </div>
           <div className="userText">
           <h1>Name : {fullName}</h1>
           <p>Eamil : {email}</p>
           <p>Phone : {mobile} </p>
           <button onClick={addMobileNumber}>Show Phone Number</button>
           <button onClick={() => addMember(fullName)}>Add </button>
           </div>
           
        </div>
    );
};

export default User;