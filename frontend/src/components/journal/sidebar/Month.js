import React from "react"; 
import DayEntry from './months/DayEntry'; 

const Month = props => {
    return(
        <div className="month-container">
            
            <div className="month">
                {props.month}
            </div>

            {
                props.entries.map(entry => <DayEntry 
                                                date={entry.date} 
                                                day={entry.day} 
                                                title={entry.title} 
                                                summary={entry.summary}
                                            />
                )
            }
        
        </div>
    )
}


export default Month; 