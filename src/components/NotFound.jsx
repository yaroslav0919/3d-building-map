import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NotFound() {
  return (
    <StyledNotFound>
      <h1>
        You seem lost. <Link to="/">Go back</Link>
      </h1>
    </StyledNotFound>
  );
}

const StyledNotFound = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255);
  a {
    color: #e26e40;
  }
`;
