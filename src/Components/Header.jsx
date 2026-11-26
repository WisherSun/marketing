import { useState } from "react";

// "link" is the id of the section on the page (for example <section id="about">)
const menu = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Services', link: '#services' },
    { name: 'Projects', link: '#projects' },
    { name: 'Pricing', link: '#pricing' },
    { name: 'Blog', link: '#blog' },
    { name: 'Contact', link: '#contact' },
]

function Header(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="header">
            <div className="container header__inner">
                <a href="#home" aria-label="Fulkuri - go to top">
                    <img src={props.logo} alt="Fulkuri logo" className="header__logo" width="160" height="37" />
                </a>

                {/* The burger button is only visible on small screens (see App.css) */}
                <button
                    className="header__burger"
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>

                <nav className={isMenuOpen ? 'header__menu header__menu--open' : 'header__menu'}>
                    {menu.map(item => (
                        <a key={item.name} href={item.link} className="btn" onClick={() => setIsMenuOpen(false)}>
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}
export default Header
