import SectionTitle from './blockComponents/SectionTitle'

function ServiceSection(props) {
    const title = 'Our Service'
    const subtitle = 'Everything you need to promote your business online and offline.'

    return (
        <section className="service" id="services">
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
