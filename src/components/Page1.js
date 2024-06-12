import React from 'react';
import { useLanguage } from '../LanguageContext/LanguageContext';
import { Container } from '../All/All';

const content = {
    Kor: "여기 페이지 1의 한국어 내용입니다.",
    Eng: "Here is the content of Page 1 in English."
};

function Page1() {
    const { language } = useLanguage();
    
    return (
        <Container>
            <h1>{language === 'Kor' ? '페이지 1' : 'Page 1'}</h1>
            <p>{content[language]}</p>
        </Container>
            
    );
}

export default Page1;
