import styled from "styled-components";
import { useProgress } from "@react-three/drei";

export default function Loading() {
  const { progress } = useProgress();

  return (
    <StyledLoading progress={progress}>
      <img src="/logo-large.png" alt="" />
      <p>Loading... {Math.round(progress)}%</p>
    </StyledLoading>
  );
}

const StyledLoading = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  opacity: ${(props) => (props?.progress === 100 ? 0 : 1)};
  pointer-events: ${(props) => (props?.progress === 100 ? "none" : "all")};
  background-image: url("/cover.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 999;
  transition: all 1.5s ease-in-out;
  transition-delay: 0.5s;
  img {
    width: 100%;
    max-width: 200px;
  }
  p {
    margin-top: 2rem;
    color: #fcecb8;
    background: rgb(237, 191, 133);
    background: linear-gradient(
      45deg,
      rgba(237, 191, 133, 1) 0%,
      rgba(249, 213, 155, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
