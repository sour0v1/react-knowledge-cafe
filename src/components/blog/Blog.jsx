import PropTypes from 'prop-types';
import bookmark from '../../assets/images/bookmark.png'
const Blog = ({blog}) => {
    console.log(blog)
    const {title, cover_image, author, author_image, posted_date, reading_time, hashtag} = blog;
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
                    <p className='text-gray-700 font-medium'>{reading_time}</p>
                    <img src={bookmark} alt="" />
                </div>
            </div>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <div className='flex gap-3'>
            {
                hashtag.map((hash, idx) => <p className='text-gray-700 font-medium' key={idx}>#{hash}</p>)
            }
            </div>
            <div>
            <a href=""><p className='underline text-blue-700 font-medium'>Mark as read</p></a>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;