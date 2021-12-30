import React from 'react';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';

const HookTemplate = ({ title, description, usage, stackBlitz }) => {
  return (
    <div>
      <h2 className='title'>{title}</h2>
      <br />
      <Divider />
      <br />
      <span className='lead'>{description}</span>
      <Toolbar />
      <iframe src={stackBlitz} frameBorder='0'></iframe>
      <Toolbar />
      <p className='text'>{usage}</p>
    </div>
  );
};

export default HookTemplate;
