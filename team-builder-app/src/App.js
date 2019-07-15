import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [member, setMember] = useState({ name: '', email: '', role: '' });

  const changeHandler = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };
  const submitHandler = e => {
    e.preventDefault();
    setMember({ name: '', email: '', role: '' });
    console.log(member.name, member.email, member.role);
  };

  return (
    <div className='App'>
      <Form
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        member={member}
        setMember={setMember}
      />
    </div>
  );
}

export default App;
