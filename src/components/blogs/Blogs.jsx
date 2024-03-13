import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookmark, handleReading}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('local.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3 mr-4 ml-4">
            {/* <h1 className="text-4xl">Blogs : {blogs.length}</h1> */}
            {
                blogs.map((blog) => <Blog handleBookmark = {handleBookmark} key={blog.id} blog = {blog} handleReading = {handleReading}></Blog>)
            }

        </div>
    );
};
Blogs.propTypes = {
    handleBookmark : PropTypes.func.isRequired,
    handleReading : PropTypes.func.isRequired
}
export default Blogs;