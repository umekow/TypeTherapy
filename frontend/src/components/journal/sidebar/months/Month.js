import React from "react"; 
import DayEntry from './DayEntry'; 

const Month = props => {
    return(
        <div className="month-container">
            
            <div className="month">
               <p> {props.month}</p>
            </div>
        
            {
                props.entries.map(entry => <DayEntry 
                                                date={entry.day} 
                                                day={entry.weekday} 
                                                title={entry.title} 
                                                summary={entry.summary}
                                            />
                )
            }
        
        </div>
    )
}


export default Month; 