import React from 'react';
import { Input, CheckBox, Button } from 'components/index';
import { Link, useNavigate } from 'react-router-dom';
import googleLogo from'assets/img/google_logo.png';

export default function Login() {
    // 로그인 인증 로직 구현시 삭제, 페이지 확인을 위한 임시 navigate
    const navigate = useNavigate();

    return (
        <div>
            <h1>로그인하기</h1>
            <Input header="ID" />
            <Input header="Password" />
            <div>
                <CheckBox text="정보를 기억합니다" />
                <span>비밀번호 찾기</span> {/* 비밀번호 찾기 페이지 구현시 Link 태그로 변경*/}
            </div>
            <div>
                <Button onClick={() => navigate('/main')}> 로그인 </Button>
                <Button> <img src={googleLogo} width={16} alt="구글 로고"/> Sign in with Google </Button>
            </div>
            <div>
                아직 계정이 없으신가요?
                <Link to='signUp'>계정 등록 하러 가기</Link>
            </div>
        </div>
    )
};