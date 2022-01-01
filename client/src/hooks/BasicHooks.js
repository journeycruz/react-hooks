import React from 'react';
import { CodeBlock } from '@atlaskit/code';

const exampleCodeBlock = `// React Component
class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  mountNode
);`;

export const basicHooks = [
  {
    title: 'useState',
    to: 'useState',
    description:
      'The useState hook was designed to allow functional components access to React State.',
    body: [
      <div key="1">
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <br />
      </div>,
      <div key="2">
        <CodeBlock
          language="jsx"
          showLineNumbers={true}
          text={exampleCodeBlock}
          highlight="1-5,7,10,15-20"
        />
        <br />
      </div>,
      <div className="note" key="3">
        <h3>Note</h3>
        <span className="note-text">
          You might be wondering why were using a counter here instead of a
          more realistic example. This is to help us focus on the API while
          were still making our first steps with Hooks.
        </span>
        <br />
      </div>,
    ],
    usage:
      'useState returns a pair: the current state value and the function that lets you update it.',
    stackBlitz: 'https://stackblitz.com/edit/react-rw54jp?file=src/App.js',
  },
];
