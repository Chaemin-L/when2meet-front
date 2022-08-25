import React from 'react';
import { Input, CheckBox, Button } from 'components/index';
import { Link, useNavigate } from 'react-router-dom';
import googleLogo from 'assets/img/google_logo.png';
import { Header, InputForm, Setting, ButtonSet, StyledBox, Footer } from 'components/StyledFloatingBox';

export default function Login() {
    // 로그인 인증 로직 구현시 삭제, 페이지 확인을 위한 임시 navigate
    const navigate = useNavigate();

    return (
        <StyledBox>
            <Header>
            <h1>로그인하기</h1>
            </Header>
            <InputForm>
                <Input option="wide" header="ID" />
                <Input option="wide" header="Password" />
                <Setting>
                    <CheckBox text="정보를 기억합니다" />
                    <span>비밀번호 찾기</span> {/* 비밀번호 찾기 페이지 구현시 Link 태그로 변경*/}
                </Setting>
            </InputForm>
            <ButtonSet>
                <Button onClick={() => navigate('/main')}> 로그인 </Button>
                <Button> <img src={googleLogo} width={16} alt="구글 로고"/> Sign in with Google </Button>
            </ButtonSet>
            <Footer>
                <span>아직 계정이 없으신가요?</span>
                <Link to='signUp'> 계정 등록 하러 가기</Link>
            </Footer>
        </StyledBox>
    )
};