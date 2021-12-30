import React from 'react';
import '../styles/App.scss';
import HookDemonstrations from './HookDemonstrations';
import Introduction from './Introduction';
import ResponsiveDrawer from './ResponsiveDrawer';
import Sidebar from './Sidebar';
import TopNavigation from './TopNavigation';

function App() {
  return (
    <div className="App">
      <ResponsiveDrawer />
    </div>
  );
}

export default App;
