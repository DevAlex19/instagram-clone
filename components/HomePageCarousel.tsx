import Image from "next/image";
import { useEffect, useState } from "react";

const IMAGES = ["photo1", "photo2", "photo3", "photo4"];

function HomePageCarousel() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      if (activeImage === IMAGES.length - 1) {
        setActiveImage(0);
      } else {
        setActiveImage((prev) => prev + 1);
      }
    }, 3000);
    return () => clearInterval(imageInterval);
  }, [activeImage]);

  return (
    <div
      style={{ backgroundImage: "url(/images/phone.png)" }}
      className="w-520 h-600 relative bg-no-repeat"
    >
      {IMAGES.map((image, index) => {
        const visibility = index === activeImage ? "visible" : "invisible";

        return (
          <div
            key={index}
            style={{
              width: "250px",
              top: "28px",
              left: "156px",
            }}
            className={`absolute ${visibility} animate-fadeIn`}
            onAnimationEnd={(e: any) => {
              e.target.classList.remove("animate-fadeIn");
            }}
          >
            <Image src={`/images/${image}.png`} width="260px" height="560px" />
          </div>
        );
      })}
    </div>
  );
}

export default HomePageCarousel;
