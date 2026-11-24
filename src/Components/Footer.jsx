import logo from '../assets/images/logo.png'
import facebook from '../assets/images/facebook.svg'
import linkedin from '../assets/images/linkedin.svg'
import twitter from '../assets/images/twitter.svg'
import iconMap from '../assets/images/map.svg'
import iconPhone from '../assets/images/phone.svg'
import iconWeb from '../assets/images/global.svg'

const socials = [
    { name: 'Facebook', link: 'https://www.facebook.com/', icon: facebook },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/', icon: linkedin },
    { name: 'Twitter', link: 'https://www.twitter.com/', icon: twitter },
]

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <img src={logo} alt="Company logo" width="160" height="37" loading="lazy" />
                <div className="footer__row">
                    <p>Try to make simple edits</p>

                    <div className="footer__about">
                        <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="footer__socials">
                            {socials.map(social => (
                                <a key={social.name} href={social.link} className="footer__social"
                                    target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                                    <img src={social.icon} alt="" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer__contacts">
                        <div className="footer__contact">
                            <img src={iconMap} alt="Address" /><p>1245 Rang Raod Sadar, E152 95RB</p>
                        </div>

                        <div className="footer__contact">
                            <img src={iconPhone} alt="Phone" /><p>(923) 3354 2252 <br />(982) 2325 2249</p>
                        </div>

                        <div className="footer__contact">
                            <img src={iconWeb} alt="Email" /><p>example@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
