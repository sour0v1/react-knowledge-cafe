import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';
const Bookmarks = ({bookmarks, readtime}) => {
    return (
        <div className='md:w-1/3 h-fit ml-4 mr-3 bg-gray-200 p-4 rounded'>
                <div>
                    <h2>Spend time on read : {readtime} min</h2>
                </div>
                <h1 className='text-xl font-bold mb-3'>Bookmarks Blogs : {bookmarks.length}</h1>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
                
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array.isRequired,
    readtime : PropTypes.number.isRequired
}
export default Bookmarks;