// videoBg.jpg was an exact copy of heroBackground2, so we reuse that picture
import bg from '../assets/images/heroBackground2.webp'

function VideoSection() {
    return <section className="video" style={{ backgroundImage: `url(${bg})` }}></section>
}
export default VideoSection
