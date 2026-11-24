import SectionTitle from "./blockComponents/SectionTitle";

function PriceSection(props) {
    const title = 'Our Price'
    const subtitle = 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    return (
        <section className="price">
            <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
            <div className="container price__list">
                {props.data.map(item => (
                    <div key={item.title} className="price__card">
                        <img src={item.image} alt="" className="price__image" />
                        <h3>{item.title}</h3>
                        <div className="price__circle">
                            <p>{item.price}</p>
                            <p>{item.time}</p>
                        </div>
                        {item.info.map(feature => (
                            <p key={feature}>{feature}</p>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}
export default PriceSection
