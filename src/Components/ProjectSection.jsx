import SectionTitle from "./blockComponents/SectionTitle";

function ProjectSection(props) {
    const title = 'Our Projects'
    const subtitle = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    return (
        <section className="project">
            <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
            <div className="container project__list">
                {props.data.map(item => (
                    <div key={item.title} className="project__card">
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default ProjectSection
