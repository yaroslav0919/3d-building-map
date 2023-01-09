import { useEffect, useState } from "react";
import styled from "styled-components";
import { useStore } from "../store/store";
import { MdOutlineTouchApp } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdCloudDownload } from "react-icons/md";
import Plates from "./Plates";
import Nav from "./Nav";

export default function AreaCalculator() {
  const {
    area,
    setTrack,
    setArea,
    selected9th,
    selected8th,
    selected7th,
    selected6th,
    selected5th,
    selected4th,
    selected3rd,
    selected2nd,
    selected1st,
    selected0th,
    setSelected9th,
    setSelected8th,
    setSelected7th,
    setSelected6th,
    setSelected5th,
    setSelected4th,
    setSelected3rd,
    setSelected2nd,
    setSelected1st,
    setSelected0th,
    showUI,
  } = useStore();

  const [planModal, setPlanModal] = useState(false);

  const close = () => {
    setPlanModal(false);
  };

  useEffect(() => {
    setArea(
      (selected9th ? 24000 : 0) +
        (selected8th ? 24000 : 0) +
        (selected7th ? 24000 : 0) +
        (selected6th ? 24000 : 0) +
        (selected5th ? 18000 : 0) +
        (selected4th ? 20000 : 0) +
        (selected3rd ? 21000 : 0) +
        (selected2nd ? 19000 : 0) +
        (selected1st ? 15000 : 0) +
        (selected0th ? 10000 : 0)
    );
  }, [
    setArea,
    selected9th,
    selected8th,
    selected7th,
    selected6th,
    selected5th,
    selected4th,
    selected3rd,
    selected2nd,
    selected1st,
    selected0th,
  ]);

  useEffect(() => {
    setTrack(99);
  }, [setTrack]);

  return (
    <StyledAreaCalculator
      key="area"
      animate={{ opacity: 1, transition: { duration: 2 } }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      props={{
        showUI,
      }}
    >
      {planModal && <Plates close={close} />}
      <Nav />
      {/* <div className="instructions">
        <p>
          <MdOutlineTouchApp /> Click on floors to calculate area
        </p>
      </div> */}

      <div className="area">
        <h3>Availability</h3>
        <h4>Selected: {area} sq. ft.</h4>
      </div>
      <div className="floors">
        <button
          onClick={() => setSelected9th(!selected9th)}
          className={selected9th ? "active" : undefined}
        >
          <p>9th Floor</p>
          <span>24,000</span>
        </button>
        <button
          onClick={() => setSelected8th(!selected8th)}
          className={selected8th ? "active" : undefined}
        >
          <p>8th Floor</p>
          <span>24,000</span>
        </button>
        <button
          onClick={() => setSelected7th(!selected7th)}
          className={selected7th ? "active" : undefined}
        >
          <p>7th Floor</p>
          <span>24,000</span>
        </button>
        <button
          onClick={() => setSelected6th(!selected6th)}
          className={selected6th ? "active" : undefined}
        >
          <p>6th Floor</p>
          <span>24,000</span>
        </button>
        <button
          onClick={() => setSelected5th(!selected5th)}
          className={selected5th ? "active" : undefined}
        >
          <p>5th Floor</p>
          <span>18,000</span>
        </button>
        <button
          onClick={() => setSelected4th(!selected4th)}
          className={selected4th ? "active" : undefined}
        >
          <p>4th Floor</p>
          <span>20,000</span>
        </button>
        <button
          onClick={() => setSelected3rd(!selected3rd)}
          className={selected3rd ? "active" : undefined}
        >
          <p>3rd Floor</p>
          <span>21,000</span>
        </button>
        <button
          onClick={() => setSelected2nd(!selected2nd)}
          className={selected2nd ? "active" : undefined}
        >
          <p>2nd Floor</p>
          <span>19,000</span>
        </button>
        <button
          onClick={() => setSelected1st(!selected1st)}
          className={selected1st ? "active" : undefined}
        >
          <p>1st Floor</p>
          <span>15,000</span>
        </button>
        <button
          onClick={() => setSelected0th(!selected0th)}
          className={selected0th ? "active" : undefined}
        >
          <p>Ground Floor</p>
          <span>10,000</span>
        </button>
      </div>
      {(selected9th ||
        selected8th ||
        selected7th ||
        selected6th ||
        selected5th ||
        selected4th ||
        selected3rd ||
        selected2nd ||
        selected1st ||
        selected0th) && (
        <a
          href={`https://blueprint-frost.herokuapp.com/download?sixth=${
            selected6th && true
          }&fifth=${selected5th && true}&fourth=${selected4th && true}&third=${
            selected3rd && true
          }&second=${selected2nd && true}&first=${selected1st && true}&ground=${
            selected0th && true
          }`}
          className="download"
        >
          <MdCloudDownload />
          Download Plans
        </a>
      )}
      <div className="plans">
        <button onClick={() => setPlanModal(true)}>Floor / Space Plans</button>
      </div>
      {/* <div className="links">
        <Link to="/">
          <span>&larr;</span> go back
        </Link>
      </div> */}
    </StyledAreaCalculator>
  );
}

const StyledAreaCalculator = styled(motion.div)`
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
  align-items: center;
  opacity: ${({ props }) => (props.showUI ? 1 : 0)} !important;
  transition: all 0.5s ease;
  .download {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin: 1rem 0 0;
    font-weight: 500;
    svg {
      margin-right: 0.5rem;
    }
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
  h3 {
    font-size: 1.2rem;
    color: #d7b176;
    /* line-height: 1; */
    margin: 0 0 1rem;
  }
  .links {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    transition: all 0.7s ease-in-out;
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
  .area {
    width: 100%;
    padding: 0 1.5rem;
    h4 {
      font-size: 1rem;
      color: #fff;
      margin: 0 0 1rem;
      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
    }
  }
`;
