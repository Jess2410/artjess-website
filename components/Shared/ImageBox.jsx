import Image from "next/image";

export const ImageBox = ({ img, alt }) => {
  return (
    <div className="box">
      <div className="iconBx">
        <Image src={img} alt={alt} height="400px" width="400px" />
      </div>
    </div>
  );
};
