import Image from "next/image";

import { BASE_URI } from '../../public/assets/app.config';


export const ImageBox = ({ illustration }) => {
console.log("🚀 ~ file: ImageBox.jsx ~ line 4 ~ ImageBox ~ illustration", illustration)
  return (
    <div className="box">
      <div className="iconBx">
      <img width="100%" height={280} src={`${BASE_URI}/file/images-store/${illustration.image}`} alt={illustration.name} /> 
        {/* <Image src={img} alt={alt} height="400px" width="400px" /> */}
      </div>
    </div>
  );
};
