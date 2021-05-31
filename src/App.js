import React from 'react';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar';
import Routes from './routes';

function App() {
  return (
    <div id='App'>
      <GlobalStyle />
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
