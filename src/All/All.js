import styled from "styled-components";

export const P = styled.p`
    width: 100%;
    font-size: 16px;
    color: black;
    display: flex;
    justify-content: center;
` 


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: gray; */
`



// Home.js 에서 사용 -------------------------------------------

export const HomeP = styled.p`
    font-weight: 600;
    font-size: 18px;
    padding-left: 1rem;
    color: black;
    @media (max-width :499px){
        font-size: 12px;
    }
` 
export const H2 = styled.h2`
    font-size: 24px;
    font-weight: bold;
    padding: 1rem 1rem;
    @media (max-width: 1280px) {
        /* border-bottom: 1px solid black; */
    }
    
`
export const Span = styled.span`
    font-size: 16px;
    font-weight: 500;
    padding-left: 1rem;
    @media (max-width :499px){
        font-size: 12px;
        font-weight: 100;
    }
`
// Home.js 에서 사용 끝 ----------------------------------------