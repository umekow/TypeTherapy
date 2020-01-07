import React from 'react';
import './App.css';

//components
import Editor from './components/journal/editor/Editor.js'; 



function App() {
  return (
    <div className="App">
      <Month month={months[0].month} entries={months[0].entries}/>
    </div>
  );
}

export default App;


