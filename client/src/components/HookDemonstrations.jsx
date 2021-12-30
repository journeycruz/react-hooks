import React from 'react';
import HookTemplate from './HookTemplate';
import { basicHooks } from '../hooks/BasicHooks';
import Toolbar from '@mui/material/Toolbar';
import { advancedHooks } from '../hooks/AdvancedHooks';

const HookDemonstrations = () => {
  return (
    <main>
      <h1>Basic Hooks</h1>
      <br />
      <span className="lead">
        Hooks are a new addition in React 16.8. They let you use state and other
        React features without writing a class.
      </span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      {basicHooks.map((hook, i) => (
        <div key={i}>
          <Toolbar id={hook.to} />
          <HookTemplate
            title={hook.title}
            description={hook.description}
            usage={hook.usage}
            stackBlitz={hook.stackBlitz}
          />
        </div>
      ))}
      <Toolbar />
      <Toolbar />
      <h1>Advanced Hooks</h1>
      <br />
      <span className="lead">
        Hooks are a new addition in React 16.8. They let you use state and other
        React features without writing a class.
      </span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      {advancedHooks.map((hook, i) => (
        <div key={i}>
          <Toolbar id={hook.to} />
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
