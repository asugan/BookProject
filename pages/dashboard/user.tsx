import React, { useState, useEffect } from "react";
import Editor from "../../components/Editor";

function User() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div className="App">
      <h1>ckEditor 5</h1>

      <Editor
        name="description"
        onChange={(data) => {
          setData(data);
        }}
        editorLoaded={editorLoaded}
      />

      {JSON.stringify(data)}
    </div>
  );
}

export default User;
