import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='CHÀO MỪNG ĐẾN VỚI GIA SƯ ONLINE' title='Chuyên Môn Giáo Dục Trực Tuyến Tốt Nhất' />
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
