import { useState } from "react";

const menu = ['Home', 'About', 'Service', 'Page', 'Blog', 'Contact']

function Header(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="header">
            <div className="container header__inner">
                <img src={props.logo} alt="Company logo" className="header__logo" width="160" height="37" />

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
                        <button key={item} onClick={() => setIsMenuOpen(false)}>{item}</button>
                    ))}
                </nav>
            </div>
        </header>
    )
}
export default Header
