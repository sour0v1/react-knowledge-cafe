import { useEffect, useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleBookmark =(blog) =>{
    // console.log(blog.title);
    const newBookamark = [...bookmarks, blog]
    setBookmarks(newBookamark)
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto mt-5'>
      <Blogs handleBookmark = {handleBookmark}></Blogs>
      <Bookmarks bookmarks = {bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
