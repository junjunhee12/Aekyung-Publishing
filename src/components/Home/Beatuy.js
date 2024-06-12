import React, { useRef, useState } from 'react';
import styled from "styled-components"
import { H2, HomeP, P } from "../../All/All"
import { Link } from "react-router-dom"
import { GO, Img } from "../Home/Home"
import 자연 from "../../Img/자연4.png"
import 자연1 from "../../Img/자연3.jpg"
import 자연2 from "../../Img/자연1.jpg"
import 카페1 from "../../Img/카페1.jpg"
import 카페2 from "../../Img/카페2.jpg"
import 카페3 from "../../Img/카페3.jpg"
import 웨딩1 from "../../Img/웨딩1.jpg"
import 웨딩2 from "../../Img/웨딩2.jpg"
import 웨딩3 from "../../Img/웨딩3.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../../All/styles.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useLanguage } from '../../LanguageContext/LanguageContext';
// import required modules
const BeautyC = styled.div`

        width: 100%;
        max-width: 1400px;
        height: 60vh ;
        background-color: white;
        padding: 100px 1rem;
        margin: 0 auto ; 
        border-bottom: ${(props) => (props.isLast ? 'none' : '1px solid black')};
        @media (max-width: 1280px) {
            padding: 120px 1rem;
            height: 70vh;
            border-bottom: ${(props) => (props.isLast ? 'none' : '1px solid black')};
        }
`

const Beautycontent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    @media (max-width : 1280px){
        flex-direction: column;
        justify-content: center;
        /* justify-content: center; */
    }
`
const Beautyleft = styled.div`
    width: 40%;
    height: 100%;
    /* background-color: pink; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* justify-content: space-around; */
    .newP{
        font-weight: 100;
        padding: 0;
        /* font-size: 14px; */
    }
    & > ${H2}{
    border: none;
}

    
`
const Beautyright = styled.div`
    width: 60%;
    height: 100%;
    /* height: 700px; */
    /* background-color: yellowgreen; */
    display: flex;
    
`
const Click = styled.div`
        width: 180px;
        height: 50px;
        background-color: white;
        border: 1px solid black;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem 0 1rem 1rem;
        border-radius: 16px;
        cursor: pointer;
        transition: all 0.3s linear;
        a{
            color: black;
        }
        &:hover{
            background-color: black;
            a{
                color: white;
            }
        }
        @media (max-width : 499px){
            width: 140px;
            height: 30px;
        }

`
const palce = ["Beauty","Personal Care","Personal Care"]

const click ={
    Kor:["바로가기"],
    Eng:["Click Here"]
}
const swiperimg = [
        [자연, 자연2, 자연1],
        [카페1, 카페2, 카페3],
        [웨딩1,웨딩2,웨딩3]
    
]
const content1 = [
    {
        Kor: [
        "뷰티",
        "아름다움의 무한한 가능성을 품은",
        "당신을 위한 뷰티풀 모먼트 "
        ],
        Eng: [
        "",
        "Beautiful moments for those who have the",
        "measureless potential for beauty",
        ],
    },
    {
        Kor: [
        "퍼스널 케어",
        "당신의 일상에 건강하고 향기로운 아름다움을",
        "선사합니다.",
        ],
        Eng: [
        "",
        "Add a touch of natural beauty and",
        "fragrance to your life.",
        ],
    },
    {
        Kor: [
        "홈케어",
        "나의 일상 생활을 깨끗하게 편리하게 가치있게",
        ""
        ],
        Eng: [
        "",
        "Keep your daily life clean, comfortable and valuable",
        ""
        ],
    }
];
function Beauty({sideheight}){
    const { language, handleLanguageChange, handleFalse} = useLanguage();
    return(
        <>
        {palce.map((content, index) =>(
            <BeautyC isLast={index === palce.length - 1}>
            <Beautycontent>
                <Beautyleft>
                    <H2>{content}</H2>
                    <HomeP>
                    {content1[index][language][0]}
                        <HomeP className="newP">
                        {content1[index][language][1]}<br></br>
                            {content1[index][language][2]}
                            
                        </HomeP>
                    </HomeP>
                    <Click>
                        <Link to={"/"}>
                            {click[language]}
                        </Link>
                    </Click>
                </Beautyleft>
                <Beautyright>
                <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper2"
                    >
                        {swiperimg.map((text,index1)=>(
                            <SwiperSlide  >
                                <Img key={index1} src={text[index]} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Beautyright>
            </Beautycontent>
        </BeautyC>
        ))}
            
        </>
    )
}

export default Beauty


