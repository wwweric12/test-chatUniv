import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import make_board from "../images/make_board.svg";
import make_chatting from "../images/make_chatting.svg";

const SmallButton = ({ text, type }) => {
  return (
    <Button type={type}>
      <Image
        type={type}
        src={type === "board" ? make_board : make_chatting}
        alt="smallBtn_img"
      />
      {text}
    </Button>
  );
};

/* 
   <SmallButton text="채팅방 만들기" type="chatting" /> 이런식으로 사용하시면 됩니다.
*/

export default SmallButton;

const Button = styled.button`
  display: flex;
  justify-content: space-around;
  width: ${(props) => (props.type === "board" ? 158 : 148)}px;
  height: 41px;
  border-radius: 50px;
  padding: 10px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  box-shadow: 0px 4px 4px 0px #00000040;
  background-color: ${Theme.colors.PURPLE10};
  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 20px;
  height: 20px;
`;
