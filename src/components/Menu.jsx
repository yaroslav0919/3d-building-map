import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { useStore } from "../store/store";

export default function Menu() {
  const { setMenu } = useStore();
  return (
    <StyledMenu
      key="menu"
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      initial={{ opacity: 0, y: -100 }}
      exit={{ opacity: 0, y: -100, transition: { duration: 0.5 } }}
    >
      <button className="close" onClick={() => setMenu(false)}>
        <MdClose />
      </button>
      <Link to="/" onClick={() => setMenu(false)}>
        home
      </Link>
      <Link to="/floors" onClick={() => setMenu(false)}>
        floors
      </Link>
      <Link to="/area" onClick={() => setMenu(false)}>
        area
      </Link>
      <Link to="/amenities" onClick={() => setMenu(false)}>
        amenities
      </Link>
    </StyledMenu>
  );
}

const StyledMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  color: #e26e40;
  padding: 0;
  font-size: 4rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 2rem;
  z-index: 111;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  a {
    line-height: 1;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 4px solid transparent;
    transition: all 0.3s ease-in-out;
    &:hover {
      border-bottom: 4px solid #e26e40;
    }
  }
  .close {
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 1.5rem;
    border: none;
    background: transparent;
    color: #e26e40;
    cursor: pointer;
  }
`;
