import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useStore } from "../store/store";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const { setShowGallery } = useStore();

  return (
    <StyledNav>
      <Link to="/" className="logo">
        <img src="/logo-white.png" alt="" />
      </Link>
      <button className="toggle" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <MdClose size={24} /> : <HiOutlineMenuAlt3 size={24} />}
      </button>
      <div
        className="link"
        style={{
          maxHeight: showMenu ? "100vh" : "0",
        }}
      >
        <Link to="/floors" onClick={() => setShowMenu(false)}>
          Building
        </Link>
        <Link to="/area" onClick={() => setShowMenu(false)}>
          Availability
        </Link>
        <Link to="/amenities" onClick={() => setShowMenu(false)}>
          Location
        </Link>
        <button
          onClick={() => {
            setShowMenu(false);
            setShowGallery(true);
          }}
        >
          Gallery
        </button>
        <Link to="/" onClick={() => setShowMenu(false)}>
          Contact
        </Link>
      </div>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(150, 115, 70);
  background: linear-gradient(
    90deg,
    rgba(150, 115, 70, 1) 0%,
    rgba(207, 168, 109, 1) 100%
  );
  color: #fff;
  width: 100%;
  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  border: none;
  transition: all 0.3s ease-in-out;
  /* cursor: pointer; */
  z-index: 99;
  * {
    text-transform: uppercase;
    color: #fff;
  }
  .logo {
    img {
      height: 20px;
    }
  }
  .link {
    font-size: 1rem;
    display: flex;
    align-items: center;
    a,
    button {
      margin-left: 2rem;
      border: none;
      color: inherit;
      background: none;
      font-size: inherit;
      cursor: pointer;
    }
    transition: all 0.3s ease-in-out;
    @media (max-width: 768px) {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      background: rgb(150, 115, 70);
      background: linear-gradient(
        90deg,
        rgba(150, 115, 70, 1) 0%,
        rgba(207, 168, 109, 1) 100%
      );
      a,
      button {
        margin-bottom: 2rem;
      }
    }
  }
  .toggle {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
    background: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
  }
`;
