import axios from "axios";

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "your_upload_preset"); 

  const response = await axios.post(
    `https://api.cloudinary.com/v1_1/your_cloud_name/image/upload`,
    formData
  );

  return response.data.url;
};
