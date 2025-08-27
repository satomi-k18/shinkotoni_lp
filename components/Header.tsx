
import React, { useState, useEffect } from 'react';
import type { NavLink } from '../constants';
import { MenuIcon, XIcon } from './Icons';

interface HeaderProps {
    navLinks: NavLink[];
}

export const Header: React.FC<HeaderProps> = ({ navLinks }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navClass = isScrolled 
        ? 'bg-white shadow-md text-brand-dark' 
        : 'bg-transparent text-white';
    
    const linkClass = isScrolled ? 'hover:text-brand-terracotta' : 'hover:text-brand-beige';

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className="font-serif text-xl font-bold">Shinkotoni Yoga</a>
                <div className="flex items-center space-x-6">
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} className={`font-sans transition-colors duration-300 ${linkClass}`}>
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
                            <MenuIcon className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-brand-dark bg-opacity-95 z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden`}>
                <div className="flex justify-end p-6">
                    <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                        <XIcon className="h-6 w-6 text-white" />
                    </button>
                </div>
                <nav className="flex flex-col items-center justify-center h-full -mt-16">
                    {navLinks.map(link => (
                        <a 
                            key={link.href} 
                            href={link.href} 
                            className="font-serif text-3xl text-white py-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};
