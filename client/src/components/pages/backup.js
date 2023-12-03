import React, { useState, useEffect, useRef } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./EventHandling.css";

const ScrollingParagraph = () => {
  const [showArrow, setShowArrow] = useState(false);
  const paraScrollRef = useRef();
  console.log(showArrow);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = paraScrollRef.current.scrollTop;
      console.log("scrollPosition: ", scrollPosition);
      setShowArrow(scrollPosition > 100);
    };

    paraScrollRef.current.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      paraScrollRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const element = paraScrollRef.current;
    const startPosition = element.scrollTop;
    const startTime = performance.now();
    const duration = 500; // Adjust the duration as needed

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      element.scrollTop = startPosition * (1 - progress);

      if (progress < 1) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    window.requestAnimationFrame(animateScroll);
  };

  return (
    <div className="main-container vh-100 overflow-hidden">
      {showArrow && (
        <div className="scroll-to-top">
          <FaArrowCircleUp
            onClick={scrollToTop}
            className="text-info fs-1 position-absolute bottom-0 end-0 me-5 mb-5"
          />
        </div>
      )}
      <div
        className="Para-scroll vh-100 overflow-y-scroll "
        ref={paraScrollRef}
      >
        <div className="para-content">
          <p>
            non turpis ultricies finibus. Aenean efficitur felis vitae velit
            aliquet, id gravida odio rhoncus. Nunc sodales gravida nisl, vitae
            imperdiet turpis ultricies vel. Sed euismod nunc ac nulla accumsan,
            ac tincidunt orci feugiat.
          </p>
          <p className="scrolling-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod arcu et quam bibendum, eu fermentum odio sodales. Integer
            vel accumsan nibh. Aenean dapibus euismod leo, id imperdiet arcu
            aliquam at. Nulla facilisi. Duis ullamcorper quam vitae libero
            sagittis, non placerat ipsum bibendum. Fusce bibendum vehicula odio,
            vel tristique urna dapibus vel. Ut nec nisl nec dolor tincidunt
            venenatis nec nec justo. Curabitur pharetra justo eu mauris
            volutpat, at gravida justo malesuada. Nunc cursus laoreet eros, ac
            malesuada arcu consectetur et. Fusce hendrerit massa vel malesuada
            venenatis. Pellentesque habitant morbi tristique
          </p>
          <p>
            senectus et netus et malesuada fames ac turpis egestas. Integer
            vitae metus vitae dolor lobortis accumsan eu sit amet velit. Vivamus
            semper consectetur nisl, vel egestas quam feugiat vel. Quisque et
            est nec eros ultrices suscipit eget eu risus. Integer bibendum diam
            vel diam vestibulum, vel facilisis nisi eleifend. Sed vitae velit
            nec libero pellentesque posuere. Sed ultrices ligula et orci
            malesuada, non aliquet nisi eleifend. Proin id justo ut justo
            vulputate bibendum nec in mi. Nam nec nunc non turpis ultricies
            finibus. Aenean efficitur felis vitae velit aliquet, id gravida odio
            rhoncus. Nunc sodales gravida nisl, vitae imperdiet turpis ultricies
            vel. Sed euismod nunc ac nulla accumsan, ac tincidunt orci feugiat.
          </p>

          <p>
            non turpis ultricies finibus. Aenean efficitur felis vitae velit
            aliquet, id gravida odio rhoncus. Nunc sodales gravida nisl, vitae
            imperdiet turpis ultricies vel. Sed euismod nunc ac nulla accumsan,
            ac tincidunt orci feugiat.
          </p>
          <p className="scrolling-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod arcu et quam bibendum, eu fermentum odio sodales. Integer
            vel accumsan nibh. Aenean dapibus euismod leo, id imperdiet arcu
            aliquam at. Nulla facilisi. Duis ullamcorper quam vitae libero
            sagittis, non placerat ipsum bibendum. Fusce bibendum vehicula odio,
            vel tristique urna dapibus vel. Ut nec nisl nec dolor tincidunt
            venenatis nec nec justo. Curabitur pharetra justo eu mauris
            volutpat, at gravida justo malesuada. Nunc cursus laoreet eros, ac
            malesuada arcu consectetur et. Fusce hendrerit massa vel malesuada
            venenatis. Pellentesque habitant morbi tristique
          </p>
          <p>
            senectus et netus et malesuada fames ac turpis egestas. Integer
            vitae metus vitae dolor lobortis accumsan eu sit amet velit. Vivamus
            semper consectetur nisl, vel egestas quam feugiat vel. Quisque et
            est nec eros ultrices suscipit eget eu risus. Integer bibendum diam
            vel diam vestibulum, vel facilisis nisi eleifend. Sed vitae velit
            nec libero pellentesque posuere. Sed ultrices ligula et orci
            malesuada, non aliquet nisi eleifend. Proin id justo ut justo
            vulputate bibendum nec in mi. Nam nec nunc non turpis ultricies
            finibus. Aenean efficitur felis vitae velit aliquet, id gravida odio
            rhoncus. Nunc sodales gravida nisl, vitae imperdiet turpis ultricies
            vel. Sed euismod nunc ac nulla accumsan, ac tincidunt orci feugiat.
          </p>
        </div>
        <div className="text-transparent">
          <p className="scrolling-text">
            <span className="text-danger">Vijay</span> ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam euismod arcu et quam bibendum,
            eu fermentum odio sodales. Integer vel accumsan nibh. Aenean dapibus
            euismod leo, id imperdiet arcu aliquam at. Nulla facilisi. Duis
            ullamcorper quam vitae libero sagittis, non placerat ipsum bibendum.
            Fusce bibendum vehicula odio, vel tristique urna dapibus vel. Ut nec
            nisl nec dolor tincidunt venenatis nec nec justo. Curabitur pharetra
            justo eu mauris volutpat, at gravida justo malesuada. Nunc cursus
            laoreet eros, ac malesuada arcu consectetur et. Fusce hendrerit
            massa vel malesuada venenatis. Pellentesque habitant morbi tristique
          </p>
          <p>
            senectus et netus et malesuada fames ac turpis egestas. Integer
            vitae metus vitae dolor lobortis accumsan eu sit amet velit. Vivamus
            semper consectetur nisl, vel egestas quam feugiat vel. Quisque et
            est nec eros ultrices suscipit eget eu risus. Integer bibendum diam
            vel diam vestibulum, vel facilisis nisi eleifend. Sed vitae velit
            nec libero pellentesque posuere. Sed ultrices ligula et orci
            malesuada, non aliquet nisi eleifend. Proin id justo ut justo
            vulputate bibendum nec in mi. Nam nec nunc non turpis ultricies
            finibus. Aenean efficitur felis vitae velit aliquet, id gravida odio
            rhoncus. Nunc sodales gravida nisl, vitae imperdiet turpis ultricies
            vel. Sed euismod nunc ac nulla accumsan, ac tincidunt orci{" "}
            <span className="text-danger">feugiat</span>.
          </p>
        </div>
        <div className="para-content">
          <p>
            non turpis ultricies finibus. Aenean efficitur felis vitae velit
            aliquet, id gravida odio rhoncus. Nunc sodales gravida nisl, vitae
            imperdiet turpis ultricies vel. Sed euismod nunc ac nulla accumsan,
            ac tincidunt orci feugiat.
          </p>
          <p className="scrolling-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod arcu et quam bibendum, eu fermentum odio sodales. Integer
            vel accumsan nibh. Aenean dapibus euismod leo, id imperdiet arcu
            aliquam at. Nulla facilisi. Duis ullamcorper quam vitae libero
            sagittis, non placerat ipsum bibendum. Fusce bibendum vehicula odio,
            vel tristique urna dapibus vel. Ut nec nisl nec dolor tincidunt
            venenatis nec nec justo. Curabitur pharetra justo eu mauris
            volutpat, at gravida justo malesuada. Nunc cursus laoreet eros, ac
            malesuada arcu consectetur et. Fusce hendrerit massa vel malesuada
            venenatis. Pellentesque habitant morbi tristique
          </p>
          <p>
            senectus et netus et malesuada fames ac turpis egestas. Integer
            vitae metus vitae dolor lobortis accumsan eu sit amet velit. Vivamus
            semper consectetur nisl, vel egestas quam feugiat vel. Quisque et
            est nec eros ultrices suscipit eget eu risus. Integer bibendum diam
            vel diam vestibulum, vel facilisis nisi eleifend. Sed vitae velit
            nec libero pellentesque posuere. Sed ultrices ligula et orci
            malesuada, non aliquet nisi eleifend. Proin id justo ut justo
            vulputate bibendum nec in mi. Nam nec nunc non turpis ultricies
            finibus. Aenean efficitur felis vitae velit aliquet, id gravida odio
            rhoncus. Nunc sodales gravida nisl, vitae imperdiet turpis ultricies
            vel. Sed euismod nunc ac nulla accumsan, ac tincidunt orci feugiat.
          </p>

          <p>
            non turpis ultricies finibus. Aenean efficitur felis vitae velit
            aliquet, id gravida odio rhoncus. Nunc sodales gravida nisl, vitae
            imperdiet turpis ultricies vel. Sed euismod nunc ac nulla accumsan,
            ac tincidunt orci feugiat.
          </p>
          <p className="scrolling-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod arcu et quam bibendum, eu fermentum odio sodales. Integer
            vel accumsan nibh. Aenean dapibus euismod leo, id imperdiet arcu
            aliquam at. Nulla facilisi. Duis ullamcorper quam vitae libero
            sagittis, non placerat ipsum bibendum. Fusce bibendum vehicula odio,
            vel tristique urna dapibus vel. Ut nec nisl nec dolor tincidunt
            venenatis nec nec justo. Curabitur pharetra justo eu mauris
            volutpat, at gravida justo malesuada. Nunc cursus laoreet eros, ac
            malesuada arcu consectetur et. Fusce hendrerit massa vel malesuada
            venenatis. Pellentesque habitant morbi tristique
          </p>
          <p>
            senectus et netus et malesuada fames ac turpis egestas. Integer
            vitae metus vitae dolor lobortis accumsan eu sit amet velit. Vivamus
            semper consectetur nisl, vel egestas quam feugiat vel. Quisque et
            est nec eros ultrices suscipit eget eu risus. Integer bibendum diam
            vel diam vestibulum, vel facilisis nisi eleifend. Sed vitae velit
            nec libero pellentesque posuere. Sed ultrices ligula et orci
            malesuada, non aliquet nisi eleifend. Proin id justo ut justo
            vulputate bibendum nec in mi. Nam nec nunc non turpis ultricies
            finibus. Aenean efficitur felis vitae velit aliquet, id gravida odio
            rhoncus. Nunc sodales gravida nisl, vitae imperdiet turpis ultricies
            vel. Sed euismod nunc ac nulla accumsan, ac tincidunt orci feugiat.
          </p>

          <p>
            non turpis ultricies finibus. Aenean efficitur felis vitae velit
            aliquet, id gravida odio rhoncus. Nunc sodales gravida nisl, vitae
            imperdiet turpis ultricies vel. Sed euismod nunc ac nulla accumsan,
            ac tincidunt orci feugiat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollingParagraph;
