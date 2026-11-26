import tool1 from '../assets/images/tool1.webp'
import tool2 from '../assets/images/tool2.webp'
import tool3 from '../assets/images/tool3.webp'
import tool4 from '../assets/images/tool4.webp'
import tool5 from '../assets/images/tool5.webp'

const tools = [
    { name: 'Debugged', logo: tool1 },
    { name: 'Techrius', logo: tool2 },
    { name: 'Horizon', logo: tool3 },
    { name: 'Traineds', logo: tool4 },
    { name: 'Salorixa', logo: tool5 },
]

function ToolsSection() {
    return (
        <section className="tools" aria-label="Our partners">
            <div className="tools__list">
                {tools.map(tool => (
                    <img key={tool.name} src={tool.logo} alt={tool.name}
                        className="tools__logo" width="307" height="178" loading="lazy" />
                ))}
            </div>
        </section>
    )
}
export default ToolsSection
