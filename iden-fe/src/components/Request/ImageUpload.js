import React, { useState } from "react";
import previewImg from "../../Assets/preview.png"
function ImageUpload() {
  const [ imgSrc, setImgSrc ] = useState(previewImg);
  function handleOnChange (e) {
    if (e.target.files.length) {
      const src = URL.createObjectURL(e.target.files[0]);
      setImgSrc(src);
    }
  } 
  return (
    <div className="upload-container">
      <div className="preview">
        <img className="upload-img" id="img-preview" src={imgSrc} alt="preview" />
        <label className="upload-label" for="file-input">Upload Image</label>
        <input accept="image/*" type="file" id="file-input" onChange={(e) => handleOnChange(e)} />
      </div>
    </div>
  )
}
export { ImageUpload };
