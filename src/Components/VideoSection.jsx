// videoBg.jpg was an exact copy of heroBackground2, so we reuse that picture
import bg from '../assets/images/heroBackground2.webp'

function VideoSection() {
    return (
        <section className="video"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 51, 0.6), rgba(0, 0, 51, 0.6)), url(${bg})` }}>
            <div className="video__content">
                <h2 className="video__title">Let's grow your business together</h2>
                <p className="video__text">Tell us about your idea. The first consultation is free.</p>
                <a href="#contact" className="btn btn--primary">Get a free consultation</a>
            </div>
        </section>
    )
}
export default VideoSection
