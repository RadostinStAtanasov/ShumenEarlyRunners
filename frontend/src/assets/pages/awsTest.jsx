import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [file, setFile] = useState();
  const [caption, setCaption] = useState("");

  const submit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("caption", caption);

    useEffect(() => {
      fetch("https://api.earlyrunnrs.bg/awsbucket", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idname: caption,
          image: file,
        }),
      });
    }, []);

    // await axios.post("/posts", formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // });
  };

  return (
    <form onSubmit={submit}>
      <input
        onChange={(e) => setFile(e.target.files[0])}
        type="file"
        accept="image/*"
      ></input>
      <input
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        type="text"
        placeholder="Caption"
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
