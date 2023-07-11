import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "../../component/Input";
import LargeButton from "../../component/LargeButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { validation } from "./Validation";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  const handleErrorMessage = () => {
    if (errors.email) {
      return errors.email.message;
    } else if (errors.password) {
      return errors.password.message;
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <InputBlock>
            <Input
              placeholder="이메일"
              type="email"
              register={register}
              inputId="email"
              errorCheck={errors.email}
            />
          </InputBlock>
          <InputBlock>
            <Input
              placeholder="비밀번호"
              type="password"
              register={register}
              inputId="password"
              errorCheck={errors.password}
            />
          </InputBlock>
          <LoginError>{handleErrorMessage()}</LoginError>
        </InputContainer>

        <ButtonBlock>
          <LargeButton text="로그인" type="submit" />
        </ButtonBlock>
        <SignupContainer>
          <SignupText>
            아직 회원이 아니신가요?
            <Link to="/join">
              <SignupLink>회원가입하러 가기</SignupLink>
            </Link>
          </SignupText>
        </SignupContainer>
      </LoginForm>
    </LoginContainer>
  );
};
export default Login;

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 90px 10px;
`;
const LoginForm = styled.form`
  padding: 10px;
`;

const InputContainer = styled.div`
  padding: 10px 0;
`;

const InputBlock = styled.div`
  margin-top: 10px;
`;

const ButtonBlock = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const LoginError = styled.div`
  width: 100%;
  color: red;
  font-size: 12px;
  margin: 10px 0;
`;

const SignupContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const SignupText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.GRAY};
`;

const SignupLink = styled.span`
  color: ${({ theme }) => theme.colors.PURPLE100};
  margin: 0 10px;
`;
