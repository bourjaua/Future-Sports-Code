// Aside.js

import React from "react";
import PhotoGallery from "./PhotoGallery.js";

const Aside = () => {
    return (
        <div className="AsideSection">
            <div class="aside">
            <h2>Photo Gallery</h2>
            <PhotoGallery />
            </div>
        </div>
    );
};

export default Aside;