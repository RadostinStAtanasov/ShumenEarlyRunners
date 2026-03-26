import { useState, useEffect } from "react";

export default function AwsbucketPage() {
  const [file, setFile] = useState();
  const [caption, setCaption] = useState("");

  const submit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("caption", caption);

    fetch("https://api.earlyrunners.bg/awsbucket", {
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

    console.log(caption);
    console.log(file);

    // await axios.post("/posts", formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // });
  };

  return (
    <div>
      <br />
      <br />
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
    </div>
  );
}
