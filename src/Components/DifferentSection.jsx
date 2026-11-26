import { useState } from "react";
import img from '../assets/images/differentImg.webp'

function DifferentSection(props) {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    return (
        <section className="container different" id="about">
            <div className="different__text">
                <h2 className="different__title">Why We Are Different?</h2>
                {props.data.map((item, index) => (
                    <div key={index}
                        className="different__item"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}>
                        <img src={item.img1} alt="" className="different__icon"
                            style={{ opacity: hoveredIndex === index ? 0 : 1 }} />
                        <img src={item.img2} alt="" className="different__icon different__icon--hover"
                            style={{ opacity: hoveredIndex === index ? 1 : 0 }} />
                        <p><b>{item.title}</b></p>
                        <p>{item.subtitle}</p>
                    </div>
                ))}

                <a href="#team" className="btn different__button">Meet our team</a>
            </div>

            <div className="different__image" role="img" aria-label="Our team at work"
                style={{ backgroundImage: `url(${img})` }}></div>
        </section>
    )
}

export default DifferentSection
