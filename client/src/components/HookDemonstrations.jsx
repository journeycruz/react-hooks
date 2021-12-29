import React from 'react';
import HookTemplate from './HookTemplate';

const HookDemonstrations = () => {
  const hooks = [
    {
      title: 'useState',
      description: 'The useState hook allows a functional component to set a state that can be changed or updated later on a browser event.',
      usage: 'useState returns a pair: the current state value and the function that lets you update it.',
      stackBlitz:
        'https://stackblitz.com/edit/react-state-hook-04?embed=1&file=Counter.js',
    },
  ];
  return (
    <main>
      {hooks.map((hook, i) => (
        <div key={i}>
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
