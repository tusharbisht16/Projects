//import React from 'react'
// import styles from './Footer.module.css';
import { Center } from "@chakra-ui/react";
import Style from "./Footer.module.css";

const Footer = () => {
  return (
    <>

<Center>
      
      
      <footer
        className={Style.footer}
        style={{
          backgroundColor: "white",
          marginTop: "20px",
          // marginLeft: "80px",

        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" ,
          flexWrap:"wrap"
        }}>
          <div style={{ width: "400px", marginBottom: "20pxf",marginLeft:"20px"}}>
            <img src="https://picjj.com/images/2024/05/11/hQZkl.jpeg" style={{width:'5vw', marginBottom:'2vh'}}></img>
            <p style={{marginLeft:"10px"}}>
              We at Beyond Boundries aim to create  <br />2
              Million Employment Opportunities
              <br />
              by year 2023 in pakistan.
            </p>
            <br />
  
            <img 
            style={{marginLeft:"5px", height:'35px'}}
              decoding="async"
              src="https://picjj.com/images/2024/05/14/7hfF1.png"
              alt="LinkedIn"
            ></img>
            <br />
            <img
            style={{marginLeft:"10px", height:'20px'}}
              decoding="async"
              src="https://picjj.com/images/2024/05/14/7hjLI.png"
              alt="Email"
            ></img>
          </div>
          <div className={Style.navlink}>
            <ul>
              <a href="#">About</a>
              <br />
              <a href="#">Services</a>
              <br />
              <a href="#">Meetups</a>
              <br />
              <a href="#">Trainings</a>
              <br />
              <a href="#">Seminars</a>
              <br />
              <a href="#">Marketplace</a>
              <br />
              <a href="#">Hire a VA</a>
              <br />
              <a href="#">Success Stories</a>
              <br />
              <a href="#">Recent Seminars</a>
            </ul>
          </div>
          <div className={Style.navlink2}>
            <ul>
              <a href="#">Blog</a>
              <br />
              <a href="#">FAQ</a>
              <br />
              <a href="#">Team</a>
              <br />
              <a href="#">Press</a>
              <br />
              <a href="#">Career</a>
              <br />
              <a href="#">Our Offices</a>
              <br />
              <a href="#">Request a Call</a>
              <br />
              <a href="#">Our Publication</a>
              <br />
            </ul>
          </div>
          <div style={{marginRight:"30px",marginTop:"10px"}}>
            <h2 style={{ fontSize: "30px" ,marginRight:"50px"}}>Contact Us</h2>
            <img style={{height:'35px', marginLeft:'-8px'}}
              decoding="async"
              src="https://picjj.com/images/2024/05/14/7hfF1.png"
              alt="LinkedIn"
            ></img>
            <br />
            <img style={{ height:'28px'}}
              decoding="async"
              src="https://picjj.com/images/2024/05/14/7hjLI.png"
              alt="Email"
            ></img>
          </div>
        </div>
        <div>
          <p style={{ display:'flex',justifyContent:'center' ,marginTop:'2vh'}}>
            Beyond boundries is operated by Beyond boundries Insight Pvt Ltd. Copyright 2020 -
            All right Recived
          </p>
        </div>
      </footer>
      </Center>
    </>
   
  );
};

export default Footer;
