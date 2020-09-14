import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Header from './Header';


const BlogDetail = (props) => {
    const [blog, setBlog] = useState({});

    useEffect(() => {
        const id = props.match.params.id;

        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/article/${id}`);
                setBlog(res.data);
            }
            catch (err) {

            }
        }

        fetchData();
    }, [props.match.params.id]);


    const createBlog = () => {
        return {__html: blog.content};
    };

    const backgroundImage = require("../images/blog_post.jpg")

    return (
      <div>
        <Header
          styling={{ backgroundImage: `url(${backgroundImage})`}}
          title="blog detail"
          text="Lorem Ipsum has been the industry's standard dummy"
          />
        <div className='container mt-3'>
            <h1 className='display-2'>{blog.title}</h1>
            <div className='mt-5 mb-5' dangerouslySetInnerHTML={createBlog()} />
            <hr />
            <p className="lead mb-5"><Link to='/' className="font-weight-bold">Back to Blogs</Link></p>
        </div>
      </div>
    );
}

export default BlogDetail;
