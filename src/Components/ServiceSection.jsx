import SectionTitle from './blockComponents/SectionTitle'

function ServiceSection(props) {
    const title = 'Our Service'
    const subtitle = 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    return (
        <section className="service">
            <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
            <div className="container service__list">
                {props.data.map(item => (
                    <div key={item.title} className="service__card">
                        <div className="service__head">
                            <img src={item.icon} alt="" className="service__icon" />
                            <h3>{item.title}</h3>
                        </div>
                        <p>{item.info}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default ServiceSection
