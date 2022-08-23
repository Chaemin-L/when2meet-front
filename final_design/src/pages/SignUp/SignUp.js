import React from 'react';
import { Input, Button } from 'components/index';
import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <div>
            <h1>회원가입하기</h1>
            <Input header="Email" />
            <Input header="ID" />
            <Input header="Password" />
            <Input header="Confirm Password" />
            <Button option='large'>회원가입하기</Button>
            <div>
                아직 계정이 이미 있으신가요?
                <Link to='/'>로그인 하러 가기</Link>
            </div>
        </div>
    )
};