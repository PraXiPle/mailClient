import React from 'react'
import "./textArea.scss"
export const TextArea = (props) => {
  return (
    <div className='TextArea'>
        <textarea {...props} placeholder='Write Your Message' className='textareaElement' cols="30" rows="10"></textarea>
    </div>
  )
}
  