import styled from "styled-components";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useStore } from "../store/store";

export default function Eye() {
  const { showUI, setShowUI } = useStore();

  return (
    <StyledEye
      onClick={() => {
        setShowUI(!showUI);
      }}
    >
      <MdOutlineRemoveRedEye />
    </StyledEye>
  );
}

const StyledEye = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  color: #606060;
  border: 2px solid #606060;
  border-radius: 50%;
  padding: 0.25rem;
  background: none;
  width: 2rem;
  height: 2rem;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.8;
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
  svg {
    font-size: 1.5rem;
  }
`;
