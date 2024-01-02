import React from "react";
interface PhotoCardProps {
  img: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ img }) => {
  return (
    <div className="photo-card">
      <img src={img} />
    </div>
  );
};

export default PhotoCard;
