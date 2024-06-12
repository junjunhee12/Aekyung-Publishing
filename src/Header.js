import { P } from "./All/All";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext/LanguageContext";
import { FaArrowDown } from 'react-icons/fa';
const Nav = styled.nav`
    width: 100%;
    height: 100px;
    /* background-color: transparent; */
    background-color: ${(props) => (props.height ? "black" : " transparent")};
    position: fixed;
    /* position: absolute;
    left: 0;
    top: 0; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    transition: all 0.3s linear;
    /* overflow-y: scroll; 

    &::-webkit-scrollbar {
        display: none; 
    } */
    &:hover{
        background-color: black;
    }
`;



const Home = styled.div`
    width: 200px;
    display: flex;
    justify-content: center;
    @media (max-width : 1280px){
        width: 100px;
    }
`
const Headcontent = styled.div`
    transition: all 0.3s linear;
    width: ${props => props.navwidth ? "1000px" : "900px"};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width : 1280px){
        display: none;
    }
`
const Language = styled.div`
    width: 200px;
    display: flex;
    justify-content: center;
    text-align: center;
    position:  ${({ isSidebarOpen }) => (isSidebarOpen ? "absolute" : "")};
    top:  ${({ isSidebarOpen }) => (isSidebarOpen ? "25px" : "")};
    @media (max-width : 1280px){
        display: ${({ isSidebarOpen }) => (isSidebarOpen ? "block" : "none")};
    }
`
const Hambar = styled.div`
    width: 200px;
    height: 18px;
    position: relative;
    z-index: 9999;
    /* background-color: white; */
    display: none;
    @media (max-width : 1280px){
        display: flex;
        width: 100px;
        /* cursor: pointer; */
    }
`
const Hambarwrap = styled.div`
    width: 30px;
    height: 18px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
`
const Headbar =styled.div`
    /* width: 30px;
    height: 1px;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%); */
    transition: all 0.5s linear;
            width: ${({ isSidebarOpen }) => (isSidebarOpen ? "30px" : "30px")};
            height: ${({ isSidebarOpen }) => (isSidebarOpen ? "3px" : "1px")};
            background-color: ${({ isSidebarOpen }) => (isSidebarOpen ? "black" : "white")};
            transform:  ${({ isSidebarOpen }) => (isSidebarOpen ? "rotate(45deg)" : "")};
            /* transform-origin: top left; */
            margin-bottom: ${({ isSidebarOpen }) => (isSidebarOpen ? "none" : "8px")};
            position: absolute;
            left: 0;
            top: ${({ isSidebarOpen }) => (isSidebarOpen ? "50%" : "0")};
`

const Bodybar =styled.div`
    /* width: 30px;
    height: 1px;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%); */
    /* transition: all 1s linear; */
    width: ${({ isSidebarOpen }) => (isSidebarOpen ? "none" : "40px")};
            height:  ${({ isSidebarOpen }) => (isSidebarOpen ? "none" : "1px")};
            background-color: ${({ isSidebarOpen }) => (isSidebarOpen ? "" : "white")};
            position: absolute;
            left: 0;
            top: 50%;
`
const Footbar =styled.div`
    /* width: 30px;
    height: 1px;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translateX(-50%); */
        transition: all 0.5s linear;
        width: ${({ isSidebarOpen }) => (isSidebarOpen ? "30px" : "30px")};
        height: ${({ isSidebarOpen }) => (isSidebarOpen ? "3px" : "1px")};
        background-color: ${({ isSidebarOpen }) => (isSidebarOpen ? "black" : "white")};
        transform:  ${({ isSidebarOpen }) => (isSidebarOpen ? "rotate(-45deg)" : "")};
        position: absolute;
        left: 0;
        top: ${({ isSidebarOpen }) => (isSidebarOpen ? "50%" : "100%")};
`
const Kor = styled.select`
    width: 100px;
    height: 50px;
    background-color: white;
    border-radius: 8px;
`;

const SideMe = styled.div`
    width: 100%; 
    height: 100vh;
    background-color: white;
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-110%")}; 
    transition: right 1s linear; 
    z-index: 903;
    cursor: auto;
    display: none;
    @media (max-width : 1280px){
        display: block;
        overflow-y: auto;
    }
`;

const SideMeContainer = styled.div`
    width: 100%;
    max-width: 1600px;
    height: 100%;
    margin: 0 auto;
    /* & > .head{
        width: 100%;
        height: 80px;
        background-color: #B1B1C0;
    } */
`

const Margin = styled.div`
    margin-top: 100px;
`
const Sidewrap = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 100px;
    /* background-color: dodgerblue; */
`

const SideBox = styled.div`
    width: 100%;
    height: 80px;
    /* background-color: yellow; */
    border-bottom: 1px solid black;
    /* padding: 0 1rem; */
    display: flex;
    justify-content: space-between;
`
export const SideBoxex = styled.div`
    width: 100%;
`
export const SideBoxexcontent = styled.div`
    width: 100%;
    height:  ${(props) => ( props.sideheight ? "400px" : "0px")};
    /* height:  ${({ sideheight }) => ( sideheight ? "100%" : "0px")}; */
    background-color: #533A71;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    overflow: hidden;
    transition: height 0.5s ease-in-out; 
    p{
        width: fit-content;
        padding: 1rem 0;
        padding-left: 50px;
        /* text-align: start; */
    }
`
const SideBoxcontent = styled.div`
    width: 180px;
    height: 100%;
    /* background-color: yellowgreen; */
    display: flex;
    align-items: center;
    padding-left: 50px;
    
`
const SideBoxIcon = styled.div`
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
`

// const Sidewrap = styled.div`
//     width: 100%;
//     height: 100%;
//     /* background-color: pink; */
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     /* gap: 1rem; */
//     flex-wrap: nowrap;
// `

// const Div = styled.div`
//     width: 100%;
//     height: 100px;
//     background-color: black;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-family: "Lora";
//         font-size: 28px;
//         color: #000;
//         font-weight: 400;
// `

const Bar = styled.div`
    width: 100%;
    height:  ${(props) => props.navwidth ? "300px" : "0px"};
    background-color: #E0E0E0;
    position: absolute;
    left: 0;
    top: 100px;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    transition: all 0.3s linear;
    opacity: ${props => props.navwidth ? 1 : 0 };
    z-index: 999;
    /* @media (max-width : 1280px){
        position: sticky;
        right: 0;
        top: 10px;
    } */
`
const Barcontentwrap = styled.div`
    transition: all 0.3s linear;
    width: ${props => props.navwidth ? "1000px" : "900px"};
    /* width: 180px; */
    height: 100%;
    /* position: absolute; */
    display:${props => props.navwidth ? "flex" : "none" };
    justify-content: center;
`
const BarcontnetBox = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    /* justify-content: center; */
    padding: 1rem;
    p{
        color: black;
    }
`
const translations = {
    Kor: ["회사소개", "브랜드", "미디어", "지속가능경영", "투자정보"],
    Eng: ["Company Profile", "Brand", "Media", "Sustainability & Responsibility", "Investors"]
};
const company = {
    Kor: ["인사말", "애경소개", "디자인경영", "연구개발"],
    Eng: ["Greetings", "About Aekyung", "Design Management", "R&D"]
};
const brand = {
    Kor: ["뷰티", "퍼스널케어", "홈케어", "연구개발"],
    Eng: ["Beauty", "Personal Care", "Home Care"]
}
const media = {
    Kor: ["광고", "유튜브", "인스타그램", "네이버", "페이스북", "뉴스"],
    Eng: ["ADs", "YouTube", "Instagram", "Naver Posts", "Facebook"]
}
const sustainability = {
    Kor: ["Environmental", "Social", "Governance", "지속가능경영보고서", "윤리경영", "제보하기"],
    Eng: ["Environmental", "Social", "Governance", "Sustainability Report", "Ethical Management"]
}
const investors = {
    Kor: ["IR자료실", "재무정보", "공시정보", "전자정보", "지배구조",],
    Eng: ["Earnings Release", "Financial Information", "Disclosures", "e-Disclosures", "Governance"]
}
const links = ["/Page1", "/Page2", "/Page3", "/Page4", "/Page5"];

// const sidebar = {
//     Kor: ["회사소개", "브랜드", "지속가능경영", "투자정보", "고객만족팀"],
//     Eng: ["Company Profile", "Brand", "Media", "Sustainability & Responsibility", "Investors", "Customer Center"]
// }
function Header() {

    const { language, handleLanguageChange, handleFalse} = useLanguage();
    console.log(handleFalse);
    const [navwidth, setNavwidth] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [height, setHeight] = useState(false)
    // const [sideheight, setSideHeight] = useState(false)
    const [sideheight, setSideHeight] = useState(null)

    useEffect(()=>{
        const scroll = ()=>{
            const scroll = window.scrollY;
            console.log("scroll", scroll);
            if(scroll){
                setHeight(true)
            }else{
                setHeight(false)
            }
        }

        window.addEventListener("scroll", scroll);
        return () => {
            window.removeEventListener("scroll", scroll);
        };
    },[])

    // 온클릭으로 height를 트루로 바꿔줘야 됨

    // const handleOnClick = () =>{
    //     setSideHeight(!sideheight)
    // }
    const handleOnClick = (index) =>{
        setSideHeight(sideheight === index ? null : index)
    }

    console.log(sideheight);
    const toggleSodebar = () =>{
        setIsSidebarOpen(!isSidebarOpen);
        handleFalse()
    }
    const MouseEnter = () =>{
        setNavwidth(true)
    }
    const Mouseunder = () =>{
        setNavwidth(false)
    }
    return (
            <Nav height={height}>
                <Home>
                    <Link to={"/"}>
                        AEKYUNG
                    </Link>
                </Home>
                <Headcontent navwidth={navwidth} onMouseEnter={MouseEnter} onMouseLeave={Mouseunder}>
                    {translations[language].map((text, index) => (
                        <P key={index}>
                            <Link to={links[index]}>{text}</Link>
                        </P>
                    ))}
                </Headcontent>
                <Language>
                    <Kor value={language} onChange={handleLanguageChange}>
                        <option value="Kor">Kor</option>
                        <option value="Eng">Eng</option>
                    </Kor>
                </Language>
                <Hambar onClick={toggleSodebar}>
                    <Hambarwrap>
                        <Headbar isSidebarOpen={isSidebarOpen}></Headbar>
                        <Bodybar isSidebarOpen={isSidebarOpen}></Bodybar>
                        <Footbar isSidebarOpen={isSidebarOpen}></Footbar>
                    </Hambarwrap>
                </Hambar>
                <SideMe isOpen={isSidebarOpen}> {/* Step 3 */}
                {/* Sidebar content */}
                    <Margin></Margin>
                    <SideMeContainer>
                        {/* <div className="head"></div> */}
                        <Language isSidebarOpen={isSidebarOpen}>
                            <Kor value={language} onChange={handleLanguageChange}>
                                <option value="Kor">Kor</option>
                                <option value="Eng">Eng</option>
                            </Kor>
                        </Language>
                        {/* {translations[language].map((content,index)=>(

                        ))} */}
                        <Sidewrap>
                            {translations[language].map((text, index)=>(
                                <>
                                <SideBox>
                                <SideBoxcontent>
                                    {text}
                                </SideBoxcontent>
                                <SideBoxIcon onClick={() => handleOnClick(index)}  >
                                    <FaArrowDown />
                                </SideBoxIcon>
                            </SideBox>
                            <SideBoxex>
                                <SideBoxexcontent sideheight={sideheight === index}>
                                {index === 0 && company[language].map((text, index)=>(
                                    <Link key={index}><p>{text}</p></Link>
                                ))}
                                {index === 1 && brand[language].map((text, index)=>(
                                    <Link key={index}><p>{text}</p></Link>
                                ))}
                                {index === 2 && media[language].map((text, index)=>(
                                    <Link key={index}><p>{text}</p></Link>
                                ))}
                                {index === 3 && sustainability[language].map((text, index)=>(
                                    <Link key={index}><p>{text}</p></Link>
                                ))}
                                {index === 4 && investors[language].map((text, index)=>(
                                    <Link key={index}><p>{text}</p></Link>
                                ))}
                                </SideBoxexcontent>
                            </SideBoxex>
                                </>
                            ))}
                            {/* <SideBox>
                                <SideBoxcontent>
                                    <p>고객정보</p>
                                </SideBoxcontent>
                                <SideBoxIcon onClick={handleOnClick}  >
                                    <FaArrowDown />
                                </SideBoxIcon>
                            </SideBox>
                            <SideBoxex>
                                <SideBoxexcontent sideheight={sideheight}>
                                {company[language].map((text, index)=>(
                                    <Link key={index}><p>{text}</p></Link>
                                ))}
                                </SideBoxexcontent>
                            </SideBoxex> */}
                        </Sidewrap>
                    </SideMeContainer>
                </SideMe>
            <Bar onMouseEnter={MouseEnter} onMouseLeave={Mouseunder} navwidth={navwidth}>
                <Barcontentwrap navwidth={navwidth}>
                    <BarcontnetBox>
                        {company[language].map((text, index)=>(
                            <Link key={index}><p>{text}</p></Link>
                        ))}
                    </BarcontnetBox>
                    <BarcontnetBox>
                        {brand[language].map((text, index)=>(
                            <Link key={index}><p>{text}</p></Link>
                        ))}
                    </BarcontnetBox>
                    <BarcontnetBox>
                        {media[language].map((text, index)=>(
                            <Link key={index}><p>{text}</p></Link>
                        ))}
                    </BarcontnetBox>
                    <BarcontnetBox>
                        {sustainability[language].map((text, index)=>(
                            <Link key={index}><p>{text}</p></Link>
                        ))}
                    </BarcontnetBox>
                    <BarcontnetBox>
                        {investors[language].map((text, index)=>(
                            <Link key={index}><p>{text}</p></Link>
                        ))}
                    </BarcontnetBox>
                </Barcontentwrap>
            </Bar>
            </Nav>
    );
}

export default Header;
