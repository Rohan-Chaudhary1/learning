import React,{useState} from 'react'
import ReactQuill from 'react-quill'

const index = () => {
    const [value, setValue] = useState('');
  return (
    <div>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  )
}

export default index