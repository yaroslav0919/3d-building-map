import { motion } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import { useStore } from "../store/store";
import {
  MdFastfood,
  MdEmojiTransportation,
  MdFitnessCenter,
  MdHotel,
} from "react-icons/md";
import VR from "./VR";
import Nav from "./Nav";

export default function Amenities() {
  const { setTrack, modal, setModal, showUI, setShowUI } = useStore();

  useEffect(() => {
    setTrack(100);
  }, [setTrack]);


  return (
    <StyledAmenities
      key="amenities"
      animate={{ opacity: 1, transition: { duration: 2 } }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      props={{ showUI }}
    >
      <Nav />
      {/* <div className="instructions">
        <p>
          <MdOutlineTouchApp /> Drag the upper part of screen to explore
        </p>
      </div> */}
      <div className="amenities">
        <h3>Location</h3>
        <div className="locations">
          <button>
            <MdFastfood /> Food & Drinks
          </button>
          <button>
            <MdFitnessCenter /> Fitness & Health
          </button>
          <button>
            <MdEmojiTransportation /> Transportation
          </button>
          <button>
            <MdHotel /> Hotels
          </button>
        </div>
      </div>
      {/* <div className="links">
        <Link to="/">
          <span>&larr;</span> go back
        </Link>
      </div> */}

      {modal === 1 && (
        <div className="pop">
          <div
            className="close"
            onClick={() => {
              setModal(0);
            }}
          >
            X
          </div>
          <h3>Public Library</h3>
          {/* <img
            src="https://images.unsplash.com/photo-1529148482759-b35b25c5f217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=" "
          /> */}
          <div className="vr">
            <VR image={"/test.jpg"} />
          </div>
        </div>
      )}
      {modal === 2 && (
        <div className="pop">
          <div
            className="close"
            onClick={() => {
              setModal(0);
            }}
          >
            X
          </div>
          <h3>Bus Stop</h3>
          <img
            src="https://images.unsplash.com/photo-1613481417091-d598f6f511de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=" "
          />
        </div>
      )}
      {modal === 3 && (
        <div className="pop">
          <div
            className="close"
            onClick={() => {
              setModal(0);
            }}
          >
            X
          </div>
          <h3>Train Station</h3>
          <img
            src="https://images.unsplash.com/photo-1535105138126-2085cdbc0768?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt=" "
          />
        </div>
      )}
    </StyledAmenities>
  );
}

const StyledAmenities = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  padding: 0;
  z-index: 109;
  background-image: url("/cover.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  opacity: ${({ props }) => (props.showUI ? 1 : 0)} !important;
  transition: all 0.5s ease;
  .amenities {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 1.5rem;
    h3 {
      font-size: 1.2rem;
      font-weight: 500;
      color: #d7b176;
      margin: 0 0 1rem;
    }
    button {
      /* font-weight: 400; */
      width: 100%;
      text-align: left;
      border: none;
      background: transparent;
      color: #d7b176;
      display: flex;
      align-items: center;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      white-space: nowrap;
      font-size: 0.9rem;
      svg {
        margin-right: 0.5rem;
        font-size: 1rem;
      }
    }
  }
  .locations {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 0.6rem;
    column-gap: 1rem;
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
      color: #e26e40;
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
  .pop {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 2rem);
    max-width: 768px;
    max-height: 90vh;
    overflow-x: hidden;
    overflow-y: auto;
    background-image: url("/cover.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: #d7b176;
    padding: 2rem;
    z-index: 110;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    box .vr {
      aspect-ratio: 16/9;
    }
    .close {
      position: absolute;
      top: 2rem;
      right: 2rem;
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
    }
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    img {
      width: 100%;
    }
  }
`;
