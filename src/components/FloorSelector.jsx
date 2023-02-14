import { useStore } from "../store/store";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdOutlineTouchApp } from "react-icons/md";
import Plates from "./Plates";
import VR from "./VR";
import Nav from "./Nav";

export default function FloorSelector() {
  const { track, setTrack, vrModal, setVrModal, showUI } = useStore();
  const [planModal, setPlanModal] = useState(false);

  const close = () => {
    setPlanModal(false);
  };

  useEffect(() => {
    setTrack(1);
  }, [setTrack]);

  return (
    <StyledFloorSelector
      key="floor"
      animate={{ opacity: 1, transition: { duration: 2 } }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      props={{ showUI }}
    >
      {planModal && <Plates close={close} />}
      <Nav />
      {/* <div className="instructions">
        <p>
          <MdOutlineTouchApp /> Drag the right side of screen to explore
        </p>
      </div> */}
      <div className="floors">
        <h3>Floor Plans</h3>
        {/* <button
          onClick={() => setTrack(1)}
          className={track === 1 ? "active" : undefined}
        >
          <p>Roof</p>
        </button>
        <button
          onClick={() => setTrack(2)}
          className={track === 2 ? "active" : undefined}
        >
          <p>Ninth</p>
          <span>24,000</span>
        </button> */}
        <button
          onClick={() => setTrack(2)}
          className={track === 2 ? "active" : undefined}
        >
          <p>Eighth</p>
          <span>24,000</span>
        </button>
        <button
          onClick={() => setTrack(3)}
          className={track === 3 ? "active" : undefined}
        >
          <p>Seventh</p>
          <span>24,000</span>
        </button>
        <button
          onClick={() => setTrack(4)}
          className={track === 4 ? "active" : undefined}
        >
          <p>Sixth</p>
          <span>24,000</span>
        </button>
        <button
          onClick={() => setTrack(5)}
          className={track === 5 ? "active" : undefined}
        >
          <p>Fifth</p>
          <span>18,000</span>
        </button>
        <button
          onClick={() => setTrack(6)}
          className={track === 6 ? "active" : undefined}
        >
          <p>Fourth</p>
          <span>20,000</span>
        </button>
        <button
          onClick={() => setTrack(7)}
          className={track === 7 ? "active" : undefined}
        >
          <p>Third</p>
          <span>21,000</span>
        </button>
        <button
          onClick={() => setTrack(8)}
          className={track === 8 ? "active" : undefined}
        >
          <p>Second</p>
          <span>19,000</span>
        </button>
        <button
          onClick={() => setTrack(9)}
          className={track === 9 ? "active" : undefined}
        >
          <p>First</p>
          <span>15,000</span>
        </button>
        <button
          onClick={() => setTrack(10)}
          className={track === 10 ? "active" : undefined}
        >
          <p>Ground</p>
          <span>10,000</span>
        </button>
        <button
          onClick={() => setTrack(11)}
          className={track === 11 ? "active" : undefined}
        >
          <p>Lower Ground</p>
          <span>20,000</span>
        </button>
      </div>
      <div className="plans">
        <button onClick={() => setPlanModal(true)}>Floor / Space Plans</button>
      </div>
      {/* <div className="links">
        <Link to="/">
          <span>&larr;</span> go back
        </Link>
      </div> */}
      {vrModal && (
        <div className="vr">
          <div className="close">
            <button onClick={() => setVrModal(false)}>X</button>
          </div>
          <h3>360 View</h3>
          <div className="viewer">
            {/* <VR image={"/test.jpg"} /> */}
            <iframe
              src="https://ninety90i.co.uk/7Newgate/"
              frameborder="0"
              title="360 Viewer"
            ></iframe>
          </div>
        </div>
      )}
    </StyledFloorSelector>
  );
}

const StyledFloorSelector = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  padding: 0;
  z-index: 109;
  background-image: url("/cover.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 1rem 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  opacity: ${({ props }) => (props.showUI ? 1 : 0)} !important;
  transition: all 0.5s ease;
  h3 {
    font-size: 1.2rem;
    color: #d7b176;
    margin: 0 0 1rem;
  }
  .vr {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/cover.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: #d7b176;
    z-index: 101;
    padding: 2rem;
    * {
      color: #d7b176;
    }
    .viewer {
      background: #000;
      height: 80vh;
      margin-top: 1.5rem;
      overflow: hidden;
      iframe {
        width: 100%;
        height: 100%;
      }
    }
    .close {
      position: absolute;
      top: 2rem;
      right: 2rem;
      button {
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;
        background: transparent;
        border: none;
      }
    }
  }
  .floors {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding: 0 1.5rem;
    button {
      padding: 0.4rem 1.2rem;
      width: 100%;
      min-width: 200px;
      text-align: left;
      border: none;
      background: transparent;
      border: 1px solid #d7b17680;
      color: #d7b176;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      white-space: nowrap;
      &:not(:last-child) {
        margin-bottom: 0.5rem;
      }
      @media (max-width: 768px) {
        padding: 0.3rem 1rem;
        min-width: auto;
      }
      p {
        margin-right: 0.5rem;
        font-size: 0.9rem;
        @media (max-width: 768px) {
          font-size: 0.8rem;
        }
      }
      span {
        margin-left: 0.5rem;
        font-size: 0.7rem;
        color: inherit;
        @media (max-width: 768px) {
          font-size: 0.6rem;
        }
      }
    }
    .active {
      background: rgb(237, 191, 133);
      background: linear-gradient(
        45deg,
        rgba(237, 191, 133, 1) 0%,
        rgba(249, 213, 155, 1) 100%
      );
      color: #000;
    }
  }
  .instructions {
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    font-weight: 500;
    font-size: 0.8rem;
    p {
      background: #fff;
      display: flex;
      align-items: center;
      line-height: 1;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
    }
    svg {
      font-size: 1.2rem;
      color: #e26e40;
      margin-right: 0.5rem;
    }
    @media (max-width: 768px) {
      right: 1rem;
      top: 1rem;
      font-size: 0.7rem;
    }
  }
  .links {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    transition: all 0.7s ease-in-out;
    @media (max-width: 768px) {
      margin-top: 1rem;
    }
    a {
      color: #fff;
      font-size: 1.5rem;
      font-weight: 900;
      margin-bottom: 0.5rem;
      border-bottom: 2px solid transparent;
      padding-bottom: 0.25rem;
      transition: all 0.3s ease;
      @media (max-width: 768px) {
        font-size: 1rem;
      }
      &:hover {
        border-bottom: 2px solid #e26e40;
      }
    }
  }
  .plans {
    transition: all 0.3s ease-in-out;
    color: #fff;
    width: 100%;
    button {
      width: 100%;
      color: inherit;
      font-size: 1rem;
      border: none;
      margin-top: 1rem;
      background: rgb(237, 191, 133);
      background: linear-gradient(
        45deg,
        rgba(237, 191, 133, 1) 0%,
        rgba(249, 213, 155, 1) 100%
      );
      color: #000;
      padding: 0.7rem 1.5rem;
      transition: all 0.3s ease;
      cursor: pointer;
      @media (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
  }
  .plan {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      display: block;
      width: 100%;
      height: 20%;
      padding: 3rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3rem;
      background: #e26e40;
      color: #fff;
      cursor: pointer;
    }
    div {
      padding: 2rem;
      height: 80%;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }
  }
`;
