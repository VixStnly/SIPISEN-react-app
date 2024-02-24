
import HeroImage from '../assets/img/slider.png' 
import '../dist/css/main.css'; // Import file CSS untuk styling
import AboutImage from '../assets/img/about.png'
import Team1Image from '../assets/img/service-icon-01.png'
import Team2Image from '../assets/img/service-icon-02.png'
import Team3Image from'../assets/img/service-icon-03.png'
import Team4Image from '../assets/img/service-icon-04.png'
import TopContact from '../assets/img/contact-dec-v3.png'
import FrontImage from '../assets/img/vision.jpeg'
import BackImage from '../assets/img/back.png'
import DesignImage from '../assets/img/design.png'
import AnalystImage from '../assets/img/analyst.png'
import NumberImage from '../assets/img/phone-icon.png'
import MailImage from '../assets/img/email-icon.png'
import LocationImage from '../assets/img/location-icon.png'
import React, { useEffect } from 'react';
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css';
import NavbarComponent from "../components/NavbarComponent";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';


const Homepage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
<div>
  <div className="full-height-container">
    <NavbarComponent/>
    
    <div className="main-banner " id="top" > 
   
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                  <div className="row">
                    <div className="col-lg-12" >
                      <h6 data-aos="fade-right" data-aos-duration="1000" >Sistem Informasi</h6>
                    
                      <h2 data-aos="fade-right" data-aos-duration="1000">Aplikasi Absen Dan Piket <br /> <span className='span-smk'>SMKN 1 CIOMAS</span></h2>
                      <p  data-aos="slide-right" data-aos-duration="1000">aplikasi berbasis web yang di buat oleh sekelompok siswa dari SMKN 1 CIOMAS dengan tujuan mempermudah pekerjaan piket dan absensi, aplikasi ini dibuat dengan beberapa rancangan di mulai dari analyst-design-dront end- back end</p>
                      
                    </div>
                    <div className="col-lg-12">
                      <div className="border-first-button scroll-to-section" data-aos="fade-right" data-aos-duration="1000">
                        <a href="#contact">Hubungi Kami</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right-image wow fadeInRight" data-aos="fade-left" data-aos-duration="1000">
                <img src={HeroImage} alt="hero-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="about section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-left-image wow fadeInLeft" data-aos="fade-right" data-aos-duration="1000">
                <img src={AboutImage} alt="hero-img" />
                </div>
              </div>
              <div className="col-lg-6 align-self-center wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <div className="about-right-content">
                  <div className="section-heading">
                    <h6 data-aos="fade-left" data-aos-duration="1000">About Us</h6>
                    <h4 data-aos="fade-left" data-aos-duration="1000">Apa itu aplikasi absensi <em>/ piket?</em></h4>
                    <div className="line-dec"></div>
                  </div>
                  <p data-aos="fade-left" data-aos-duration="1000">
                    Aplikasi ini adalah aplikasi yang digunakan untuk memudahkan pekerjaan guru piket. Aplikasi ini digunakan untuk menginput data absen atau data lainnya yang akan langsung terlihat oleh kepala sekolah.
                  </p>
                  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    
              </div>
            </div>
            <div id="services" className="services section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
              <h6></h6>
              <h4 ata-aos="fade-left" data-aos-duration="1000" >About <em> Team</em></h4>
              <div className="line-dec"></div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="naccs">
              <div className="grid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="menu">
                      <div className="first-thumb active">
                        <div className="thumb" data-aos="fade-right" data-aos-duration="1000" >
                          <span className="icon"><img src={Team1Image} alt="hero-img" data-aos="fade-right" data-aos-duration="1000" />
                          Vision Engineering
                          </span>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <ul className="nacc">
                      {/* Render your list items here */}
                      {/* Example for the first item */}
                      <li className="active">
                        <div>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-6 align-self-center" data-aos="fade-right" data-aos-duration="1000" > 
                                <div className="left-text">
                                  <h4 data-aos="fade-left" data-aos-duration="1000" >Apa itu Vision Engineering</h4>
                                  <p>
                                    Vision Engineering adalah Team dari sebuah project uji level. project kali ini yang di buat team Vision Engineering adalah Sistem Informasi Piket Dan Absensi. Tujuan di buatnya aplikasi ini adalah untuk mempermudah Guru Piket.
                                  </p>
                                  
                                </div>
                              </div>
                              <div className="col-lg-6 align-self-center">
                                <div className="right-image">
                                <img src={FrontImage} alt="hero-img" data-aos="fade-left" data-aos-duration="1000"  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MDBFooter bgColor='primary' className='text-black text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Vision Engineering</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
              Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est
              atque cumque eum delectus sint!
            </p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                  Link 1
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 2
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 3
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 4
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Links</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-white'>
                  Link 1
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 2
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 3
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Link 4
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
          </div></div></div>
  );
};



export default Homepage;
