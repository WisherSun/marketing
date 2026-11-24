import { useState } from "react";
import SectionTitle from './blockComponents/SectionTitle'

import insta from '../assets/images/instaBlue.svg'
import fb from '../assets/images/fbBlue.svg'
import twitter from '../assets/images/twitterBlue.svg'

function TeamSection(props) {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const title = 'Our Team'
    const subtitle = 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    return (
        <section className="team">
            <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
            <div className="container team__list">
                {props.data.map((item, index) => {
                    const isHovered = hoveredIndex === index
                    const socials = [
                        { link: item.instaLink, icon: insta, name: 'Instagram' },
                        { link: item.fbLink, icon: fb, name: 'Facebook' },
                        { link: item.twitterLink, icon: twitter, name: 'Twitter' },
                    ]

                    return (
                        <div key={index}
                            className="team__card"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}>
                            <img src={item.image} alt={item.name} className="team__photo" loading="lazy" />
                            <p className="team__name" style={{ color: isHovered ? '#0096ff' : '#213547' }}>{item.name}</p>
                            <p className="team__position">{item.position}</p>
                            <div className="team__line" style={{
                                width: isHovered ? '150px' : '100px',
                                background: isHovered ? '#0096ff' : 'grey',
                            }}></div>
                            <div className="team__socials">
                                {socials.map(social => (
                                    // If the link is empty, href={undefined} removes the attribute,
                                    // so a click does nothing instead of reloading the page
                                    <a key={social.name}
                                        className="team__social"
                                        href={social.link || undefined}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${item.name} on ${social.name}`}>
                                        <img src={social.icon} alt="" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
export default TeamSection
