'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="w-full z-10 transition duration-300 flex items-center justify-between ease-in-out p-6 bg-black">
            <Link href="/" aria-label="Richard Alvarez" className="flex-grow">
                <h1 className='text-2xl uppercase tracking-widest font-bold whitespace-nowrap'>Rick Alvarez</h1>
            </Link>
        </header>
    );
};

export default Header;