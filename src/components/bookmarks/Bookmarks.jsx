import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className='md:w-1/3 h-fit ml-4 mr-3 bg-gray-200 p-4 rounded'>
                <h1 className='text-xl font-bold mb-3'>Bookmarks Blogs : {bookmarks.length}</h1>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
                
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.object.isRequired
}
export default Bookmarks;