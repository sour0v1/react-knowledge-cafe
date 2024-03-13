import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('local.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3 mx-8 p-6 border-r-4">
            {/* <h1 className="text-4xl">Blogs : {blogs.length}</h1> */}
            {
                blogs.map(blog => <Blog key={blog.id} blog = {blog}></Blog>)
            }

        </div>
    );
};

export default Blogs;