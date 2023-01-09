import { motion } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useStore } from "../store/store";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Gallery() {
  const { setShowGallery } = useStore();

  return (
    <StyledGallery
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      initial={{ opacity: 0, y: 100 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <button className="close" onClick={() => setShowGallery(false)}>
        <MdClose />
      </button>
      <div className="gallery">
        <div className="slider-preview">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <img src={`/gallery.png`} alt=" " />
            </SwiperSlide>
            <SwiperSlide>
              <img src={`/gallery.png`} alt=" " />
            </SwiperSlide>
            <SwiperSlide>
              <img src={`/gallery.png`} alt=" " />
            </SwiperSlide>
            <SwiperSlide>
              <img src={`/gallery.png`} alt=" " />
            </SwiperSlide>
          </Swiper>
          <h4>Caption</h4>
        </div>
      </div>
    </StyledGallery>
  );
}

const StyledGallery = styled(motion.div)`
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
  z-index: 110;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  * {
    color: #d7b176;
  }
  @media (max-width: 900px) {
    padding: 4rem 1rem;
    flex-direction: column;
  }
  .close {
    /* height: 20%; */
    border-radius: 50%;
    aspect-ratio: 1;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    background: transparent;
    cursor: pointer;
    position: absolute;
    top: 2rem;
    right: 2rem;
    padding: 0.5rem;
    @media (max-width: 900px) {
      top: 1rem;
      right: 1rem;
      font-size: 1rem;
    }
  }
  .gallery {
    /* padding: 2rem; */
    height: 90%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slider-preview {
    flex: 1;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 900px) {
      margin-top: 1rem;
      width: 100%;
    }
    .swiper {
      height: 100%;
      width: 100%;
    }
    .swiper-wrapper {
      /* display: grid; */
    }
    .swiper-slide {
      height: 85%;
      width: 100%;
      padding: 0 5%;
      margin: auto auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
`;
