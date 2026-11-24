import { useState } from "react";
import SectionTitle from "./blockComponents/SectionTitle";

function FeatureSection(props) {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const title = 'Our Feature'
    const subtitle = 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    return (
        <section className="feature">
            <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
            <div className="container feature__list">
                {props.data.map((item, index) => (
                    <div key={index}
                        className="feature__card"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{ background: hoveredIndex === index ? '#FF6900' : '#0096ff' }}>
                        <img src={item.img} alt="" className="feature__icon" />
                        <p><b>{item.title}</b></p>
                        <p>{item.subtitle}</p>
                        <button>Read more</button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeatureSection
