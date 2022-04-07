import { MathQuillStatic } from "react-mq-editor";
import 'mathquill-node/lib/mathquill.css';

const MathEditor = ({ data }) => {
    // console.log("🚀 ~ file: formula.js ~ line 12 ~ MathEditor ~ data", data)

// let updatedData= <p dangerouslySetInnerHTML={{ __html:data }} />;
return (
<div>
<MathQuillStatic latex={data} />
</div>
);
};

export default MathEditor;