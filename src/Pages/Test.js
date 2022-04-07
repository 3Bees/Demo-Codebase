import React, { useState } from "react";
import RichTextEditor from "./Editor/editor";
// const config = {
//   buttons: ['header', 'font', 'size',
//   'bold', 'italic', 'underline', 'strike', 'blockquote', 'color', 'background',
//   'list', 'bullet', 'indent', 'link', 'video', 'image', "code-block", "align"],
// };



const Test = () => {
  const [value, setValue] = useState("");
  const changeHandler = e => {
    console.log(e)
    setValue(e)
  }
  
  return (
    <div className="row">
      <div className="col-md-6" style={{ margin: "auto", marginTop: "50px" ,marginLeft:"10px",marginRight:"10px"}}>
        <div style={{ textAlign: "center" }}>
          <h3>Rich Text Editor</h3>
        </div>
        <RichTextEditor value={value} setValue={changeHandler} show={value}/>
        <br />
        {/* <div dangerouslySetInnerHTML={{__html: value}}/> */}
      </div>
    </div>
  );
};

export default Test;
