import React, {useState} from 'react'; 
import ReactQuill from 'react-quill'; 

const Editor = props => {
    const [text, setText] = useState("How are you feeling?"); 


    return(
        <ReactQuill value={text} onChange={ () => setText(text)}/>
    )
}

export default Editor; 