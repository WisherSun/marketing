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

const quickLinks = [
    { name: 'About us', link: '#about' },
    { name: 'Services', link: '#services' },
    { name: 'Pricing', link: '#pricing' },
    { name: 'FAQ', link: '#faq' },
    { name: 'Blog', link: '#blog' },
]

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__about">
                        <img src={logo} alt="Fulkuri logo" width="160" height="37" loading="lazy" />
                        <p className="footer__text">Fulkuri is a marketing agency that helps small and medium businesses find new customers and grow.</p>
                        <div className="footer__socials">
                            {socials.map(social => (
                                <a key={social.name} href={social.link} className="footer__social"
                                    target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                                    <img src={social.icon} alt="" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <nav className="footer__links" aria-label="Quick links">
                        <h3 className="footer__heading">Quick links</h3>
                        {quickLinks.map(item => (
                            <a key={item.name} href={item.link}>{item.name}</a>
                        ))}
                    </nav>

                    <div className="footer__contacts">
                        <h3 className="footer__heading">Contacts</h3>
                        <div className="footer__contact">
                            <img src={iconMap} alt="Address" /><p>1245 Rang Road Sadar, E152 95RB</p>
                        </div>

                        <div className="footer__contact">
                            <img src={iconPhone} alt="Phone" /><p>(923) 3354 2252 <br />(982) 2325 2249</p>
                        </div>

                        <div className="footer__contact">
                            <img src={iconWeb} alt="Email" /><p>example@example.com</p>
                        </div>
                    </div>
                </div>

                <p className="footer__copyright">© {new Date().getFullYear()} Fulkuri. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
