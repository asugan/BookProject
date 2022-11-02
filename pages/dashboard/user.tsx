import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Editor from "../../components/Editor";

function User() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [content, setData] = useState("");
  const [title, setTitle] = useState("");
  const [user, userData] = useState<any>({});

  const router = useRouter();

  const handleGetUser = async () => {
    const user = await fetch("/api/userinfo");
    const hamham = await user.json();

    userData(hamham.data);
  };

  const authorId = user.id;

  const savepost = async (e: any) => {
    e.preventDefault();

    const credentials: any = { content, title, authorId };

    const fetchpost = await fetch("/api/post", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (fetchpost.status === 200) {
      router.push("/");
    } else {
      console.log("Some error occured");
    }
  };

  useEffect(() => {
    setEditorLoaded(true);
    handleGetUser();
  }, []);

  return (
    <div className="App">
      <h1>ckEditor 5</h1>

      <form onSubmit={(e) => savepost(e)}>
        <label htmlFor="username"> Title </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => setTitle(e.target.value)}
        />

        <Editor
          name="description"
          onChange={(content: string) => {
            setData(content);
          }}
          editorLoaded={editorLoaded}
        />

        {JSON.stringify(content)}

        <button type="submit"> Post </button>
      </form>
    </div>
  );
}

export default User;
