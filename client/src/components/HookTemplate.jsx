import React from 'react';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';

const HookTemplate = ({ title, description, body, usage, stackBlitz }) => {
  return (
    <div>
      <h2 className='title'>{title}</h2>
      <br />
      <Divider />
      <span>Hello.</span>
      <br />
      <span className='lead'>{description}</span>
      <span>{body}</span>
      <iframe src={stackBlitz} frameBorder='0'></iframe>
      <Toolbar />
      <p className='text'>{usage}</p>
    </div>
  );
};

export default HookTemplate;
