import { useState, useEffect } from "react";
import axios from "axios";

export default function AwsbucketPage() {
  const [file, setFile] = useState();
  const [caption, setCaption] = useState("");

  const submit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("caption", caption);

    fetch("https://api.earlyrunners.bg/awsbucket", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: JSON.stringify({
        idimage: 2,
        nameimage: "caption",
        image: "file",
      }),
    });

    //console.log(formData);
    // console.log(nameimage);
    // console.log(image);

    // axios
    //   .post("https://api.earlyrunners.bg/awsbucket", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // console.log(formData.image);
    // console.log(formData.caption);
    // console.log("aaaaaaaaaa");
  };

  return (
    <>
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
    </>
  );
}
