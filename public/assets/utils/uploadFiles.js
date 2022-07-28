import axios from "axios";
import { BASE_URI } from "../app.config";

export const updloadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    const resImg = await axios.post(`${BASE_URI}/file/add`, formData);
  
    return resImg.data.filename;
  };
  