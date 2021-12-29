import React from 'react';
import '../styles/App.scss';
import HookDemonstrations from './HookDemonstrations';
import TopNavigation from './TopNavigation';

function App() {
  return (
    <div className='App'>
      <TopNavigation />
      <div className='container'>
        <HookDemonstrations />
      </div>
    </div>
  );
}

export default App;
