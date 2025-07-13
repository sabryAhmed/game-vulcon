import React from 'react'
import './Footer.css'
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import payments from '../../assets/image/payments.png'

function Footer() {
  return (
    <div className='foot' >
      <div className="container ">
        <div className="row ">
          <div className="col-lg-3 col-md-6 col-sm-12 ">
            <div className="opt-list-card mx-5 ">
              <div className="list-roo ">

              <p>Condimentum adipiscing vel neque dis nam parturient orci at scelerisque neque dis nam parturient.</p>
              </div>
              <div className="list-roo-contact-me ">
                <p><span><FaTelegramPlane/> </span>Egypy (Cairo) </p>
                <p><span><MdOutlinePhoneAndroid/> </span>(+20) 01050723990 <span><MdOutlinePhoneAndroid/></span> (+20)  01558678991 </p>
                <p><span><CgMail/></span>sabryahmedss81@gmail.com </p>
              </div>
            </div>
            
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 ">
            <div className="opt-list-card  mx-5 ">
         <p>New York</p>
         <p>London SF</p>
         <p>Edinburgh</p>
         <p>Los Angeles</p>
         <p>Chicago</p>
<p>Las Vegas</p>
        
            </div>
            
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 ">
            <div className="list-icon-us   mx-5 ">
            
         <p ><a  href="https://api.whatsapp.com/send/?phone=201050723990&text&type=phone_number&app_absent=0" title="" ><FaWhatsapp/>  Whats app</a></p>
          <p><a href="https://github.com/sabryAhmed" title=""><FaGithub/> Githup</a></p>
          <p><a href="https://www.facebook.com/profile.php?id=61562025602560&mibextid=ZbWKwL" title=""><FaFacebookF/> Facebook</a></p>
          <p><a href="" title=""><FaInstagram/> Instagram</a></p>

      
  
            </div>
            
          </div>


<div className="col-lg-3 col-md-6 col-sm-12">
  <p>Privacy Policy</p>
  <p>Returns</p>
  <p>Terms & Conditions</p>
  <p>Contact Us</p>
  <p>E-Commerce</p>
  <p>Latest News</p>
  <p>Our Sitemap</p>
</div>

<div className="col-lg-12 col-sm-12 text-center ">

  {/* <img src={payments} alt=""  /> */}
      <strong className=' text-capitalize text-danger mx-5'>sabry copy right © 2025  E-commerce solutions.</strong>

</div>
        </div>
      </div>
    </div>
  )
}

export default Footer