import React from 'react'; 
import Quill from 'quill'; 

const Editor = props => {
  Quill.register({
    theme: 'snow'
  })

  var quill = new Quill('#editor', {
    theme: 'snow'
  })
  return (
    <div className="editor">
    <p>Hello World?</p>
    </div>
  )
}

export default Editor; 
