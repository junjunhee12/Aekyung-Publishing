import styled from "styled-components"
import { P, Span } from "../../All/All"
import 유튜브 from "../../Img/유튜브.svg"    
import 인스타그램 from "../../Img/인스타그램.svg"    
import 페이스북 from "../../Img/페이스북.svg"    
import { Img } from "../Home/Home"
import { useLanguage } from "../../LanguageContext/LanguageContext"

const FootContainer = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: dodgerblue; */
    /* margin-top: 100px; */
`
const Footer = styled.div`
    width: 100%;
    height: 400px;
    /* background-color: dodgerblue; */
`
const Footerwrap = styled.div`
    width: 100%;
    height: 400px;
    /* background-color: dodgerblue; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 65px;
    padding-right: 65px;
    @media (max-width : 1280px){
        flex-direction: column;
        padding: 0;
    }
`
const Footerwrapleft = styled.div`
    width: 50%;
    height: 300px;
    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width : 1280px){
        /* flex-direction: row; */
        width: 100%;
        /* height: 50%; */
        padding-left: 16px;
        align-items: start;
        justify-content: space-around;
    }
`
const Footerwrapright = styled.div`
    width:50%;
    height: 300px;
    /* background-color: pink; */
    display: flex;
    align-items: center;
    justify-content: end;
    @media (max-width : 1280px){
        /* flex-direction: row; */
        justify-content: start;
        width: 100%;
        height: 50%;
    }
`

const H1 = styled.h1`

    margin-bottom: 32px;
    
`

const FootPbox = styled.div`
    display: flex;
    gap: 1rem;
    @media (max-width : 1280px){
        flex-direction: column;
        width: 100%;
    }
`
const FootP = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
`
const FootSpan = styled(Span)`
    padding: 0;
`

const FootImg = styled.div`
    width: 50px;
    height: 50px;
    margin-left: 16px;
    /* background-color: dodgerblue; */
`
const content = {
        Kor: [
        "이용약관",
        "개인정보처리방침 ",
        "고객만족팀 000-000-0000 ",
        "대전광역시 동구 ",
        "전준희",
        ],
        Eng: [
        "Terms of Service",
        " Privacy Policy ",
        "Customer Satisfaction Team 000-000-0000 ",
        "Dong-gu, Daejeon Metropolitan City ",
        "Junhee Jeon",
        ],
};

function Foot(){
    const { language, handleLanguageChange, handleFalse} = useLanguage();
    return(
        
        <FootContainer>
            <Footer>
                <Footerwrap>
                    <Footerwrapleft>
                        <H1>Aekyung</H1>
                        <FootPbox>
                            <FootP>{content[language][0]}</FootP>
                            <FootP>{content[language][1]}</FootP>
                            <FootP>{content[language][2]}</FootP>
                        </FootPbox>
                        <FootSpan>{content[language][3]}<Span>{content[language][4]}</Span></FootSpan>
                        
                    </Footerwrapleft>
                    <Footerwrapright>
                        <FootImg>
                            <Img src={유튜브}/>
                        </FootImg>
                        <FootImg>
                            <Img src={페이스북}/>
                        </FootImg>
                        <FootImg>
                            <Img src={인스타그램}/>
                        </FootImg>
                        
                    </Footerwrapright>
                </Footerwrap>
            </Footer>
        </FootContainer>
        
    )
}

export default Foot