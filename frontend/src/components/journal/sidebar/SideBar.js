import React, {useState} from 'react'; 
//sub-components
import User from './User'; 
import Month from './months/Month'
//container for every component that will be display on the side such as a list of all entries and user summary
const SideBar = props => {
    const [username, setUsername] = useState('user'); 
    const [entries, setEntries] = useState( [
        { 
          "month": 'January', 
          "entries":
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
      
      ]); 


    return (
        <div className="sideBar">
            <User username={username}/>
          
        </div>
    )
}

export default SideBar; 