import React from "react";
import "../Card.css";






const Cards = ({albumId,id,thumbnailUrl,title,url}) => {
  return (
    <div >
      <div className=" max-w-sm rounded-lg bg-red-100 overflow-hidden shadow-lg">
        <img
          className="w-full height-twenty"
          src={url}
          alt="image"
          height={20}
          width={20}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 overflow-hidden h-20">{title}</div>
          <p className="text-gray-700 text-base">
           {/* Position  */}
          </p>
          <p className="text-gray-700 text-base">
           {/* E-mail */}
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Cards;
