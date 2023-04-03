import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <Back title='Liên hệ chúng tôi' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <img src="./images/bg.webp" alt="" />
          </div>
          <div className='right row'>
            <h1>Liên hệ chúng tôi</h1>

            <div className='items grid2'>
              <div className='box'>
                <h4>ĐỊA CHỈ</h4>
                <p>19 Phố Lê Thanh Nghị, Bách Khoa, Hai Bà Trưng, Hà Nội</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> giasuonline@gmail.com</p>
              </div>
              <div className='box'>
                <h4>SỐ ĐIỆN THOẠI:</h4>
                <p> + 84 987654321</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Họ và tên' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Môn học' />
              <textarea cols='30' rows='10'>
                Viết tin nhắn ở đây
              </textarea>
              <button className='primary-btn'>GỬI TIN NHẮN</button>
            </form>

            <h3>Theo dõi chúng tôi</h3>
            <span>FACEBOOK TWITTER INSTAGRAM</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
