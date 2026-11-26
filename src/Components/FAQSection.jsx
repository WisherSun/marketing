import { useState } from "react";
import SectionTitle from "./blockComponents/SectionTitle";

import arrow from '../assets/images/arrow.svg'

function FAQSection(props) {
    // which question is open (null = all closed). The first one is open at the start.
    const [openIndex, setOpenIndex] = useState(0)

    const title = 'Frequently Asked Questions'
    const subtitle = 'Answers to the questions our clients ask most often.'

    function toggle(index) {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="container faq" id="faq">
            <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
            {props.data.map((item, index) => {
                const isOpen = openIndex === index
                return (
                    <div key={item.title} className="faq__item">
                        <button className="faq__head" onClick={() => toggle(index)} aria-expanded={isOpen}>
                            <span className="faq__question">{item.title}</span>
                            <img src={arrow} alt="" className={isOpen ? 'faq__arrow faq__arrow--open' : 'faq__arrow'} />
                        </button>

                        {isOpen && (
                            <div className="faq__answer">
                                {item.subtitle}
                            </div>
                        )}
                    </div>
                )
            })}
        </section>
    )
}
export default FAQSection
