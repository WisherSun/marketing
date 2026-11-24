import tool1 from '../assets/images/tool1.webp'
import tool2 from '../assets/images/tool2.webp'
import tool3 from '../assets/images/tool3.webp'
import tool4 from '../assets/images/tool4.webp'
import tool5 from '../assets/images/tool5.webp'

const tools = [tool1, tool2, tool3, tool4, tool5]

function ToolsSection() {
    return (
        <section className="tools">
            <div className="tools__list">
                {tools.map((tool, index) => (
                    <img key={index} src={tool} alt={`Partner logo ${index + 1}`}
                        className="tools__logo" width="307" height="178" loading="lazy" />
                ))}
            </div>
        </section>
    )
}
export default ToolsSection
