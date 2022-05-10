import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { formats, modules } from "./option";

const Editor = ({value,setValue}) => {

  return (
    <ReactQuill 
      theme="snow" 
      value={value || ""} 
      onChange={setValue}
      modules={modules}
      formats={formats} />
  );
}

export default Editor