import React, { useState } from "react";
import { imageList } from "../Data";

function ImageSlider() {
  const [curImageId, setCurImageId] = useState(1);
  const slides = [...Array(imageList.length + 1).keys()].slice(1);
  const handlePrev = () => {
    if (curImageId === 1) return;
    else setCurImageId(curImageId - 1);
  };
  const handleNext = () => {
    if (curImageId === imageList.length) return;
    else setCurImageId(curImageId + 1);
  };

  return (
    <div style={{ margin: "100px" }}>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <button
          onClick={handlePrev}
          style={
            curImageId === 1
              ? {
                  display: "none",
                }
              : {
                  textAlign: "right",
                }
          }
        >
          👈
        </button>

        <img
          style={{ width: "100px", height: "100px" }}
          src={imageList[curImageId - 1].url}
          alt="photo"
        />
        <button
          onClick={handleNext}
          style={
            curImageId === imageList.length
              ? {
                  textAlign: "right",
                  display: "none",
                }
              : {}
          }
        >
          👉
        </button>
      </div>
      <div style={{ margin: "100px" }}>
        {slides.map((num) => (
          <button key={num} className={curImageId == num ? "active" : ""}>
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
