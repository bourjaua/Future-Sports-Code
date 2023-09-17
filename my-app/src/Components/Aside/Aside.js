// Aside.js

import React from "react";
import PhotoGallery from "./PhotoGallery.js";

const Aside = () => {
    return (
        <div className="AsideSection">
            <aside>
            <h2>Photo Gallery</h2>
            <PhotoGallery />
            </aside>
        </div>
    );
};

export default Aside;