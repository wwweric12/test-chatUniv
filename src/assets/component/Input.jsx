import styled from "styled-components";

const Input = ({ placeholder, type, register, inputId, errorCheck }) => {
  return (
    <InputContainer $isError={errorCheck}>
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
  border: ${(props) => (props.$isError ? "2px" : "1px")} solid
    ${(props) =>
      props.$isError
        ? props.theme.colors.PURPLE100
        : props.theme.colors.PURPLE70};
  @media (max-width: 529px) {
    padding: 8.5px 15px;
  }
`;

const InputBox = styled.input`
  width: 100%;
  border: none;
  font-size: 16px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.GRAY};
    font-weight: 600;
  }
  @media (max-width: 529px) {
    font-size: 14px;
  }
`;
