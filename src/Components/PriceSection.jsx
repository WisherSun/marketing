import SectionTitle from "./blockComponents/SectionTitle";

function PriceSection(props) {
    const title = 'Our Price'
    const subtitle = 'Simple plans with no hidden fees. Choose the one that fits your business.'

    return (
        <section className="price" id="pricing">
            <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
            <div className="container price__list">
                {props.data.map(item => (
                    <div key={item.title} className="price__card">
                        <img src={item.image} alt="" className="price__image" />
                        <h3>{item.title}</h3>
                        <div className="price__circle">
                            <p>{item.price}</p>
                            <p className="price__time">{item.time}</p>
                        </div>
                        {item.info.map(feature => (
                            <p key={feature}>{feature}</p>
                        ))}
                        <a href="#contact" className="btn btn--primary price__button">Choose plan</a>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default PriceSection
