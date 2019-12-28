import React from 'react'; 
//sub-components
import User from './User'; 
import Month from './Month'
//container for every component that will be display on the side such as a list of all entries and user summary
const SideBar = props => {
    return (
        <div className="sideBar">
            <User/>
           {props.months.map(month => <Month month={month.month} entries={month.entries}/>)}
        </div>
    )
}

export default SideBar; 