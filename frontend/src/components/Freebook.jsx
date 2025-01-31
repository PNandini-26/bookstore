import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";


import axios from "axios"
import Cards from "./Cards";
const Freebook = () => {
  
    const [Book, setBook] = useState([])
    useEffect(() => {
      const getBook = async () => {
        try {
          const res = await axios.get("http://localhost:4001/book");
          const data=(res.data.filter((data) => data.category === "Free"));
          console.log(res.data);
          setBook(data)

        } catch (error) {
          console.log(error)
        }
      }

      getBook();
    }, []);


    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
          <div>
            <h1 className='font-semibold text-xl pb-2'> Free Offered Courses</h1>
            <p>This are some Free books for you so that you can learn and gain some knowledge
              for more details and other books you can check our small amount of fees , just it out ,
              Happy Learing!!!</p>
          </div>

          <div>
            <Slider {...settings}>
              {Book.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </div>
      </>
    )
  }


  export default Freebook
