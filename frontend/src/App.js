import React from 'react';
import './App.css';

//components
import Editor from './components/journal/editor/Editor.js'; 
import Month from './components/journal/sidebar/months/Month'

const months = [
  { 
    month: 'January', 
    entries:
      [
        {
          weekday : 'WED', 
          day : 1, 
          year : 2020, 
          title: 'a new start', 
          summary : "I went to the gym and the trainer reassured me that it was a judgement free zone", 

      }, 
      {
        weekday : 'THU', 
        day : 2, 
        year : 2020, 
        title: 'keep going', 
        summary : "I was so afraid that people would look at me. Luckily my sister went with me...", 

      }, 
      {

        weekday : 'FRI', 
        day : 3, 
        year : 2020, 
        title: 'I can not run on the treadmill', 
        summary : "What was the trainer thinking? Did he really think I could run at 5 speed??", 

      }, 
      {
        weekday : 'SAT', 
        day : 4, 
        year : 2020, 
        title: 'Glutes!!', 
        summary : "My brother went to the gym with me that made me comfortable to try weight training. I love working on my glutes!!", 

      } 
    ]
}

]
function App() {
  return (
    <div className="App">
      <Month month={months[0].month} entries={months[0].entries}/>
    </div>
  );
}

export default App;


