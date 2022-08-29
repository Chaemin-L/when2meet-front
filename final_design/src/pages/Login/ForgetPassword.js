import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from 'components/index';
import { Header, InputForm, ButtonSet, StyledBox, Footer } from 'components/layout/StyledFloatingBox';

export default function ForgetPassword() {
    const navigate = useNavigate();

    return (
        <StyledBox>
            <Header>
                <h1>비밀번호 찾기</h1>
            </Header>
            <InputForm>
                <Input header="Email" />
                <Button option='large'>보안 코드 전송</Button>
                <div>
                    <div>입력하신 이메일 주소로 보안코드가 전송되었습니다.</div>
                    <div>아래에 보안코드를 입력해주세요!</div>
                </div>
            </InputForm>
            <ButtonSet>
                <Input header='보안코드' />
                </ButtonSet>
            <Footer>
                <Button option='xsmall' onClick={()=>navigate('/reset')}>입력 완료</Button>
            </Footer>
        </StyledBox>
    )
};