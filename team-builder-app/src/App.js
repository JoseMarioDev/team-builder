import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [member, setMember] = useState({ name: '', email: '', role: '' });
  return (
    <div className='App'>
      <Form />
    </div>
  );
}

export default App;
