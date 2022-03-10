import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/av1.png'
import AVTR2 from '../../assets/av2.png'
import AVTR3 from '../../assets/av3.png'
import AVTR4 from '../../assets/av4.png'
// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar:AVTR1,
    name:'Tina Show',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ratione nam assumenda explicabo. Eveniet mollitia aliquid natus placeat voluptate nostrum fuga, consequatur laborum pariatur, laboriosam amet! Sunt corporis odit inventore.'

  },
  {
    avatar:AVTR2,
    name:'Don Markon',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor cupiditate qui facere, odio ipsum magni, ratione similique, ad perspiciatis quibusdam tempora eveniet vero? Error, non. Possimus magni, quae facere numquam non quasi? Soluta?'
  },
  {
    avatar:AVTR3,
    name:'Alavra Kedavra',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis accusamus culpa ad explicabo, enim voluptatem harum iusto minus tempore amet suscipit laboriosam. Enim cumque maxime rerum, hic architecto vitae id adipisci sit aperiam vel.'

  },
  {
    avatar: AVTR4,
    name: 'Mila Coonis',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur quas ab neque veniam, sed modi ducimus earum animi fuga reprehenderit praesentium facilis laborum rem ut fugiat beatae distinctio vero repudiandae voluptate nobis quia! Molestias, deserunt!'
  }
]




const Testimonials = () => {
  return (
   <section id="testimonials">
     <h5>Review from clients</h5>
     <h2>Testimonials</h2>
     <Swiper className="container testimonials__container"
           // install Swiper modules
           modules={[Pagination]}
           spaceBetween={40}
           slidesPerView={1}
           navigation
           pagination={{ clickable: true }}
           >
     {
       data.map(({avatar, name, review}, index)=>{
         return(
          <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="" />
         </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
        </SwiperSlide>
         )
       })
     }
     </Swiper>
   </section>
  )
}

export default Testimonials