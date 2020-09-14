import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/article/`);
                setBlogs(res.data);
            }
            catch (err) {

            }
        }

        fetchBlogs();
    }, []);

    const getBlogs = () => {
        let list = [];
        let result= [];

        blogs.map(blogPost => {
            return list.push(
        <div className="post-preview">
            <h2 className="post-title">
              {blogPost.title}
            </h2>
            <h3 className="post-subtitle">
              {blogPost.content.substring(0, 250)} ...
            </h3>
          <Link to={`/blog/${blogPost.id}`} className="stretched-link">Continue reading</Link>
          <p className="post-meta">{blogPost.date_created}</p>
        </div>
            );
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
              <div className="container">
                <div key={i} className='row'>
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {list[i]}
                    </div>
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {list[i+1] ? list[i+1] : null}
                    </div>
                </div>
              </div>
            );
        }

        return result;
    };

    return (
       <div>
            {getBlogs()}
      </div>
    );
};

export default Blog;
