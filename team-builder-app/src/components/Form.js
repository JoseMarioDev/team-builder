import React, { useState } from 'react';

const Form = props => {
  return (
    <div>
      <form onSubmit={e => props.submitHandler(e)}>
        Name
        <input
          type='text'
          name='name'
          value={props.member.name}
          onChange={e => props.changeHandler(e)}
        />
        Email
        <input
          type='text'
          name='email'
          value={props.member.email}
          onChange={e => props.changeHandler(e)}
        />
        <label for='Front-End'>Front-End</label>
        <input
          type='radio'
          value='Front-End'
          name='role'
          checked={props.member.role == 'Front-End'}
          onChange={e => props.changeHandler(e)}
        />
        <label for='Back-End'>Back-End</label>
        <input
          type='radio'
          value='Back-End'
          name='role'
          checked={props.member.role == 'Back-End'}
          onChange={e => props.changeHandler(e)}
        />
        <label for='Full-Stack'>Full-Stack</label>
        <input
          type='radio'
          value='Full-Stack'
          name='role'
          checked={props.member.role == 'Full-Stack'}
          onChange={e => props.changeHandler(e)}
        />
        <button>Add Member</button>
      </form>
    </div>
  );
};

export default Form;
