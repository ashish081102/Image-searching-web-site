import "../main.css";
import React from "react";
function Image({ imageUrl }) {
  return (
    <div className="mb-3 rounded-sm">
      {/* {console.log(imageUrl)} */}
      <img className="rounded-md" src={imageUrl} loading="lazy"/>
    </div>
  );
}

export default Image;
