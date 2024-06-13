import React, { useRef, useState } from 'react';
import styled from "styled-components"
import { H2, HomeP, P } from "../../All/All"
import { Link } from "react-router-dom"
import { GO, Img } from "../Home/Home"
import 강아지1 from "../../Img/강아지1.jpg"
import 강아지2 from "../../Img/강아지2.jpg"
import 강아지3 from "../../Img/강아지3.jpg"
import 고양이1 from "../../Img/고양이1.jpg"
import 고양이2 from "../../Img/고양이2.jpg"
import 고양이3 from "../../Img/고양이3.jpg"
import 호랑이1 from "../../Img/호랑이1.jpg"
import 호랑이2 from "../../Img/호랑이2.jpg"
import 호랑이3 from "../../Img/호랑이3.jpg"
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
        border-top: 1px solid black;
        /* border-bottom: ${(props) => (props.isLast ? 'none' : '1px solid black')}; */
        @media (max-width: 1280px) {
            padding: 50px 1rem;
            height: 45vh;
            /* border-bottom: ${(props) => (props.isLast ? 'none' : '1px solid black')}; */
        }
`

const Beautycontent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    @media (max-width : 1280px){
        height: 100%;
        /* flex-direction: column; */
        justify-content: space-between;
        align-items: center;
        /* justify-content: center; */
    }
    @media (max-width : 499px){
        justify-content: space-between;
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
    width: 50%;
    /* height: 100%; */
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
        [강아지1, 고양이1, 호랑이1],
        [강아지2, 고양이2, 호랑이2],
        [강아지3,고양이3,호랑이3]
    
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


