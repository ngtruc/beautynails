import React from 'react';
import Gallery from 'react-grid-gallery';
import s1 from './images/slide_1.jpeg'
import s2 from './images/slide_2.jpeg'
import s3 from './images/slide_3.jpg'
import s4 from './images/slide_4.jpeg'
import s5 from './images/slide_5.jpeg'
import s6 from './images/slide_6.jpeg'
import s7 from './images/slide_7.jpeg'
import s8 from './images/slide_8.jpeg'
import s9 from './images/slide_9.jpeg'
import s10 from './images/slide_10.jpeg'
import s11 from './images/slide_11.jpeg'


const IMAGES =
[{
        src: s1,
        thumbnail: s1,
        thumbnailWidth: 150,
        thumbnailHeight: 174,
        caption: "Schwarz und Matt"
},
{
        src: s2,
        thumbnail: s2,
        thumbnailWidth: 150,
        thumbnailHeight: 212,
        caption: "French"
},

{
        src: s3,
        thumbnail: s3,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Rot mit Love Design"
}, 
{
        src: s4,
        thumbnail: s4,
        thumbnailWidth: 150,
        thumbnailHeight: 212,
        caption: "Spitz, Lila und Schwarz mit Glittzer"
}, 
{
        src: s5,
        thumbnail: s5,
        thumbnailWidth: 150,
        thumbnailHeight: 212,
        caption: "Ombre weiß rosa"
}, 
{
        src: s6,
        thumbnail: s6,
        thumbnailWidth: 150,
        thumbnailHeight: 212,
        caption: "Ombre weiß rosa"
}, 
{
        src: s7,
        thumbnail: s7,
        thumbnailWidth: 150,
        thumbnailHeight: 212,
        caption: "French & Sticker"
}, 
{
        src: s8,
        thumbnail: s8,
        thumbnailWidth: 150,
        thumbnailHeight: 212,
        caption: "Blau"
}, 
{
        src: s9,
        thumbnail: s9,
        thumbnailWidth: 150,
        thumbnailHeight: 212,
        caption: "Glittzer schwarz silber"
}, 
{
        src: s10,
        thumbnail: s10,
        thumbnailWidth: 150,
        thumbnailHeight: 212,
        caption: "Rot"
}, 
{
        src: s11,
        thumbnail: s11,
        thumbnailWidth: 150,
        thumbnailHeight: 212,
        caption: "Blau French mit Design"
} 
]

const Slideshow = () => {
    return (
      <div style={{
        display: "block",
        minHeight: "1px",
        width: "100%",
        border: "1px solid #ddd",
        overflow: "auto"}}>
        <Gallery images={IMAGES} enableImageSelection={false}/>
      </div>
    )
}

export default Slideshow