import React from 'react';
import { CodeBlock, Code } from '@atlaskit/code';

const importAsNamedExport = `// Import State Hook from React
import React, { useState } from 'react';

const App = () => {
  const [state, setState] = useState('');
};`;

const extendsReact = `// Import React
import React from 'react';

const App = () => {
  const [state, setState] = React.useState('');
};`;

const stateDeclaration = `const App = () => {
  const [toggle, setToggle] = useState(false);
};`;

const updateState = `// Import State Hook from React
import React, { useState } from 'react';

const App = () => {
  // Declare new state variable
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {/* function that will change state of toggle from false to true */}
      <button onClick={() => setToggle(true)}>
        Click Me
      </button>
    </div>
  )
};`;

export const basicHooks = [
  {
    title: 'useState',
    to: 'useState',
    description:
      'State refers to data or properties that need to be recorded and referenced to throughout an application. The "State Hook" is used for creating and updating React state in a function component.',
    body: [
      <div key="1">
        <br />
        <br />
        <h3>How to use the State Hook:</h3>
        <br />
        <h3>Step 1: Import the hook from React</h3>
        <p>
          Before using the State Hook you will need to import it from React by
          either destructuring it as a named export:
        </p>
      </div>,
      <div key="2">
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={importAsNamedExport}
          highlight="2,5"
        />
        <br />
      </div>,
      <div key="3">
        <p>Or by using it as an extension of React:</p>
      </div>,
      <div key="4">
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={extendsReact}
          highlight="2,5"
        />
        <br />
      </div>,
      <div key="5">
        <br />
        <h3>Step 2: Declare a New State Variable</h3>
        <p>
          When writing a function component, declare a new state variable by
          calling the <Code>useState</Code> hook. The State Hook returns a pair
          of items that can be named whatever you want. The first item is the
          state and it&#8216;s value is the argument passed into the hook. The
          second item in the array is a function that can be used to update the
          state.
        </p>
      </div>,
      <div key="6">
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={stateDeclaration}
          highlight="2"
        />
      </div>,
      <div className="note" key="7">
        <h4>Note</h4>
        <span className="note-text">
          The State Hook returns an array of two items. The code above declares
          a state variable using bracket notation to destructure the array
          returned by the State Hook.
        </span>
        <br />
      </div>,
      <div key="8">
        <p>
          Here we are passing the boolean value <Code>false</Code> to the
          useState hook as an argument. This value is set as the initial value
          of the state labeled <Code>toggle</Code>.
        </p>
      </div>,
      <div key="9">
        <br />
        <h3>Step 3: Update the State</h3>
        <p>
          Update the state by calling the second item in the array as a function
          with the new state as the argument.
        </p>
      </div>,
      <div key="10">
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={updateState}
          highlight="11"
        />
        <br />
      </div>,
      <div key="11">
        <br />
        <h3>Live Example:</h3>
        <br />
      </div>,
    ],
    usage:
      'useState returns a pair: the current state value and the function that lets you update it.',
    stackBlitz: 'https://stackblitz.com/edit/react-rw54jp?file=src/App.js',
  },
];
