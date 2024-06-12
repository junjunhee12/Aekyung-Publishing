import styled from "styled-components"
import { Container, H2, HomeP, P, Span } from "../../All/All"
import 자연 from "../../Img/자연4.png"
import 자연1 from "../../Img/자연3.jpg"
import 자연2 from "../../Img/자연1.jpg"
import { useLanguage } from "../../LanguageContext/LanguageContext"
import { FaArrowDown,FaArrowUp  } from 'react-icons/fa';
import { SideBoxex, SideBoxexcontent } from "../../Header";
import { startTransition, useState } from "react";
import { Link } from "react-router-dom";
import MBeauty from "./Mbeauty"
import Beauty from "./Beatuy"
import Ad from "./Ad"

const HomeSideBoxex = styled(SideBoxex)`
`
const HomeSideBoxexcontent = styled(SideBoxexcontent)`
    display: none;
    
    @media (max-width : 1280px){
        width: 100%;
        height:  ${(props) => ( props.sideheight ? "620px" : "0px")};
        background-color: #FAFAFA;
        display: block;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p{
        width: fit-content;
        padding: 1rem;
    }
    @media (max-width :499px){
        height:  ${(props) => ( props.sideheight ? "450px" : "0px")};
    }
    }
`
const Imgbox = styled.div`
    width: 100%;
    height: 100vh;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const HomeMain = styled.div`
    width: 100%;
    height: 100vh;
    /* padding: 100px 0 0; */
    padding: 100px 300px;
    /* max-width: 1400px; */
    
    /* margin: 0 auto; */
    border-bottom: 1px solid black;
    @media (max-width : 1280px){
        height: 100%;
        display: block;
        border-bottom: none;
        padding: 0;
    }
`
const HomeTop = styled.div`
    width: 100%;
    /* max-width: 1400px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    @media (max-width : 1280px){
        height: 100vh;
        display: block;
        border-bottom: none;
    }
    @media (max-width : 499px){
        height: 120vh;
        display: block;
        border-bottom: none;
    }
`
const HomeTopright = styled.div`
    width: 500px ;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width : 1280px){
        width: 100%;
        display: block;
        height: 80px;
    }
`
const Toprightcontent = styled.div`
    width:180px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    cursor: pointer;
    @media (max-width : 1280px){
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid black;
    }
`
const HomeIcon = styled.div`
    display: none;
    @media (max-width : 1280px){
        display: flex;

        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        transition: all 0.3s linear;
        &:hover{
            background-color: black;
            color: white;
        }
    }
`
const MobImgwrp = styled.div`
    width: 100%;
    height: 350px;
    @media (max-width :499px){
        height: 350px;
    }
`

const Mobimg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const GO = styled.div`
    width: 180px;
    height: 50px;
    display: flex;
        justify-content: center;
        align-items: center;
    @media (max-width : 1280px){
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
    }
`


// 데스크탑  --------------------------------------
const HomeButtom = styled.div`
    width: 100%;
    max-width: 1400px;
    height: 600px;
    /* border-bottom: 1px solid black; */
    display: flex;
    justify-content: center;
    @media (max-width : 1280px){
        display: none;
    }
`
const HomeButtomleft = styled.div`
    padding: 3rem 0;
    width: 50%;
    height: 100%;
    .link{
        width: 180px;
        height: 50px;
        background-color: white;
        border: 1px solid black;
        a{
            color: black;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem 0 0 1rem;
        border-radius: 16px;
        cursor: pointer;
        transition: all 0.3s linear;
        &:hover{
            background-color: black;
            a{
                color: white;
            }
        }
    }
`
const HomeButtomright = styled.div`
    width: 50%;
    height: 100%;
    padding: 3rem 1rem;
`
// 데스크탑 끝 ----------------------------------
const translationsK = {
    Kor: ["Environmental", "Social", "Governance"],
    Eng: ["Environmental", "Social","Governance"]
};
const translationsE = {
    Kor: ["환경", "사회", "지배구조"],
    Eng: ["", "",""]
};
const content = [
    {
        Kor: [
        "애경산업은 지속가능한 환경을 위해\n책임을 다하겠습니다.",
        "바로가기",
        ],
        Eng: [
        "Aekyung Industrial is committed to sustainable environmental practices.",
        "Click Here",
        ],
    },
    {
        Kor: [
        "애경산업의 노력은 임직원과 협력사, 지역사회 그리고 고객이 함께하는 향기로운 동행이 될 것입니다.",
        "바로가기",
        ],
        Eng: [
        "Aekyung Industrial's efforts will be a fragrant journey with employees, partners, the community, and customers.",
        "Click Here",
        ],
    },
    {
        Kor: ["투명하고 건전한 기업 활동을 이어나가겠습니다.", "바로가기"],
        Eng: [
        "We will continue transparent and sound corporate activities.",
        "Click Here",
        ],
    },
];
const img = [자연, 자연1, 자연2 ]

const links = ["/Page1", "/Page2", "/Page3", "/Page4", "/Page5"];
function Home(){
    const { language, handleLanguageChange, handleFalse} = useLanguage();
    const [sideheight, setSideHeight] = useState(null)
    const [index, setIndex] = useState(0);

    const handleIndexChange = (newIndex) => {
        setIndex(newIndex);
    };
    const handleOnClick = (index) =>{
        setSideHeight(sideheight === index ? null : index)

    }
    return(
        <Container>
            <Imgbox>
                <Img src={자연}/>
            </Imgbox>
            <HomeMain>
                <HomeTop>
                    <H2>SUSTAINABLE<br></br>LOVE & RESPECT</H2>
                        <HomeTopright>
                            {/* 모바일 시작 */}
                            {translationsK[language].map((text,index)=>(
                                <>
                                    <Toprightcontent>
                                        <div onClick={() => handleIndexChange(index)}>
                                            <Span>{text}</Span>
                                            <HomeP>{translationsE[language][index]}</HomeP>
                                        </div>
                                        <HomeIcon onClick={() => handleOnClick(index)}>
                                            {sideheight === index ?(<FaArrowUp  />):(<FaArrowDown  />) }
                                        </HomeIcon>
                                    </Toprightcontent>
                                    
                                    <HomeSideBoxex>
                                        <HomeSideBoxexcontent sideheight={sideheight === index}>
                                            <MobImgwrp>
                                                <Mobimg src={img[index]} />
                                            </MobImgwrp>
                                            <HomeP>
                                                {content[index][language][0]}
                                            </HomeP>
                                            <GO>
                                                <Link to={links[index]}>
                                                    {content[index][language][1]}
                                                </Link>
                                            </GO>
                                        </HomeSideBoxexcontent>
                                    </HomeSideBoxex>
                                </>
                            ))}
                            {/* 모바일 끝 */}
                            <MBeauty sideheight={sideheight}/>
                        </HomeTopright>
                </HomeTop>
                {/* 데스크탑 시작 */}
                <HomeButtom>
                    <HomeButtomleft>
                        <HomeP>
                            {content[index][language][0]}
                        </HomeP>
                        <div className="link">
                                <Link to={links[index]}>
                                    <GO>{content[index][language][1]}</GO>
                                </Link>
                        </div>
                    </HomeButtomleft>
                    <HomeButtomright>
                        <Img src={img[index]}/>
                    </HomeButtomright>
                </HomeButtom>
                {/* 데스크탑 끝 */}
            </HomeMain>
            <Beauty sideheight={sideheight}/>
            <Ad />
        </Container>
    )
}

export default Home