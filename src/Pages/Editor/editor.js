import React from "react";
import JoditEditor from "jodit-react";
import 'mathquill-node/lib/mathquill.css';
import MathEditor from "../MathFormula/formula";

const RichTextEditor = ({ value, setValue,show}) => {

  return (
    <>
    <JoditEditor
    modules={{
      toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }], [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'align': [] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', "video", "image", "code-block"],
      ['clean']
      ],
      }}
      value={value}
      onChange={(newContent) => setValue(newContent)}
    />
    <MathEditor data={show} />
    </>
  );
};

export default RichTextEditor;