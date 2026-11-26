import SectionTitle from "./blockComponents/SectionTitle";
import time from "../assets/images/time.svg"

function NewsSection(props) {
    const title = 'News & Media'
    const subtitle = 'Tips, ideas and news from the world of marketing.'

    return (
        <section className="news" id="blog">
            <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
            <div className="container news__list">
                {props.data.map(item => (
                    <div key={item.title} className="news__card">
                        <img src={item.image} alt={item.title} className="news__image" width="390" height="350" loading="lazy" />
                        <p className="news__title">{item.title}</p>
                        <p className="news__text">{item.subtitle}</p>
                        <button className="news__button">Read more</button>
                        <div className="news__divider"></div>

                        <div className="news__date">
                            <img src={time} alt="" />
                            <p>{item.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default NewsSection
