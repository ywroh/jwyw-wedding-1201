import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 100px 0px;
    background: #ffffff;
    width: 100%;
  border-bottom: 1px solid lightgray;
`;

const images = [
  {
    original: "./assets/images/ryw_0932z9.jpg",
    thumbnail: "./assets/images/ryw_0932z9.jpg",
  },
  {
    original: "./assets/images/IMG_2898.jpeg",
    thumbnail: "./assets/images/IMG_2898.jpeg",
  },
  {
    original: "./assets/images/ryw_0106z9.jpg",
    thumbnail: "./assets/images/ryw_0106z9.jpg",
  },
  {
    original: "./assets/images/ryw_0528z8.jpg",
    thumbnail: "./assets/images/ryw_0528z8.jpg",
  },
  {
    original: "./assets/images/ryw_0484z8.jpg",
    thumbnail: "./assets/images/ryw_0484z8.jpg",
  },
  {
    original: "./assets/images/ryw_0828z8.jpg",
    thumbnail: "./assets/images/ryw_0828z8.jpg",
  },
  {
    original: "./assets/images/ryw_1102z9.jpg",
    thumbnail: "./assets/images/ryw_1102z9.jpg",
  },
  {
    original: "./assets/images/ryw_1922z9.jpg",
    thumbnail: "./assets/images/ryw_1922z9.jpg",
  },
  {
    original: "./assets/images/ryw_2008z9.jpg",
    thumbnail: "./assets/images/ryw_2008z9.jpg",
  },
];

export default function Gallery() {
  return (
    <Wrapper>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
}
