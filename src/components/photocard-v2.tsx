import React from "react";
interface PhotoCardProps {
  img: string;
}

const PhotoCardV2: React.FC<PhotoCardProps> = ({ img }) => {
  return (
    <div className="photo-card-v2">
      <img src={img} />
    </div>
  );
};

export default PhotoCardV2;
