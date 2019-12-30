import React from 'react';
import './App.css';

//components
import Editor from './components/journal/editor/Editor.js'; 
import Quill from './components/journal/editor/Quill.js'; 

function App() {
  return (
    <div className="App">
      <Editor/>
    </div>
  );
}

export default App;


