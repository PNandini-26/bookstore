import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'

const Course = () => {
  return (<>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div className='mt-28 item-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'> We're delighted to have you 
             <spam className='text-pink-500'> here! :)</spam> </h1>
            <p className='mt-12'>"Explore our curated collection of books, spanning genres from thrilling fiction 
                to insightful non-fiction. Discover the perfect read for every mood and passion,
                 whether you're a casual reader or a book enthusiast. Shop now and enjoy seamless purchasing with exciting offers!
                 Enjoy your Learing Journey!"</p><br/>
                 <Link to="/">
                 <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300ms'>Back</button>
                 </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
        {
           list.map((item)=>(
            <Cards key={item.id} item={item}/>
           ))
        }
      </div>
    </div>
    </>
  )
}

export default Course
