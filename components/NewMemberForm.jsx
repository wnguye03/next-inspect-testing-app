'use client';

import React, {useState} from 'react';

async function addNewMember(firstName, lastName){
  try{
    await fetch('http://localhost:3000/api/member', {
      Method: 'POST',
      Headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      Body: JSON.stringify({
        firstName,
        lastName
      })
    }).then(response => response.json()).then(json => console.log(json));

  } catch (error) {
    console.log(error);
  }
}

const NewMemberForm = () => {
  const [firstName, setFirstName] = useState('');

  const [lastName, setLastName] = useState('');

  return (
    <div>
      <form action="">
        <input type="text" placeholder="First name" onChange={e => setFirstName(e.target.value)}/>
        <input type="text" placeholder="Last name" onChange={e => setLastName(e.target.value)}/>
        <button type="button" className="border-2 bg-purple-200" onClick={() => addNewMember(firstName, lastName)}>Submit</button>
      </form>
    </div>
  )
}

export default NewMemberForm
