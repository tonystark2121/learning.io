import { useCallback, useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { MessageOutlined, TextFieldsOutlined } from "@mui/icons-material";

const handleStyle = { left: 10 };

function TextNode({ data }) {
  const [state, setState] = useState({
    nodeTitle: "Message",
    nodeType: "text",
    nodeData: "Data",
  });

  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div
        style={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          width: "150px",
          backgroundColor: "#f9f9f9",
          borderRadius: "5px",
          boxShadow: "0px 0px 5px 0px #ddd",
          cursor: "pointer",
          transition: "box-shadow 0.3s ease, border 0.3s ease",
          border: "2px solid transparent", // Initial border state
          animation: "fadeIn 0.5s ease-out", // Animation on load
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0px 0px 10px 0px #aaa";
          e.currentTarget.style.border = "2px solid #4caf50"; // Green border on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0px 0px 5px 0px #ddd";
          e.currentTarget.style.border = "2px solid transparent"; // Reset border on leave
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            border: "1px solid #ddd",
            padding: "1px",
            borderRadius: "5px",
            borderColor: "#4caf50",
            marginBottom: "5px",
            justifyContent: "center",
          }}
        >
          <MessageOutlined
            style={{
              marginRight: "5px",
              scale: "inherit",
              height: "10px",
              width: "10px",
            }}
          />
          <h6 style={{ margin: 0 }}>{state.nodeTitle}</h6>
        </div>
        <input
          id="text"
          name="text"
          onChange={onChange}
          multiple
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            marginBottom: "5px",
            fontSize: "8px",
            height: "50px",
            textAlign: "left",
          }}
          placeholder="type message"
        />
        {/* Add button for adding new texxt box */}
        <button
          onClick={() => {
            console.log("Add new text box");
          }}
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            marginBottom: "5px",
            fontSize: "8px",
            height: "30px",
            textAlign: "center",
            backgroundColor: "#4caf50",
            color: "#fff",
          }}
        >
          Add
        </button>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={handleStyle}
      />
    </>
  );
}

export default TextNode;
