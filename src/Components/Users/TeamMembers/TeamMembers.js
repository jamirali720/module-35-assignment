import React from 'react';
import './TeamMembers.css';

const TeamMembers = (props) => {
    console.log(props.member);
        const teams = props.member;
       

    return (
        <div className= "singlePerson">     
        <ul>
        {
            teams.map(teamMember => <h1><li>{teamMember}</li></h1> )
        }
        
        </ul>
        </div>
    );
};

export default TeamMembers;