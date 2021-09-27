import styled from "styled-components";

export const SliderContainer = styled.div`
  height: 250px;
  position: relative;
  width: 100%;

  display: grid;
  place-items: center;
  overflow: hidden;
  &::before,
  &::after {
    position: absolute;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: "";
    height: 100%;
    width: 25%;
    z-index: 2;
    pointer-events: none;
  }
  &::before {
    left: 0;
    top: 0;
  }
  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }
`;

export const SlideTrack = styled.div`
  width: calc(72px * 20);
  display: flex;
  animation: scroll 20s linear infinite;
  justify-content: space-around;
  @keyframes scroll {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(calc(-100px * 10));
    }
  }
`;

export const Slide = styled.div`
  width: 100px;
  height: 150px;

  /* display: grid;
  place-items: center; */
  transition: 0.5s;
  cursor: pointer;
`;
