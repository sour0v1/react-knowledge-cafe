import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readtime, setReadtime] = useState(0);
  const handleBookmark =(blog) =>{
    // console.log(blog.title);
    const newBookamark = [...bookmarks, blog]
    setBookmarks(newBookamark)
  }
  const handleReading = (reading_time, id) =>{
    // console.log('reading time will be added soon', reading_time);
    const newReadTime = readtime + reading_time;
    setReadtime(newReadTime);
    // console.log('id will be added here', id)
    const removeBookMark = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(removeBookMark);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto mt-5'>
      <Blogs handleBookmark = {handleBookmark} handleReading = {handleReading}></Blogs>
      <Bookmarks bookmarks = {bookmarks} readtime = {readtime}></Bookmarks>
      </div>
    </>
  )
}

export default App
