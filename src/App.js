import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar } from './components';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
    </Router>
  );
}

export default App;
