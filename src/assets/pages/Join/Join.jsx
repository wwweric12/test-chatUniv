import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "../../component/Input";
import LargeButton from "../../component/LargeButton";
import { validation } from "./Validation";

const Join = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
    mode: " onSubmit",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleAuthentic = (e) => {
    e.preventDefault();
    //   인증번호 보내기
  };

  return (
    <>
      <SignupText>회원가입</SignupText>
      <InputContainer onSubmit={handleSubmit(onSubmit)}>
        <InputBox>
          <InputText>이메일</InputText>
          <Input
            type="email"
            register={register}
            inputId="email"
            errorCheck={errors.email}
          />
          {errors.email && <SignError>{errors.email.message}</SignError>}
        </InputBox>
        <InputBox>
          <InputText>인증번호</InputText>
          <AuthenticBox>
            <Input
              type="text"
              register={register}
              inputId="checkEmail"
              errorCheck={errors.checkEmail}
            />
            <AuthenticButton onClick={handleAuthentic}>
              인증하기
            </AuthenticButton>
          </AuthenticBox>
          {errors.checkEmail && (
            <SignError>{errors.checkEmail.message}</SignError>
          )}
        </InputBox>
        <InputBox>
          <InputText>비밀번호</InputText>
          <Input
            type="password"
            register={register}
            inputId="password"
            errorCheck={errors.password}
          />
          {errors.password && <SignError>{errors.password.message}</SignError>}
        </InputBox>
        <InputBox>
          <InputText>비밀번호 확인</InputText>
          <Input
            type="password"
            register={register}
            inputId="checkPassword"
            errorCheck={errors.checkPassword}
          />
          {errors.checkPassword && (
            <SignError>{errors.checkPassword.message}</SignError>
          )}
        </InputBox>

        <ButtonBlock>
          <LargeButton text="회원가입" type="submit" />
        </ButtonBlock>
      </InputContainer>
    </>
  );
};
export default Join;

const SignupText = styled.div`
  font-size: 24px;
  margin: 91.5px auto;
  padding: 10px;
  @media (max-width: 529px) {
    margin: 5.25px auto;
    font-size: 20px;
  }
`;
const InputContainer = styled.form`
  width: 100%;
  padding: 10px;
`;

const InputBox = styled.div`
  padding: 5px 10px;
`;

const InputText = styled.div`
  padding: 10px 0;
  font-size: 16px;
  @media (max-width: 529px) {
    font-size: 14px;
  }
`;

const AuthenticBox = styled.div`
  display: flex;
  align-items: center;
`;

const AuthenticButton = styled.button`
  margin: 3.5px 0;
  margin-left: 10px;
  padding: 5px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.WHITE};
  background-color: ${({ theme }) => theme.colors.PURPLE100};
  @media (max-width: 529px) {
    font-size: 12px;
  }
`;

const ButtonBlock = styled.div`
  padding: 20px 35px;
  margin: 108.5px auto;
  @media (max-width: 529px) {
    margin: 5.25px auto;
  }
`;

const SignError = styled.div`
  width: 100%;
  color: red;
  font-size: 12px;
`;
