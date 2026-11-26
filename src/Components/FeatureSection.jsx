import { useState } from "react";
import SectionTitle from "./blockComponents/SectionTitle";

function FeatureSection(props) {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const title = 'Our Feature'
    const subtitle = 'Three reasons why working with us is easy and comfortable.'

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
                        <a href="#services" className="btn">Read more</a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeatureSection
