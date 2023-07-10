import styled from "styled-components";

const Input = ({ placeholder, type, register, inputId }) => {
  return (
    <InputContainer>
      <InputBox
        placeholder={placeholder}
        type={type}
        {...register(inputId)}
        id={inputId}
      />
    </InputContainer>
  );
};
export default Input;

const InputContainer = styled.div`
  width: 100%;
  height: 35px;
  padding: 7px 15px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.PURPLE70};
`;

const InputBox = styled.input`
  width: 100%;
  border: none;
  font-size: 16px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.GRAY};
    font-weight: 600;
  }
`;
