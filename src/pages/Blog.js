import React from 'react';
import {useParams} from 'react-router-dom';
import '../App.css';

/*Blog component import posts from appjs with all the data of the blogs*/
function Blog({posts}) {
    /*blogId links the dynamic url given in Blogposts.js*/
    const {blogId} = useParams();
    /*blogdata takes the id and extract one because the array with data starts on 0(so blog/1=blogData[0])*/
    const blogData = posts[blogId - 1];
    return (
        <div className="wrappingcontainer">
            <h1>{blogData.title}</h1>
            <h3>{blogData.date}</h3>
            <p>{blogData.content}</p>
        </div>
    );
}

export default Blog;