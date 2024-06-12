import styled from "styled-components";
import { Container, P } from "../../All/All";
import { Img } from "./Home";
import 자연 from "../../Img/자연1.jpg";
import { useLanguage } from "../../LanguageContext/LanguageContext";

const Adbox = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #eee;
  @media (max-width : 499px){
    height: 110vh;
  }
`;

const Adboxwrap = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  /* background-color: yellow; */
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media (max-width : 1280px){
    flex-direction: column;
    }
`;

const Adboxleft = styled.div`
  width: 50%;
  height: 480px;
  @media (max-width : 1280px){
      width: 100%;
      height: 100%;
    }
  /* background-color: green; */
`;

const Adboxright = styled.div`
  width: 50%;
  height: 480px;
  /* background-color: yellowgreen; */
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width : 1280px){
      width: 100%;
      height: 100%;
      /* flex-direction: row; */
    }
`;

const AdboxrightTop = styled.div`
  width: 100%;
  /* background-color: pink; */
`;

const AdboxrightBottom = styled.div`
  width: 100%;
  /* background-color: white; */
  border-top: 1px solid black;
  padding-top:16px ;
`;

const AdP = styled(P)`
  width: 100%;
  font-size: 16px;
  color: black;
  display: block;
  margin-bottom: 32px;
  word-wrap: break-word; /* Ensure long words break to the next line */
  white-space: normal; /* Allow text to wrap to the next line */
  @media (max-width : 1280px){
      padding-top: 16px;
    }
`;

const AdP2 = styled(P)`
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  color: black;
  display: block;
  margin-bottom: 16px;
  word-wrap: break-word; /* Ensure long words break to the next line */
  white-space: normal; /* Allow text to wrap to the next line */
`;

const H4 = styled.h4`
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 16px;
`;
const content = {
  Kor: [
  "신상품",
  "루나 하이퍼 매직 파운데이션 ",
  "하드 제형이 메쉬 소재 필터 만나 리퀴드 형태로 변하는 파운데이션 ",
  "생활부티기업 애경산업의 메이크업 전문 브랜드 '루나'(LUNA)에서 메이크업의 밀착력과 커버력을 높여 무결점 피부를 표현해 주는 '하이퍼 메쉬 파운데이션'(HYPER MESH FOUNDATION)을 출시했다. 루나 하이퍼 메쉬 파운데이션은 리퀴드 파운데이션의 디테일한 피부 표현과 쿠션의 편의성이 더해진 새로운 형태의 메쉬 파운데이션으로 밀도 있는 커버 메이크업을 완성해 준다. ",
  ],
  Eng: [
  "New Product",
  "Luna Hyper Magic Foundation",
  "A foundation that transforms from a solid form to a liquid form when it meets a mesh filter",
  "Aekyung Industrial's makeup brand 'LUNA' has launched the 'HYPER MESH FOUNDATION,' which enhances adherence and coverage to create flawless skin. The Luna Hyper Mesh Foundation is a new type of mesh foundation that combines the detailed skin expression of liquid foundation with the convenience of a cushion, providing dense coverage makeup.",
  ],
};
function Ad() {
  const { language, handleLanguageChange, handleFalse} = useLanguage();
  return (
    <>
      <Container>
        <Adbox>
          <Adboxwrap>
            <Adboxleft>
              <Img src={자연} />
            </Adboxleft>
            <Adboxright>
              <AdboxrightTop>
                <AdP>{content[language][0]}</AdP>
                <H4>{content[language][1]}</H4>
                <AdP2>{content[language][2]}</AdP2>
              </AdboxrightTop>
              <AdboxrightBottom>
                <AdP>
                {content[language][3]}
                </AdP>
              </AdboxrightBottom>
            </Adboxright>
          </Adboxwrap>
        </Adbox>
      </Container>
    </>
  );
}

export default Ad;
