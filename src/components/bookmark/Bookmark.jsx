import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-white rounded p-2 mb-3'>
            <h2 className='font-semibold'>{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark : PropTypes.object.isRequired
}
export default Bookmark;