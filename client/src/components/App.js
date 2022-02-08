import React from 'react';
import '../styles/App.scss';
import ResponsiveDrawer from './ResponsiveDrawer';


function App() {
  return (
    <div className="App">
      <ResponsiveDrawer />
      <div>
        <span>Hello.</span>
      </div>
    </div>
  );
}

export default App;
