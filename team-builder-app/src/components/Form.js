import React from 'react';

const Form = props => {
  return (
    <div>
      <form>
        Name
        <input type='text' />
        Email
        <input type='text' />
        <label for='Front-End'>Front-End</label>
        <input type='radio' value='Front-End' name='radio' />
        <label for='Back-End'>Back-End</label>
        <input type='radio' value='Back-End' name='radio' />
        <label for='Full-Stack'>Full-Stack</label>
        <input type='radio' value='Full-Stack' name='radio' checked />
      </form>
    </div>
  );
};

export default Form;
