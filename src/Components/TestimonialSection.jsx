import SectionTitle from './blockComponents/SectionTitle'

import star from '../assets/images/star.svg'

// Components must be declared outside other components.
// Otherwise React creates a "new" Stars on every render and rebuilds it from scratch.
function Stars({ count }) {
    const stars = []
    for (let i = 0; i < count; i++) {
        stars.push(<img key={i} src={star} alt="" className="testimonial__star" />)
    }
    return <>{stars}</>
}

function getRatingText(mark) {
    if (mark === 5) return 'Excellent'
    if (mark === 4) return 'Good'
    if (mark === 3) return 'Not bad'
    return 'Mhh'
}

// "Sofia Martin" -> "SM"
function getInitials(name) {
    return name.split(' ').map(word => word[0]).join('').toUpperCase()
}

function TestimonialSection(props) {
    const title = 'Testimonials'
    const subtitle = 'What our clients say about working with us.'

    return (
        <section className="testimonial">
            <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
            <div className="container testimonial__list">
                {props.data.map((item, index) => (
                    <div key={index} className="testimonial__card">
                        <span aria-label={`${item.mark} out of 5 stars`}>
                            <Stars count={item.mark} />
                        </span>
                        <p className="testimonial__rating">{getRatingText(item.mark)}</p>

                        <p className="testimonial__comment">{item.comment}</p>
                        <div className="testimonial__author">
                            {item.image
                                ? <img src={item.image} alt={item.name} className="testimonial__avatar" loading="lazy" />
                                : <div className="testimonial__avatar testimonial__avatar--initials" aria-hidden="true">{getInitials(item.name)}</div>}
                            <div>
                                <p>{item.name}</p>
                                <p className="testimonial__position">{item.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default TestimonialSection
