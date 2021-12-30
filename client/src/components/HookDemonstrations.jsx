import React from 'react';
import HookTemplate from './HookTemplate';
import { basicHooks } from '../hooks/BasicHooks';
import Toolbar from '@mui/material/Toolbar';

const HookDemonstrations = () => {
  return (
    <main>
      {basicHooks.map((hook, i) => (
        <div key={i} id={hook.to}>
          <HookTemplate
            title={hook.title}
            description={hook.description}
            usage={hook.usage}
            stackBlitz={hook.stackBlitz}
          />
        </div>
      ))}
    </main>
  );
};

export default HookDemonstrations;
