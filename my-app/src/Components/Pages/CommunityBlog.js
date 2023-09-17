import React from 'react';
import Blog from './Blog'
import Heading from '../Heading'


const CommunityBlog = () => {
 
  return (
    <div class="CommunityBlog">

        <main>
          <Heading headingText="Community Blog" />
        
          <Blog text="This is the blog for the Cycling Club which will be updated whenever necessary, thank you for reading and for making sure this blog works correctly"/>

        </main>

    </div>
  );
};

export default CommunityBlog;
