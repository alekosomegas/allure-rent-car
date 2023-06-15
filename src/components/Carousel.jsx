import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { nanoid } from "nanoid";
import React from "react";

function Arrow(props) {
  const disabeld = props.disabled ? " c-arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`c-arrow ${
        props.left ? "c-arrow--left" : "c-arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default function Carousel(props) {
  if (!props.photos) return;

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  let photos = props.photos.map((photo) => (
    <img
      className="keen-slider__slide"
      src={`/images/cars/${photo}`}
      alt="car-image"
      key={nanoid}
    />
  ));

  return (
    <>
      <div className="navigation-wrapper md:w-[60%]">
        <div ref={sliderRef} className="keen-slider">
          <img
            className="keen-slider__slide !object-contain"
            src={`/cars-thumbnails/${props.thumb}.png`}
            alt={props.thumb}
          />
          {photos}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </>
  );
}
