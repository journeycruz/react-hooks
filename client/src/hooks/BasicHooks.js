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

const displayState = `// Import State Hook from React
import React, { useState } from 'react';

const App = () => {
  // Declare new state variable
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {/* function that will change state of toggle from false to true */}
      <h1>The current value of toggle is: {toggle}</h1>
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
      'State refers to data or properties that need to be recorded and referenced to throughout an application. The "State Hook" is used for creating and updating local state in a function component.',
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
        <img
          src="https://i.ibb.co/HDbSgbg/Declaring-a-New-State-Variable-1800-x-600-px-1.png"
          alt="Declaring-a-New-State-Variable-1800-x-600-px-1"
          border="0"
          style={{ width: '100%' }}
        ></img>
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
          a state variable by using bracket notation to destructure the array
          returned by the State Hook.
        </span>
        <br />
      </div>,
      <div key="8">
        <p>
          The State Hook takes in an initial state and returns two values: the
          current state, and a function that updates it. Here we are passing the
          boolean value <Code>false</Code> to the useState hook as an argument.
          This value is set as the initial value of the state labeled{' '}
          <Code>toggle</Code>.
        </p>
        <p>
          The State Hook can be used to store any data type including arrays and
          objects.
        </p>
        <p>
          State variables do not disappear when a function component exits, they
          are preserved by React.
        </p>
        <p>
          You can call the useState hook more than once in a functoinal
          component.{' '}
          <a
            href="https://reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables"
            rel="noreferrer"
            target="_blank"
          >
            It is best practice to split the state into multiple state variables
            based on which values tend to change together.
          </a>
        </p>
        <br />
        <h4>Displaying state:</h4>
        <p>
          In a function component you can display the current state by writing
          the state variable name in curly brackets in the return statement of
          your jsx code.
        </p>
      </div>,
      <div key="9">
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={displayState}
          highlight="11"
        />
        <br />
        <br />
        <h4>Objects in state:</h4>
        <p>
          As previously mentioned, you can hold full objects in state using the State hook. However, unlike class components you have to be more careful when trying to update the data in the state becuase the function used to update the state replaces the current data by default. If you need to merge data into object it is still possible by using the spread operator to include all data currently in the state on new update.
        </p>
      </div>,
      <div key="10">
        <br />
        <h3>Step 3: Update the State</h3>
        <p>
          Update the state by calling the second item in the array as a function
          with the new state as the argument.
        </p>
        <p>
          You should never directly update state by setting state variable equal to new value.
        </p>
      </div>,
      <div key="11">
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={updateState}
          highlight="11"
        />
        <br />
      </div>,
      <div key="12">
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
