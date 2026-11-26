import { useState, useEffect } from "react";

function HeroSection(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = props.data.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesCount);
    }, 5000);

    return () => clearInterval(interval);
  }, [slidesCount]);

  return (
    <section className="hero" id="home">
      {/* width and transform depend on the state, so they stay inline */}
      <div
        className="hero__track"
        style={{
          width: `${slidesCount * 100}%`,
          transform: `translateX(-${currentSlide * (100 / slidesCount)}%)`,
        }}
      >
        {props.data.map((hero, index) => (
          <div
            key={index}
            className="hero__slide"
            style={{
              backgroundImage: `url(${hero.background})`,
              width: `${100 / slidesCount}%`,
            }}
          >
            <div className="hero__content">
              <h1 className="hero__title">{hero.title1}</h1>
              <h1 className="hero__title">{hero.title2}</h1>

              <p>{hero.subtitle}</p>

              <div className="hero__buttons">
                <a href="#contact" className="btn btn--primary">Contact now</a>
                <a href="#services" className="btn">Our services</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
