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
    original: "./assets/images/IMG_2898.jpeg",
    thumbnail: "./assets/images/IMG_2898.jpeg",
  },
  {
    original: "./assets/images/IMG_2899.jpeg",
    thumbnail: "./assets/images/IMG_2899.jpeg",
  },
  {
    original: "./assets/images/IMG_2900.jpeg",
    thumbnail: "./assets/images/IMG_2900.jpeg",
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
