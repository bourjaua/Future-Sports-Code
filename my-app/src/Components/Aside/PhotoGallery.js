import React from 'react';
import photo1 from './ImagesFolder/cyclingimage.PNG';


const PhotoGallery = () => {
    return (
        <div className="PhotoGallery">
            <h3>Photo Gallery</h3>
            <img src={photo1} alt="Image 1" height={400} width={400} />
        </div>
    );
};

export default PhotoGallery;