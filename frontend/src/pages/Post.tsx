import { useState } from "react";
import { InputBoxContent } from "../components/InputBoxPost";
import axios from "axios";
import { NavBar } from "../components/NavBar";
import { ButtonProps } from "../components/ButtonProps";
import { useNavigate } from "react-router";
import { ImageDrop } from "../components/ImageDrop";

export const Post = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const [img, setImage] = useState<File | null>(null);


  const handle = async () => {
    try {

      const formdata = new FormData();
      formdata.append("title", title);
      formdata.append("content", content);
      if (img) {
        formdata.append("photo", img);
      }
     

      await axios({
        method: "POST",
        url: `${`http://localhost:3000`}/v1/blog`,
        data: formdata,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
           "Content-Type": "multipart/form-data",
        
        },
      }).then(() => {
        alert("data inserted succesfully");

        navigate("/");
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
      console.error("Error:", error.response?.data);
         console.error("Status:", error.response?.status);
        
        console.error("Request headers:", error.config?.headers);
    }
      console.log(error);
    }
  };

  return (
    <div className="h-screen W-full">
      <NavBar headers={{ bold: "dark", size: "lg", text: "Medium" }}></NavBar>
      <div className="max-w-full  flex flex-col justify-center items-center">
        <InputBoxContent
          size="md"
          name="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          value={title}
          fontWeight="lg"
        ></InputBoxContent>
        <InputBoxContent
          name="content"
          onChange={(e) => {
            setContent(e.target.value);
          }}
          placeholder="Content"
          size="sm"
          type="textarea"
          value={content}
          fontWeight="sm"
        ></InputBoxContent>

        <ImageDrop onChange={(e) => setImage(e.target.files[0])}></ImageDrop>
        <div>
          <ButtonProps
            text="Publish"
            varaint="secondary"
            onClick={handle}
            size="lg"
            rounded="rounded-md"
            padding="px-6"
          ></ButtonProps>
        </div>
      </div>
    </div>
  );
};
