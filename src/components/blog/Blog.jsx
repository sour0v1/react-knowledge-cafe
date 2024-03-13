import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({blog, handleBookmark, handleReading}) => {
    // console.log(blog)
    const {id, title, cover_image, author, author_image, posted_date, reading_time, hashtag} = blog;
    return (
        <div className='space-y-3 mb-10'>
            
            <img className='rounded' src={cover_image} alt={`image of ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-3 items-center'>
                    <img className='w-16 h-16 rounded-full' src={author_image} alt= {`author image of ${author_image}`} />
                    <div>
                        <h4 className='font-bold'>{author}</h4>
                        <p className='text-gray-700 font-medium'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <p className='text-gray-700 font-medium'>{reading_time} min read</p>
                    {/* <img src={bookmark} alt="" /> */}
                    <button onClick={() => handleBookmark(blog)}><FaRegBookmark /></button>
                </div>
            </div>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <div className='flex gap-3'>
            {
                hashtag.map((hash, idx) => <p className='text-gray-700 font-medium' key={idx}>#{hash}</p>)
            }
            </div>
            <div>
            <p onClick={()=> handleReading(reading_time, id)} className='underline text-blue-700 font-medium'><button>Mark as read</button></p>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleReading : PropTypes.func.isRequired
}

export default Blog;