import React, { useState, useEffect } from "react";

function HeroSection(props) {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % props.data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [props.data.length]);

  return (
    <div style={{ overflow: "hidden", paddingTop: "80px" }}>
      
      <div
        style={{
          display: "flex",
          width: `${props.data.length * 100}%`,
          transform: `translateX(-${currentSlide * (100 / props.data.length)}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {props.data.map((hero, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${hero.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: `${100 / props.data.length}%`,
              height: "90vh",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "58%",
                marginLeft: "50px",
                textAlign: "left",
              }}
            >
              <h1 style={{ margin: 0 }}>{hero.title1}</h1>
              <h1 style={{ margin: 0 }}>{hero.title2}</h1>

              <p>{hero.subtitle}</p>

              <div
                style={{
                  display: "flex",
                  marginTop: "20px",
                  gap: "20px",
                }}
              >
                <button>Contact now</button>
                <button>More service</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default HeroSection;