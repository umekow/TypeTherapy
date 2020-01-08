import React from 'react'; 
import '../../../../App.css'
//component for each 
const DayEntry = props => {
    
    return(
        <div className="day">
            <div className="date">
                <p className="datenum">{props.date}</p>
                <p className="weekday">{props.day}</p>
            </div>

            <div className="entry">
                <p className="entry-title">
                    {props.title}
                </p>

                <p className="summary">
                    {props.summary}
                </p>
            </div>
        </div>
    )
}

export default DayEntry; 