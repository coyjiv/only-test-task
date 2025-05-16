import gsap from "gsap"
import { useEffect, useRef } from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


type Props = {}

export const TimeSliderBlock = (props: Props) => {
    const ref = useRef(null)
    useEffect(()=>{
      if(!ref.current) return 
      gsap.fromTo(ref.current, {
            x: 100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1
        })

    },[gsap])
  return (
    <>
    <SDiv ref={ref}>TimeSliderBasdaslock213123123</SDiv>
    <Swiper 
    spaceBetween={50}
    slidesPerView={3}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    autoplay={
      {
        delay: 2000,
        disableOnInteraction: true,
      }
    }
    modules={[Autoplay, Pagination, Navigation]}
    onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
    </Swiper>
    </>
  )
}

const SDiv = styled.div`
  width: fit-content;
  background-color: blue;
`