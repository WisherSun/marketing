import SectionTitle from "./blockComponents/SectionTitle";

function ProjectSection(props) {
    const title = 'Our Projects'
    const subtitle = 'A few of the projects we are proud of.'

    return (
        <section className="project" id="projects">
            <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
            <div className="container project__list">
                {props.data.map(item => (
                    // dark gradient on top of the photo so the white text is readable
                    <div key={item.title} className="project__card"
                        style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 51, 0.85), rgba(0, 0, 51, 0.1) 60%), url(${item.bgImage})` }}>
                        <h3 className="project__title">{item.title}</h3>
                        <p className="project__category">{item.subtitle}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default ProjectSection
