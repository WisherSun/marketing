import SectionTitle from "./blockComponents/SectionTitle";

import arrow from '../assets/images/arrow.svg'

function FAQSection(props) {
    const title = 'Frequently Asked Questions'
    const subtitle = 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    return (
        <section className="container faq">
            <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
            {props.data.map(item => (
                <div key={item.title} className="faq__item">
                    <div className="faq__head">
                        <p className="faq__question">{item.title}</p>
                        <img src={arrow} alt="" className="faq__arrow" />
                    </div>

                    <div className="faq__answer">
                        {item.subtitle}
                    </div>
                </div>
            ))}
        </section>
    )
}
export default FAQSection
