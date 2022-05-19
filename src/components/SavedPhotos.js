import React from "react";
import "./SavedPhotos.css";

export default function SavedPhotos() {
  return (
    <div className="SavedPhotos">
      <div className="SavedPhotos-saved">
        <h2>Saved Photos ⭐</h2>
        <div className="SavedPhotos-photos">
          <img src="http://via.placeholder.com/80x80" />
          <img src="http://via.placeholder.com/80x80" />
        </div>
      </div>
    </div>
  );
}
