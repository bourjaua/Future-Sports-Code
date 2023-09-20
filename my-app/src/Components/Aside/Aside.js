// Aside.js

import React from "react";
import PhotoGallery from "./PhotoGallery.js";
import { Link } from "react-router-dom";

const Aside = () => {
    return (
        <div className="AsideSection">
            <Link to="/AsideSection">AsideSection</Link>
            <aside>
            <h2>Photo Gallery</h2>
            <PhotoGallery />
            </aside>
        </div>
    );
};

export default Aside;