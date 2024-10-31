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
    original: "./assets/images/IMG_2891.PNG",
    thumbnail: "./assets/images/IMG_2891.PNG",
  },
  {
    original: "./assets/images/ryw_0106z9.jpg",
    thumbnail: "./assets/images/ryw_0106z9.jpg",
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
