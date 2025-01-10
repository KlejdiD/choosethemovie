import React from 'react';
import Page from './page'; // Import the page component to show movies

const App = () => {
  return (
    <div>
      <header>
        <h1>Movie Matcher</h1>
        <p>Find the perfect movie for you!</p>
      </header>
      <main>
        <Page />
      </main>
    </div>
  );
};

export default App;
