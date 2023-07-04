import styled from "styled-components";
import { Theme } from "../../styles/Theme";

/* 
  <LargeButton text="로그인" ispurple={true} /> 이런식으로 사용하시면 됩니다.
*/

const LargeButton = ({ text, ispurple }) => {
  return <Button $ispurple={ispurple}>{text}</Button>;
};

export default LargeButton;

const Button = styled.button`
  width: 440px;
  height: 46px;
  border-radius: 10px;
  border: 2px solid ${Theme.colors.PURPLE70};
  background-color: ${(props) =>
    props.$ispurple ? Theme.colors.PURPLE70 : Theme.colors.WHITE};
  color: ${(props) =>
    props.$ispurple ? Theme.colors.WHITE : Theme.colors.PURPLE70};
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;
