import styles from "./ForthScreen.module.css"
import result1 from "../images/ספיר דיין כלה 1.png"
import result2 from "../images/ספיר דיין כלה 2.png"
import result3 from "../images/ספיר דיין כלה 3.png"
import result4 from "../images/ספיר דיין כלה 4.png"
import result5 from "../images/ספיר דיין כלה 5.png"
import result6 from "../images/ספיר דיין כלה 6.png"
import result7 from "../images/ספיר דיין כלה 7.png"
import result8 from "../images/ספיר דיין כלה 8.png"
import result9 from "../images/ספיר דיין כלה 9.png"
import result10 from "../images/ספיר דיין כלה 10.png"
import result11 from "../images/ספיר דיין כלה 11.png"
import result12 from "../images/ספיר דיין כלה 12.png"
import result13 from "../images/ספיר דיין כלה 13.png"
import result14 from "../images/ספיר דיין כלה 14.png"
import result15 from "../images/ספיר דיין כלה 15.png"
import result16 from "../images/ספיר דיין כלה 16.png"
import result17 from "../images/ספיר דיין כלה 17.png"
import result18 from "../images/ספיר דיין כלה 18.png"
import result51 from "../videos/ספיר דיין כלה 51.mp4"
import result19 from "../images/ספיר דיין כלה 19.png"
import result20 from "../images/ספיר דיין כלה 20.png"
import result21 from "../images/ספיר דיין כלה 21.png"
import result22 from "../images/ספיר דיין כלה 22.png"
import result23 from "../images/ספיר דיין כלה 23.png"
import result24 from "../images/ספיר דיין כלה 24.png"
import result25 from "../images/ספיר דיין כלה 25.png"
import result26 from "../images/ספיר דיין כלה 26.png"
import result27 from "../images/ספיר דיין כלה 27.png"
import result28 from "../images/ספיר דיין כלה 28.png"
import result29 from "../images/ספיר דיין כלה 29.png"
import result30 from "../images/ספיר דיין כלה 30.png"
import result31 from "../images/ספיר דיין כלה 31.png"
import result32 from "../images/ספיר דיין כלה 32.png"
import result33 from "../images/ספיר דיין כלה 33.png"
import result34 from "../images/ספיר דיין כלה 34.png"
import result35 from "../images/ספיר דיין כלה 35.png"
import result36 from "../images/ספיר דיין כלה 36.png"
import result37 from "../images/ספיר דיין כלה 37.png"
import result38 from "../images/ספיר דיין כלה 38.png"
import result39 from "../images/ספיר דיין כלה 39.png"
import result40 from "../images/ספיר דיין כלה 40.png"
import result41 from "../images/ספיר דיין כלה 41.png"
import result42 from "../images/ספיר דיין כלה 42.png"
import result43 from "../images/ספיר דיין כלה 43.png"
import result44 from "../images/ספיר דיין כלה 44.png"
import result45 from "../images/ספיר דיין כלה 45.png"
import result46 from "../images/ספיר דיין כלה 46.png"
import result47 from "../images/ספיר דיין כלה 47.png"
import result48 from "../images/ספיר דיין כלה 48.png"
import result49 from "../images/ספיר דיין כלה 49.png"
import result50 from "../images/ספיר דיין כלה 50.png"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from "react-slick"
import Button from "../components/button/Button"

const ForthScreen=()=>{

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2500,
        slidesToShow: window.innerWidth < 450 ? 1 : window.innerWidth < 650 ? 2 : window.innerWidth < 1150 ? 3 :4,
        slidesToScroll:1,
  
      };
   
    const content = [

      {
        type: 'image',
        src: result3,
      },

      {
        type: 'image',
        src: result24,
      },
        
      
   
 

       
          {
              type: 'image',
              src: result2,
            },
          
         
              {
                type: 'image',
                src: result5,
              },
              {
                type: 'image',
                src: result6,
              }, 
               {
                  type: 'image',
                  src: result1,
                },
             
        {
            type: 'image',
            src: result14,
          },
     
          {
            type: 'image',
            src: result10,
          },
          {
            type: 'image',
            src: result4,
          },
            {
              type: 'image',
              src: result9,
            },
        {
          type: 'image',
          src: result7,
        },
        {
          type: 'image',
          src: result8,
        },
  
   
        {
          type: 'image',
          src: result12,
        },
        {
            type: 'image',
            src: result13,
          },

          {
            type: 'image',
            src: result16,
          },

          {
            type: 'image',
            src: result17,
          },
          {
            type: 'image',
            src: result18,
          },


          {
            type: 'image',
            src: result19,
          },

          {
            type: 'image',
            src: result20,
          },
          {
            type: 'image',
            src: result21,
          },
          {
            type: 'image',
            src: result22,
          },

          {
            type: 'image',
            src: result23,
          },
     
          {
            type: 'image',
            src: result25,
          },

          {
            type: 'image',
            src: result26,
          },
          {
            type: 'image',
            src: result27,
          },
          {
            type: 'image',
            src: result28,
          },

          {
            type: 'image',
            src: result29,
          },
          {
            type: 'image',
            src: result30,
          },
          {
            type: 'image',
            src: result31,
          },

          {
            type: 'image',
            src: result32,
          },
          {
            type: 'image',
            src: result33,
          },
          {
            type: 'image',
            src: result34,
          },

          {
            type: 'image',
            src: result35,
          },
          {
            type: 'image',
            src: result36,
          },
          {
            type: 'image',
            src: result37,
          },

          {
            type: 'image',
            src: result38,
          },
          {
            type: 'image',
            src: result39,
          },
          {
            type: 'image',
            src: result40,
          },

          {
            type: 'image',
            src: result41,
          },
          {
            type: 'image',
            src: result42,
          },
          {
            type: 'image',
            src: result43,
          },

          {
            type: 'image',
            src: result44,
          },
          {
            type: 'image',
            src: result45,
          },
          {
            type: 'image',
            src: result46,
          },

          {
            type: 'image',
            src: result47,
          },
          {
            type: 'image',
            src: result48,
          },
          {
            type: 'image',
            src: result49,
          },
          {
            type: 'image',
            src: result50,
          },

          {
            type: 'video',
            src: result51,
          },
         
    ];
    
   
    return <>
    <div className={styles.background} id="לקוחות ממליצות">
<div className={styles.title}>הנה טעימה מהכלות שליוויתי</div>
<div className={styles.explain}>אספתי קמצוץ מבין הכלות המדהימות שאיפרתי וליוויתי, מוזמנים להחליק ולהתרשם</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`ספיר דיין כלה מספר ${index + 1}`} />
              )}
              {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
                
                  itemprop="image"
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
         
              )}
            </div>
          ))}
        </Slider>
      </div>
  <Button text="ספיר, בואי נדבר"/>
  </div>
    </>
}
export default ForthScreen