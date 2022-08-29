import React from 'react';
import { Input, Button } from 'components/index';
import { Link } from 'react-router-dom';
import { Header, InputForm, ButtonSet, StyledBox, Footer } from 'components/layout/StyledFloatingBox';

export default function SignUp() {
    return (
        <StyledBox>
            <Header>
                <h1>회원가입하기</h1>
            </Header>
            <InputForm>
                <Input header="Email" />
                <Input header="ID" />
                <Input header="Password" isPassword={true} />
                <Input header="Confirm Password" isPassword={true}/>
            </InputForm>
            <ButtonSet>
                <Button option='large'>회원가입하기</Button>
                </ButtonSet>
            <Footer>
                <span>아직 계정이 이미 있으신가요?</span>
                <Link to='/'>로그인 하러 가기</Link>
            </Footer>
        </StyledBox>
    )
};