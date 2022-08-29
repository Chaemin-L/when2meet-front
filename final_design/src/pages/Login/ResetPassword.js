import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from 'components/index';
import { Header, InputForm, ButtonSet, StyledBox} from 'components/layout/StyledFloatingBox';

export default function ResetPassword() {
    const navigate = useNavigate();

    return (
        <StyledBox>
            <Header>
                <h1>비밀번호 재설정</h1>
            </Header>
            <InputForm>
                <Input header="Email" />
                <Input header="ID" />
                <Input header="Password" />
                <Input header="Confirm Password" />
            </InputForm>
            <ButtonSet>
                <Button option='large' onClick={()=>navigate('/')}>비밀번호 재설정하기</Button>
                </ButtonSet>
        </StyledBox>
    )
};