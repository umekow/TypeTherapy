import React from 'react'; 

//component for each 
const DayEntry = props => {
    
    return(
        <div className="day">
            <div className="date">
                <p>{props.date}</p>
                <p>{props.day}</p>
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