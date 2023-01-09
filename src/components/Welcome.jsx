import styled from "styled-components";
import { Link } from "react-router-dom";
import { useProgress } from "@react-three/drei";
import { useStore } from "../store/store";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Welcome() {
  const { progress } = useProgress();
  const setTrack = useStore((state) => state.setTrack);

  useEffect(() => {
    setTrack(0);
  }, [setTrack]);

  return (
    <StyledWelcome
      progress={progress}
      key="welcome"
      animate={{ x: "0%", opacity: 1, transition: { duration: 2 } }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0, transition: { duration: 2 } }}
    >
      <div
        className="left"
        animate={{ x: "0%", transition: { duration: 2, delay: 1 } }}
        initial={{ x: "-100%" }}
        exit={{ x: "-100%", transition: { duration: 2 } }}
      >
        <div>
          <img src="/logo-large.png" alt="" />
        </div>
        <div>
          <h3>
            CRAFTED FOR <br />
            MAYFAIR
          </h3>
          <Link to="/view" className="btn">
            Explore
          </Link>
        </div>
      </div>

      <div className="right">
        <img src="/main.jpg" alt="" />
      </div>
    </StyledWelcome>
  );
}

const StyledWelcome = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 110;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 5s ease-in-out;
  background-image: url("/cover.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
  .left {
    position: relative;
    transform: translateX(0%);
    background-image: url("/cover.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    flex: 1;
    height: 100%;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transition: all 1.5s ease-in-out;
    * {
      opacity: ${(props) => (props?.progress === 100 ? 1 : 0)};
      pointer-events: ${(props) => (props?.progress === 100 ? "all" : "none")};
      transition: all 1.5s ease-in-out;
      transition-delay: 3s;
    }
    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      h3 {
        text-align: center;
        line-height: 1.5;
        color: #d7b176;
        font-weight: 100;
        letter-spacing: 0.2rem;
        font-size: 1.2rem;
      }
      &:last-child {
        flex: 0.8;
      }
    }
    img {
      width: 100%;
      max-width: 200px;
    }
    @media (max-width: 768px) {
      padding: 2rem;
      width: 100%;
    }
  }
  .right {
    position: relative;
    height: 100%;
    flex: ${(props) => (props?.progress === 100 ? 1.2 : 0)};
    transition: all 2s ease-in-out;
    transition-delay: 1.5s;
    @media (max-width: 768px) {
      width: 100%;
    }
    img {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      /* clip-path: polygon(0 0, 100% 0, 100% 100%, 5% 100%); */
      @media (max-width: 768px) {
        width: 100%;
        /* clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); */
      }
    }
  }
  .btn {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(237, 191, 133);
    background: linear-gradient(
      45deg,
      rgba(237, 191, 133, 1) 0%,
      rgba(249, 213, 155, 1) 100%
    );
    font-size: 1.2rem;
    padding: 0.7rem 1.5rem;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;
