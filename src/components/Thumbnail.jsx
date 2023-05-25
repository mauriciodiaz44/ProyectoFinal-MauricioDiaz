import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// Este es un paquete que trae un carousel responsive

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  .carousel .slide img {
    padding: 10px;
  }
  .carousel .thumbs-wrapper {
    margin: 0;
    margin-top: 20px;
  }
  .carousel .thumb {
    border: none;
    padding: 0.25rem;
    background-color: #fff;
    border: 1px solid var(--bs-border-color);
    border-radius: 2px;
    max-width: 100%;
    height: auto;
    opacity: 0.4;
    transition: all 0.2s ease-out;
  }
  .carousel .control-dots .dot,
  .carousel .control-dots .dot.selected,
  .carousel .control-dots .dot:hover {
    background: var(--primary);
  }
  .carousel .thumb.selected,
  .carousel .thumb:hover {
    border: 1px solid var(--primary);
  }
  .carousel .thumb.selected {
    border-color: var(--primary);
    opacity: 1;
  }
  .carousel .control-prev.control-arrow:before {
    border-right: 8px solid var(--primary);
  }
  .carousel .control-next.control-arrow:before {
    border-left: 8px solid var(--primary);
  }
`;

const Thumbnail = ({ item }) => {
  return (
    <Wrapper className="details__thumbnail">
      <Carousel>
        {item.images.map((img, index) => (
          <div className="details__thumbnail-col" key={index}>
            <img
              src={img.url}
              alt={img.url}
              width="500"
              height="500"
              className="img-fluid"
            />
          </div>
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default Thumbnail;
