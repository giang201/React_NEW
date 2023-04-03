import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Nếu bạn quan tâm đến chúng tôi</h1>
            <span>Hãy để lại email, chúng tôi sẽ liên hệ với bạn</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Địa chỉ Email' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>GIA SƯ ONLINE</h1>
            <span>GIÁO DỤC & HỌC TẬP TRỰC TUYẾN</span>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Tìm hiểu ngay</h3>
            <ul>
              <li>Về chúng tôi</li>
              <li>Hoạt động</li>
              <li>Khóa học</li>
              <li>Blog</li>
              <li>Liên hệ</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Gia sư online</h3>
            <ul>
              <li>Gia sư tiêu biểu</li>
              <li>Khóa học</li>
              <li>Điều khoản và điều kiện</li>
              <li>Phản hồi từ học sinh</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Bài đăng gần đây</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Bạn Còn Câu Hỏi Nào Khác?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                19 Phố Lê Thanh Nghị, Bách Khoa, Hai Bà Trưng, Hà Nội
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +84 987654321
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                giasuonline@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
