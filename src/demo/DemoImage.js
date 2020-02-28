import React from "react";

function DemoImage({ src, alt }) {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default DemoImage;
