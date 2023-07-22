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
    mode: "onSubmit",
    reValidateMode: "onSubmit",
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
        <InputContainer $isError={errors.email || errors.password}>
          <Input
            placeholder="이메일"
            type="email"
            register={register}
            inputId="email"
            errorCheck={errors.email}
          />
          <Input
            placeholder="비밀번호"
            type="password"
            register={register}
            inputId="password"
            errorCheck={errors.password}
          />
          {(errors.email || errors.password) && (
            <LoginError>{handleErrorMessage()}</LoginError>
          )}
        </InputContainer>

        <ButtonBlock>
          <LargeButton text="로그인" type="submit" />
        </ButtonBlock>
        <SignupContainer>
          <SignupText>아직 회원이 아니신가요?</SignupText>
          <Link to="/join">
            <SignupLink>회원가입하러가기</SignupLink>
          </Link>
        </SignupContainer>
      </LoginForm>
    </LoginContainer>
  );
};
export default Login;

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 90px 10px 15px 10px;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 10px;
  @media (max-width: 529px) {
    padding: ${(props) => (props.$isError ? "10px 15px" : "10px")};
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 15px;
`;

const LoginError = styled.div`
  width: 100%;
  color: red;
  font-size: 12px;
`;

const SignupContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SignupText = styled.div`
  font-size: 14px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.GRAY};
  @media (max-width: 529px) {
    font-size: 12px;
  }
`;

const SignupLink = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.PURPLE100};
  text-decoration: underline;
  @media (max-width: 529px) {
    font-size: 12px;
  }
`;
