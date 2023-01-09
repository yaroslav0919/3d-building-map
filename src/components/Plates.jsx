import { motion } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";
import { MdClose } from "react-icons/md";

export default function Plates({ close }) {
  const [planItem, setPlanItem] = useState(6);
  const [planType, setPlanType] = useState("plans");
  return (
    <StyledPlates
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      initial={{ opacity: 0, y: 100 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <button className="close" onClick={() => close()}>
        <MdClose />
      </button>
      <div className="plates">
        <div className="list">
          <button
            onMouseOver={() => setPlanItem(6)}
            onFocus={() => setPlanItem(6)}
          >
            6th Floor <span>24,000 sq.ft.</span>
          </button>
          <button
            onMouseOver={() => setPlanItem(5)}
            onFocus={() => setPlanItem(5)}
          >
            5th Floor <span>18,000 sq.ft.</span>
          </button>
          <button
            onMouseOver={() => setPlanItem(6)}
            onFocus={() => setPlanItem(6)}
          >
            4th Floor <span>20,000 sq.ft.</span>
          </button>
          <button
            onMouseOver={() => setPlanItem(5)}
            onFocus={() => setPlanItem(5)}
          >
            3rd Floor <span>21,000 sq.ft.</span>
          </button>
          <button
            onMouseOver={() => setPlanItem(6)}
            onFocus={() => setPlanItem(6)}
          >
            2nd Floor <span>19,000 sq.ft.</span>
          </button>
          <button
            onMouseOver={() => setPlanItem(5)}
            onFocus={() => setPlanItem(5)}
          >
            1st Floor <span>15,000 sq.ft.</span>
          </button>
          <button
            onMouseOver={() => setPlanItem(6)}
            onFocus={() => setPlanItem(6)}
          >
            Ground Floor <span>10,000 sq.ft.</span>
          </button>
          <button
            onMouseOver={() => setPlanItem(5)}
            onFocus={() => setPlanItem(5)}
          >
            Lower Ground
          </button>
        </div>
        <div className="preview">
          <img src={`/${planType}/${planItem}.png`} alt=" " />
          <div>
            <button
              className={planType === "plans" ? "active" : undefined}
              onClick={() => setPlanType("plans")}
            >
              Floor Plan
            </button>
            <button
              className={planType === "spaces" ? "active" : undefined}
              onClick={() => setPlanType("spaces")}
            >
              Space Plan
            </button>
          </div>
        </div>
      </div>
    </StyledPlates>
  );
}

const StyledPlates = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f0ece4;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  @media (max-width: 900px) {
    padding: 4rem 1rem;
    flex-direction: column;
  }
  .close {
    /* height: 20%; */
    padding: 1rem;
    border-radius: 50%;
    aspect-ratio: 1;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    background: #9c8961;
    color: #fff;
    cursor: pointer;
    @media (max-width: 900px) {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 1rem;
      padding: 0.5rem;
    }
  }

  .plates {
    flex: 1;
    padding: 2rem;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    @media (max-width: 900px) {
      padding: 0;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0;
      height: 100%;
      overflow-y: auto;
      width: 100%;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 3;
      @media (max-width: 900px) {
        flex: 1;
      }
      button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-size: 1rem;
        font-weight: 500;
        background: transparent;
        border: none;
        padding: 1rem;
        text-align: left;
        color: #9c8961;
        cursor: pointer;
        @media (max-width: 900px) {
          font-size: 0.8rem;
          padding: 0.5rem;
        }
        span {
          font-size: 0.8rem;
          font-weight: 400;
          margin-left: 1rem;
          @media (max-width: 900px) {
            font-size: 0.7rem;
          }
        }
        &:not(:last-child) {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        &:hover,
        &:focus {
          background: #e2d4a4;
        }
      }
    }
    .preview {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      @media (max-width: 900px) {
        width: 100%;
        justify-content: flex-start;
        margin-top: 1rem;
      }
      img {
        height: 80%;
        object-fit: contain;
        object-position: center;
        @media (max-width: 900px) {
          height: auto;
          width: 100%;
        }
      }
      div {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        @media (max-width: 900px) {
          margin-top: 0;
        }
        button {
          white-space: nowrap;
          border: none;
          font-size: 0.9rem;
          padding: 0.5rem;
          color: #9c8961;
          &:hover,
          &:focus {
            background: #e2d4a4;
            color: #9c8961;
          }
        }
        .active {
          background: #e2d4a4;
          color: #9c8961;
        }
      }
    }
    .list {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr;
      @media (max-width: 900px) {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
`;
