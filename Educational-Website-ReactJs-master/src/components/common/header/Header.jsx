import React, { useState } from "react"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "}>
            <li>
              <a href="/">Trang chủ</a>
            </li>
            <li>
            <a href="/courses">Khóa học</a>
            </li>
            <li>
            <a href="/about">Giới thiệu</a>
            </li>
            <li>
            <a href="/team">Gia sư</a>
            </li>
            <li>
            <a href="/pricing">Tìm hiểu</a>
            </li>
            <li>
            <a href="/journal">Blog</a>
            </li>
            <li>
            <a href="/contact">Liên hệ</a>
            </li>
          </ul>
          <div className='start'>
          <a href="/login">THAM GIA NGAY</a>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
